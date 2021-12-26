let header = document.querySelector('h1');

let countDownDate = new Date("Dec 31, 2021 00:00:00").getTime();

let timer = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    if (days < 1 && hours < 1 && minutes < 1)
        header.innerText, document.title = seconds;
    else if (days < 1 && hours < 1)
        header.innerText = minutes + ":" + seconds;
    else if (days < 1)
        header.innerText = hours + ":" + minutes + ":" + seconds;
    else if (days == 1)
        header.innerText = days + " dzień | " + hours + ":" + minutes + ":" + seconds;
    else
        header.innerText = days + " dni | " + hours + ":" + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(timer);
        header.innerText = "Lecymy tur!";
    }
}, 1000);