import { resolve } from "path";

type SongWord = {
  w: string;
  duration?: number;
  delayAfterWord?: number;
  removeSpace?: boolean;
};

process.stdout.write("\x1B[?25l");

const song: SongWord[][] = [
  [
    { w: "It's" },
    { w: "the", delayAfterWord: 100 },
    { w: "edge" },
    { w: "of" },
    { w: "the" },
    { w: "world" },
    { w: "and" },
    { w: "all" },
    { w: "of" },
    { w: "Western" },
    { w: "civilization", delayAfterWord: 1250 },
  ],
  [
    { w: "The" },
    { w: "sun" },
    { w: "may" },
    { w: "rise" },
    { w: "in" },
    { w: "the" },
    { w: "East," },
    { w: "at" },
    { w: "least" },
    { w: "it" },
    { w: "settled" },
    { w: "in" },
    { w: "a" },
    { w: "final" },
    { w: "location", delayAfterWord: 1050 },
  ],
  [
    { w: "It's" },
    { w: "understood" },
    { w: "that" },
    { w: "Hollywood" },
    { w: "sells" },
    { w: "Cali", delayAfterWord: 100, removeSpace: true },
    { w: "for", delayAfterWord: 100, removeSpace: true },
    { w: "nication", delayAfterWord: 150 },
  ],
];

let songOutput: string = "";
let alreadyShownLines: string = "";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playSong() {
  for (let line = 0; line < song.length; line++) {
    for (
      let songWordIndex = 0;
      songWordIndex < song[line].length;
      songWordIndex++
    ) {
      const wordItem = song[line][songWordIndex];
      for (let charIndex = 0; charIndex < wordItem.w.length; charIndex++) {
        await sleep(wordItem.duration ?? 70);
        const char = wordItem.w[charIndex];
        songOutput += char;

        const isLastChar = charIndex === wordItem.w.length - 1;
        if (isLastChar) {
          songOutput += wordItem.removeSpace ? "" : " ";
        }

        console.clear();
        console.log(alreadyShownLines + songOutput);
      }

      await sleep(wordItem.delayAfterWord ?? 0);
    }

    alreadyShownLines += songOutput + "\n";
    songOutput = "";

    console.clear();
    console.log(alreadyShownLines);
  }
}

playSong();
