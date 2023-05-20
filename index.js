const fs = require("fs");
const hashicon = require("hashicon");
const canvas = require("canvas");
const { createCanvas } = canvas;

const IMAGE_SIZE = 360;

const USAGE_MESSAGE = `
Usage: node index.js <hash> <filename>

  <hash>     The hash to generate an icon for
  <filename> The filename to save the icon to
`;

// pick a hash as first argument
const hash = process.argv[2];
if (!hash) {
  console.log(USAGE_MESSAGE);
  process.exit(2);
}

const filename = process.argv[3];
if (!filename) {
  console.log(USAGE_MESSAGE);
  process.exit(3);
}

const icon = hashicon(hash, { createCanvas, size: IMAGE_SIZE });

// save icon to file
const buffer = icon.toBuffer();
fs.writeFileSync(filename, buffer);
