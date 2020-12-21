let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let playMuteBTN1 = document.getElementById("playMuteBTN1");
let playMuteBTN2 = document.getElementById("playMuteBTN2");

let count = 0;

playMuteBTN1.addEventListener("click", () => {
    if (count == 0) {
        count = 1;
        audio1.play();
        playMuteBTN1.innerHTML = "Pause Maestro!";
    } else {
        count = 0;
        audio1.pause();
        playMuteBTN1.innerHTML = "Music Maestro!";
    }
});

playMuteBTN2.addEventListener("click", () => {
    if (count == 0) {
        count = 1;
        audio2.play();
        playMuteBTN2.innerHTML = "Pause Maestro!";
    } else {
        count = 0;
        audio2.pause();
        playMuteBTN2.innerHTML = "Music Maestro!";
    }
});