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

const firstLineTimeout: number[] = [
  100, 150, 450, 600, 750, 1000, 1500, 2000, 2250, 2500, 2750, 3500,
];

const secondLineTimeout: number[] = [
  3800, 4000, 4300, 4700, 5350, 5750, 5950, 6150, 6450, 6800, 7050, 7350, 7700,
  8050, 8300,
];

const songLyrics: string[][] = [firstSongLine, secondSongLine];
const songTimeouts: number[][] = [firstLineTimeout, secondLineTimeout];

let songOutput: string = "";

for (let line = 0; line < songLyrics.length; line++) {
  for (let songWordIndex = 0; songWordIndex < songLyrics[line].length; songWordIndex++) {
    setTimeout(() => {
      console.clear();
      songOutput += songLyrics[line][songWordIndex];
      console.log(songOutput);
      if(songWordIndex === songLyrics[line].length - 1) {
        songOutput = '';
      }
    }, songTimeouts[line][songWordIndex]);
  }
}
