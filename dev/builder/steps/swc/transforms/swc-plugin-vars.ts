import type { BlockStatement, Expression, ModuleItem, Program, Statement, VariableDeclaration } from "@swc/core";
import SwcVisitor from "@swc/core/Visitor";
import type { SwcSimpleTransformSettings } from "./swc-plugin-simple";
import { swcPluginSimpleTransform } from "./swc-plugin-simple";

class SwcVarsTransformer extends SwcVisitor {
  override visitProgram(n: Program): Program {
    n = super.visitProgram(n);
    return { ...n, body: this._sortStatements(n.body) as any };
  }

  override visitBlockStatement(block: BlockStatement): BlockStatement {
    block = super.visitBlockStatement(block);
    return { ...block, stmts: this._sortStatements(block.stmts) as any };
  }

  private _sortStatements(statements: readonly Statement[] | readonly ModuleItem[]): ModuleItem[] {
    const topVariableDeclarations: VariableDeclaration[] = [];

    const bodyStatements: ModuleItem[] = [];
    for (const stmt of statements) {
      if (stmt.type === "VariableDeclaration") {
        const declarator = stmt.declarations[0]!;
        if (!declarator.init || isConstantExpr(declarator.init)) {
          topVariableDeclarations.push(stmt);
          continue;
        }
      }
      bodyStatements.push(stmt);
    }

    topVariableDeclarations.sort(variableDeclarationSortCompare);

    return [...topVariableDeclarations, ...bodyStatements];
  }
}

export function swcPluginVars(settings: SwcSimpleTransformSettings = {}) {
  return (m: Program) => {
    m = swcPluginSimpleTransform({ ...settings, splitVarsAndSequences: true })(m);
    m = new SwcVarsTransformer().visitProgram(m);
    return m;
  };
}

function isConstantExpr(expression?: Expression): boolean {
  if (!expression) {
    return true;
  }
  switch (expression.type) {
    case "NumericLiteral":
    case "StringLiteral":
    case "BooleanLiteral":
    case "NullLiteral":
    case "RegExpLiteral":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
    case "BigIntLiteral":
    case "ClassExpression":
      return true;

    case "UnaryExpression":
      return isConstantExpr(expression.argument);

    case "BinaryExpression":
      return isConstantExpr(expression.left) && isConstantExpr(expression.right);

    case "CallExpression":
      if (expression.callee.type !== "MemberExpression") {
        return false;
      }
      if (!isConstantExpr(expression.callee.object)) {
        return false;
      }
      for (const arg of expression.arguments) {
        if (arg && !isConstantExpr(arg.expression)) {
          return false;
        }
      }
      break;

    case "MemberExpression":
      if (expression.object.type === "Identifier") {
        switch (expression.object.value) {
          case "Math":
          case "DOMMatrix":
            return true;
        }
      }
      return false;

    case "ObjectExpression":
      for (const property of expression.properties) {
        if (property.type !== "KeyValueProperty") {
          return false;
        }
        if (property.key.type === "Computed" && !isConstantExpr(property.key.expression)) {
          return false;
        }
        if (!isConstantExpr(property.value)) {
          return false;
        }
      }
      return true;

    case "ArrayExpression":
      for (const el of expression.elements) {
        if (el && !isConstantExpr(el.expression)) {
          return false;
        }
      }
      return true;

    case "Identifier":
      switch (expression.value) {
        case "Infinity":
        case "Math":
        case "NaN":
        case "Map":
        case "Set":
        case "Array":
        case "DOMMatrix":
        case "Uint8Array":
        case "Uint16Array":
        case "Uint32Array":
        case "Uint64Array":
        case "Int8Array":
        case "Int16Array":
        case "Int32Array":
        case "Int64Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
        case "DataView":
      }
      break;

    case "NewExpression":
      if (expression.callee.type === "Identifier") {
        switch (expression.callee.value) {
          case "Map":
          case "Set":
          case "Array":
          case "DOMMatrix":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Int64Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
          case "DataView":
            if (expression.arguments) {
              for (const arg of expression.arguments) {
                if (!isConstantExpr(arg.expression)) {
                  return false;
                }
              }
            }
            return true;
        }
      }
      return false;

    default:
      break;
  }
  return false;
}

function compareBoolean(a: boolean, b: boolean) {
  return !a && b ? -1 : a && !b ? 1 : 0;
}

function varKindOrdering(varKind: "var" | "let" | "const") {
  return varKind === "var" ? 0 : varKind === "let" ? 1 : 2;
}

function constExpressionOrdering(expression: Expression): number {
  switch (expression.type) {
    case "NumericLiteral":
      return 1;
    case "StringLiteral":
      return 2;
    case "BooleanLiteral":
      return 3;
    case "NullLiteral":
      return 4;
    case "RegExpLiteral":
      return 5;
    case "BigIntLiteral":
      return 8;
    case "UnaryExpression":
      return constExpressionOrdering(expression.argument);
    case "BinaryExpression":
      return Math.max(constExpressionOrdering(expression.left), constExpressionOrdering(expression.right));
    case "ObjectExpression":
      return 9;
    case "ArrayExpression":
      return 10;
    case "MemberExpression":
      return 11;
    case "NewExpression":
      return 12;
    case "CallExpression":
      return 13;
    case "Identifier":
      return 14;
    default:
      return 100;
  }
}

function variableDeclarationSortCompare(da: VariableDeclaration, db: VariableDeclaration) {
  const a = da.declarations[0]!;
  const b = db.declarations[0]!;

  let c = varKindOrdering(da.kind) - varKindOrdering(db.kind);
  if (c) {
    return c;
  }

  if (a.init && b.init) {
    if (a.init.type === "NumericLiteral" && b.init.type === "NumericLiteral") {
      return a.init.value < b.init.value ? -1 : a.init.value > b.init.value ? 1 : 0;
    }
    if (a.init.type === "BooleanLiteral" && b.init.type === "BooleanLiteral") {
      return a.init.value < b.init.value ? -1 : a.init.value > b.init.value ? 1 : 0;
    }
    if (a.init.type === "StringLiteral" && b.init.type === "StringLiteral") {
      return a.init.value.localeCompare(b.init.value);
    }
    c = constExpressionOrdering(a.init) - constExpressionOrdering(b.init);
    if (c) {
      return c;
    }
  } else {
    c = compareBoolean(!a.init, !b.init);
  }

  return c;
}
