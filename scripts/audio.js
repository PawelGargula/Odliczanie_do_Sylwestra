const audio = document.querySelector("audio");
const waves = document.querySelectorAll(".wave");

audio.addEventListener("play", () => {
    waves.forEach(wave => {
        wave.classList.add("wavesAnimation");
    });
});

audio.addEventListener("pause", () => {
    waves.forEach(wave => {
        wave.classList.remove("wavesAnimation");
    });
})
