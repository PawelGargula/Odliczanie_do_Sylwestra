export let prev = document.querySelector(".prev");
export let next = document.querySelector(".next");

export let imageIndex = 1;

export function plusImages(n) {
    showImages(imageIndex += n);
}

export function showImages(number) {
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