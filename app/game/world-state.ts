import { lerp, angle_wrap_degrees, lerpneg, clamp, abs } from "../math/math";
import { matrixCopy, identity } from "../math/matrix";
import type { Vec2 } from "../math/vectors";
import { gameTime, lerpDamp, gameTimeDelta, resetGameTime } from "./game-time";
import { allModels, levers, souls, SOULS_COUNT } from "./models";

export const camera_rotation: Vec2 = { x: 0, y: 180 } as Vec2;

export let souls_collected_count = 0;

let _messageEndTime = 1;

export const LOCAL_STORAGE_SAVED_GAME_KEY = "DanteSP22";

export let player_last_pulled_lever = 0;

export let rotatingPlatform1Rotation = 0;

export let rotatingPlatform2Rotation = 0;

export let rotatingHexCorridorRotation = 0;

export let game_completed: 0 | 1 = 0;

export let firstBoatLerp = 0;

export let secondBoatLerp = 0;

export let shouldRotatePlatforms = 0;

const showMessage = (message: string, duration: number) => {
  if (_messageEndTime < Infinity) {
    _messageEndTime = gameTime + duration;
    h4.innerHTML = message;
  }
};

export const worldStateUpdate = () => {
  shouldRotatePlatforms = lerpneg(levers[12]!.$lerpValue, levers[13]!.$lerpValue);

  rotatingHexCorridorRotation = lerp(
    lerpDamp(rotatingHexCorridorRotation, 0, 1),
    angle_wrap_degrees(rotatingHexCorridorRotation + gameTimeDelta * 60),
    levers[5]!.$lerpValue - levers[6]!.$lerpValue2,
  );

  rotatingPlatform1Rotation = lerp(
    lerpDamp(rotatingPlatform1Rotation, 0, 5),
    angle_wrap_degrees(rotatingPlatform1Rotation + gameTimeDelta * 56),
    shouldRotatePlatforms,
  );

  rotatingPlatform2Rotation = lerp(
    lerpDamp(rotatingPlatform2Rotation, 0, 4),
    angle_wrap_degrees(rotatingPlatform2Rotation + gameTimeDelta * 48),
    shouldRotatePlatforms,
  );

  secondBoatLerp = lerpDamp(secondBoatLerp, levers[9]!.$lerpValue2, 0.2 + 0.3 * abs(levers[9]!.$lerpValue2 * 2 - 1));

  firstBoatLerp = lerpDamp(firstBoatLerp, game_completed ? lerpDamp(firstBoatLerp, -9, 1.5) : clamp(gameTime / 3), 1);

  if (_messageEndTime && gameTime > _messageEndTime) {
    _messageEndTime = 0;
    h4.innerHTML = "";
  }

  if (levers[0]!.$value && levers[0]!.$lerpValue > 0.8) {
    if (souls_collected_count < SOULS_COUNT) {
      showMessage("Not leaving now, there are souls to catch!", 3);
      levers[0]!.$value = 0;
    } else if (!game_completed) {
      showMessage("Well done. They will be punished.<br>Thanks for playing", Infinity);
      game_completed = 1;
    }
  }

  for (const model of allModels) {
    model._update(matrixCopy(identity, model.$matrix));
  }

  for (const lever of levers) {
    lever._update();
  }

  for (const soul of souls) {
    soul._update();
  }
};

export const updateCollectedSoulsCounter = () => {
  h3.innerHTML =
    "Souls: " +
    [0, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII"][
      (souls_collected_count = souls.reduce((acc, { $value }) => acc + $value, 0))
    ]! +
    " / XIII";
};

export const loadGame = () => {
  try {
    const [savedLevers, savedSouls, savedLastPulledLever, savedGameTime, savedSecondBoatLerp] = JSON.parse(
      localStorage[LOCAL_STORAGE_SAVED_GAME_KEY]!,
    );
    levers.map(
      (lever, index) =>
        (lever.$lerpValue = lever.$lerpValue2 = lever.$value = index ? ((savedLevers[index] | 0) as 0 | 1) : 0),
    );
    souls.map((soul, index) => (soul.$value = (savedSouls[index] | 0) as 0 | 1));
    player_last_pulled_lever = savedLastPulledLever;
    secondBoatLerp = savedSecondBoatLerp;
    resetGameTime(savedGameTime);
  } catch (e) {
    if (DEBUG) {
      console.log(e);
    }
  }
  firstBoatLerp = clamp(player_last_pulled_lever);
};

export const saveGame = () => {
  localStorage[LOCAL_STORAGE_SAVED_GAME_KEY] = JSON.stringify([
    levers.map(({ $value }) => $value),
    souls.map(({ $value }) => $value),
    player_last_pulled_lever,
    gameTime,
    secondBoatLerp,
  ]);
};

export const onSoulCollected = () => {
  showMessage(
    [
      ,
      "Mark Zuckemberg<br>made the world worse",
      "Giorgia Meloni<br>fascist",
      "Andrzej Mazur<br>for the js13k competition",
      "Donald Trump<br>lies",
      "Kim Jong-un<br>Dictator, liked pineapple on pizza",
      "Maxime Euziere<br>forced me to finish this game",
      "She traded NFTs apes",
      ,
      "Vladimir Putin<br>evil war",
      "He was not a good person",
      ,
      "Salvatore Previti<br>made this evil game<br><br>Done. Go back to the boat",
    ][souls_collected_count] || 'Catched a "crypto bro".<br>"Web3" is all scam, lies and grift',
    souls_collected_count && souls_collected_count < 12 ? 5 : 7,
  );

  updateCollectedSoulsCounter();
  saveGame();
};

export const onPlayerPullLever = (leverIndex: number) => {
  if (DEBUG) {
    console.log("switch lever " + leverIndex + " = " + levers[leverIndex]?.$value);
  }

  if (leverIndex) {
    showMessage("* click *", 1);
  }
  player_last_pulled_lever = leverIndex;
  saveGame();
};
