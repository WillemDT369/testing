let audio = document.getElementById("audio");
let playMuteBTN = document.getElementById("playMuteBTN");
let count = 0;

playMuteBTN.addEventListener("click", () => {
    if (count == 0) {
        count = 1;
        audio.play();
        playMuteBTN.innerHTML = "Pause Maestro!";
    } else {
        count = 0;
        audio.pause();
        playMuteBTN.innerHTML = "Music Maestro!";
    }
});