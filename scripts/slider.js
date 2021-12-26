let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

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

function showImages(number) {
    let images = document.querySelectorAll("img");

    if (number > images.length)
        imageIndex = 1;

    if (number < 1)
        imageIndex = images.length;

    images.forEach(element => {
        element.style.display = "none";
    });

    images[imageIndex-1].style.display = "block";  
}

function restartInterval() {
    clearInterval(showNextImage);
    showNextImage = setInterval(() => {
        plusImages(1);
    }, 5000);
}