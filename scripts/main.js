// Start timer
import { timer } from "./timer.js";

import { prev, next, imageIndex, plusImages, showImages } from "./slider.js";

// Show first image
showImages(imageIndex);

// Set auto image changing
let showNextImage = setInterval(() => {
    plusImages(1);
}, 5000);

// Change to prev image
prev.addEventListener("click", () => {
    plusImages(-1);
    restartInterval();
});

// Change to next image
next.addEventListener("click", () => {
    plusImages(1);
    restartInterval();
});

function restartInterval() {
    clearInterval(showNextImage);
    showNextImage = setInterval(() => {
        plusImages(1);
    }, 5000);
}