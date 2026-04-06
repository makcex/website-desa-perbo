const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputFolder = "./images";      // folder gambar asli
const outputFolder = "./optimized";  // hasil webp

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

fs.readdirSync(inputFolder).forEach(file => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(
    outputFolder, 
    path.parse(file).name + ".webp"
  );

  sharp(inputPath)
    .resize({ width: 1200 }) // max lebar
    .webp({ quality: 70 })   // kompres webp
    .toFile(outputPath)
    .then(() => console.log("Sukses:", file))
    .catch(err => console.error(err));
});