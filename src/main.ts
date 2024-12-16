const firstSongLine: string[] = [
  `It's `,
  "the ",
  "edge ",
  "of ",
  "the ",
  "world ",
  "and ",
  "all ",
  "of ",
  "the ",
  "Western ",
  "civilization ",
];

const secondSongLine: string[] = [
  "The ",
  "sun ",
  "may ",
  "rise ",
  "in ",
  "the ",
  "East, ",
  "at ",
  "least ",
  "it ",
  "settles ",
  "in ",
  "the ",
  "final ",
  "location ",
];

const thirdSongLine: string[] = [
  `It's `,
  "understood ",
  "that ",
  "Hollywood ",
  "sells ",
  "Californication ",
];

const firstLineTimeout: number[] = [
  200, 200, 200, 200, 200, 200, 200, 200, 225, 250, 200, 200,
];

const secondLineTimeout: number[] = [
  200, 200, 200, 200, 200, 200, 200, 200, 225, 250, 200, 200, 200, 200, 200,
];

const thirdLineTimeout: number[] = [500, 800, 400, 1000, 800, 1200];

const songLyrics: string[][] = [firstSongLine, secondSongLine, thirdSongLine];
const songTimeouts: number[][] = [
  firstLineTimeout,
  secondLineTimeout,
  thirdLineTimeout,
];

let songOutput: string = "";
let alreadyShownLines: string = '';

async function playSong() {
  for (let line = 0; line < songLyrics.length; line++) {
    for (
      let songWordIndex = 0;
      songWordIndex < songLyrics[line].length;
      songWordIndex++
    ) {
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          console.clear();
          const cuttedOddElements: string = alreadyShownLines.slice(0, -2);
          console.log(cuttedOddElements);
          songOutput += songLyrics[line][songWordIndex];
          if (songWordIndex === songLyrics[line].length - 1) {
            console.log(songOutput);
            alreadyShownLines += songOutput + '\n';
            songOutput = "";
          } else {
            console.log(songOutput);
          }
          resolve();
        }, songTimeouts[line][songWordIndex])
      );
    }
  }
          console.clear();
          console.log(alreadyShownLines);
}

playSong();
