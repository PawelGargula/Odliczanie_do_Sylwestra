const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let imageIndex = 1;

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

function plusImages(n) {
    showImages(imageIndex += n);
}

function showImages(index) {
    const images = document.querySelectorAll("img");

    if (index > images.length)
        imageIndex = 1;

    if (index < 1)
        imageIndex = images.length;

    images.forEach(image => {
        image.style.display = "none";
    });

    images[imageIndex-1].style.display = "block";  
}

function restartInterval() {
    clearInterval(showNextImage);
    showNextImage = setInterval(() => {
        plusImages(1);
    }, 5000);
}