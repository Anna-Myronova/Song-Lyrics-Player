const songLyrics: string[] = [
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

const songTimeouts: number[] = [
  100, 150, 450, 600, 750, 1000, 1500, 2000, 2250, 2500, 2750, 3500,
];

let songOutput: string = "";
for (let i = 0; i < songLyrics.length; i++) {
  setTimeout(() => {
    console.clear();
    songOutput += songLyrics[i];
    console.log(songOutput);
  }, songTimeouts[i]);
}
