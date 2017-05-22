"use strict";

const loadImage = filename => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = `assets/${filename}`;
    img.onload = () => {
      resolve({img, name: filename.substr(0, filename.indexOf("."))});
    };
    img.onerror = err => {
      reject(err);
    };
  });
};

// load images
(async () => {
  try {
    const images = await Promise.all([
      "gameboard.png",
      "gameboardOverlay.png",
      "headMonolith1.png",
      "headMonolith2.png",
      "headMonolith3.png",
      "headMonolith4.png",
      "headMonolith5.png",
      "headMonolith6.png",
      "layout1.png",
      "layout2.png",
      "layout3.png",
      "layout4.png",
      "layout5.png",
      "layout6.png",
      "layout7.png",
      "layout8.png",
      "layout9.png",
      "layout10.png",
      "layout11.png",
      "layout12.png",
      "layout13.png",
      "layout14.png",
      "marble1.png",
      "marble2.png",
      "marble3.png",
      "marble4.png",
      "marble5.png",
      "waresMonolith1.png",
      "waresMonolith2.png",
      "waresMonolith3.png",
      "waresMonolith4.png",
      "waresMonolith5.png",
      "waresMonolith6.png",
    ].map(i => loadImage(i)));
    // center ui draws over gameboard overlay when in shop
    context.drawImage(images.find(i => i.name === "headMonolith1").img, 184, 55);
    context.drawImage(images.find(i => i.name === "waresMonolith4").img, 69, 112);
    context.drawImage(images.find(i => i.name === "layout14").img, 68, 54);
    context.drawImage(images.find(i => i.name === "gameboard").img, 0, 0);
    context.drawImage(images.find(i => i.name === "marble1").img, 284, 85);
    context.drawImage(images.find(i => i.name === "gameboardOverlay").img, 0, 0);
  }
  catch (err) {
    console.error(err);
  }
})();

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
