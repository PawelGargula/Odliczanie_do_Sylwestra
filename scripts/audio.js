const audio = document.querySelector("audio");
const playButton = document.querySelector(".play");
const author = document.querySelector(".author");
const waves = document.querySelectorAll(".wave");

playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = "none";
    author.style.display = "block";
    waves.forEach(wave => {
        wave.classList.add("wavesAnimation");
    });
});
