// src/index.js
import "./styles/index.scss";
import * as Tone from "tone";

let toggle = false;

function playStop(audio, toggle) {
    if (toggle) {
        audio.start();
        // audio.playbackRate = 0.25;
        audio.loop = true;
    } else {
        audio.stop()
    }
}

function sequencer() {
    //Index - will be used to iterate through inputs
    let index = 0;

    //Percussion
    const kick1 = new Tone.Player("../assets/sounds/drums/kick1.wav").toDestination();
    const kick2 = new Tone.Player("../assets/sounds/drums/kick2.wav").toDestination();
    const hat1 = new Tone.Player("../assets/sounds/drums/hat1.wav").toDestination();
    const hat2 = new Tone.Player("../assets/sounds/drums/hat2.wav").toDestination();
    const snare1 = new Tone.Player("../assets/sounds/drums/snare1.wav").toDestination();
    const snare2 = new Tone.Player("../assets/sounds/drums/snare2.wav").toDestination();
    //end of Percussion samples
   Tone.Transport.scheduleRepeat(repeat, '4n')
   Tone.Transport.start();

    function repeat(){
        let step = index % 16;
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);
        if(hatInputs.checked){
            hat1.start();
        }
        if (kickInputs.checked){
            kick1.start();
        }
        if(snareInputs.checked){
            snare1.start();
        }
        index++;
    }
}
//SAMPLES
const sample1 = new Tone.Player("../assets/sounds/samples/sample1.wav").toDestination();
const sample2 = new Tone.Player("../assets/sounds/samples/sample2.wav").toDestination();
const sample3 = new Tone.Player("../assets/sounds/samples/sample3.wav").toDestination();
const sample4 = new Tone.Player("../assets/sounds/samples/sample4.wav").toDestination();
const sample5 = new Tone.Player("../assets/sounds/samples/sample5.wav").toDestination();
// End of melody samples

// These query Selectors are responsible for choosing which sample is chosen when the corresponding button is pressed.
document.querySelector("#sample1").addEventListener("click", () => {
    !toggle ? toggle = true : toggle = false;
    playStop(sample1, toggle)
});

document.querySelector("#sample2").addEventListener("click", () => {
    !toggle ? toggle = true : toggle = false;
    playStop(sample2, toggle)
});
document.querySelector("#sample3").addEventListener("click", () => {
    !toggle ? toggle = true : toggle = false;
    playStop(sample3, toggle)
});
document.querySelector("#sample4").addEventListener("click", () => {
    !toggle ? toggle = true : toggle = false;
    playStop(sample4, toggle)
});
document.querySelector("#sample5").addEventListener("click", () => {
    !toggle ? toggle = true : toggle = false;
    playStop(sample5, toggle)
});
// document.querySelector('.play-pause').addEventListener("click", () =>{
//     sequencer();
//
// end of sample query selectors

    sequencer();