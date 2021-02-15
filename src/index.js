// src/index.js
import "./styles/index.scss";
import * as Tone from "tone";
let kick1, kick2, hat1, hat2, snare1, snare2, drill, hiphop, rap, reggaeton, rnb;
// let ctx = new Tone.Context(AudioContext);
// let ctx = new Tone.Context(new AudioContext());
let ctx; 

function sequencer(toggle) {
    //Index - will be used to iterate through inputs
    let index = 0;
    if (toggle) {
        Tone.Transport.scheduleRepeat(repeat, '4n')
        Tone.Transport.start();
        function repeat() {
            console.log(Tone.Transport.bpm.value)
            debugger
            let step = index % 32;
            let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
            let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
            let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);
            let sampleSelect1 = document.querySelector(`.samples input:nth-child(1)`)
            let sampleSelect2 = document.querySelector('.samples input:nth-child(2)')
            let sampleSelect3 = document.querySelector('.samples input:nth-child(3)')
            let sampleSelect4 = document.querySelector('.samples input:nth-child(4)')
            let sampleSelect5 = document.querySelector('.samples input:nth-child(5)')
            if (hatInputs.checked) {
                hat1.start();
            }
            if (kickInputs.checked) {
                kick1.start();
            }
            if (snareInputs.checked) {
                snare1.start();
            }
            if ((step === 0) && sampleSelect1.checked && !hiphop.checked && !rap.checked && !reggaeton.checked && !rnb.checked) {
                drill.start();
            }
            if ((step === 0) && sampleSelect2.checked && !drill.checked && !rap.checked && !reggaeton.checked && !rnb.checked) {
                hiphop.start();
            }
            if ((step === 0) && sampleSelect3.checked && !hiphop.checked && !drill.checked && !reggaeton.checked && !rnb.checked) {
                rap.start();
            }
            if ((step === 0) && sampleSelect4.checked && !hiphop.checked && !rap.checked && !drill.checked && !rnb.checked) {
                reggaeton.start();
            }
            if ((step === 0) && sampleSelect5.checked && !hiphop.checked && !rap.checked && !reggaeton.checked && !drill.checked) {
                rnb.start();
            }
            index++;
            // let sliderVal = document.getElementById('sequencerVol').value;
            // console.log(sliderVal);
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // Tone.Transport.bpm.value = 80;
    // Percussion
    kick1 = new Tone.Player("../assets/sounds/drums/kick1.wav").toDestination();
    kick2 = new Tone.Player("../assets/sounds/drums/kick2.wav").toDestination();
    hat1 = new Tone.Player("../assets/sounds/drums/hat1.wav").toDestination();
    hat2 = new Tone.Player("../assets/sounds/drums/hat2.wav").toDestination();
    snare1 = new Tone.Player("../assets/sounds/drums/snare1.wav").toDestination();
    snare2 = new Tone.Player("../assets/sounds/drums/snare2.wav").toDestination();
    //end of Percussion samples

    //SAMPLES
     drill = new Tone.Player("../assets/sounds/samples/drill.wav").toDestination();
     hiphop = new Tone.Player("../assets/sounds/samples/hiphop.wav").toDestination();
     rap = new Tone.Player("../assets/sounds/samples/rap.wav").toDestination();
     reggaeton = new Tone.Player("../assets/sounds/samples/reggaeton.wav").toDestination();
     rnb = new Tone.Player("../assets/sounds/samples/rnb.wav").toDestination();
    // End of melody samples

    // These will find the radio and check boxes the user selected in the sequencer.
    const sampleOne = document.getElementById('drill');
    const sampleTwo = document.getElementById('hiphop')
    const sampleThree = document.getElementById('rap')
    const sampleFour = document.getElementById('reggaeton')
    const sampleFive = document.getElementById('rnb')
    // End of document culling

    ctx = new Tone.Context(new AudioContext());
    //This will add event listeners to the play button so that when clicked the audio will play. Above the audio context is created to prevent the browser from suspending the audio
    document.querySelector('.play-pause').addEventListener("click", () => {
        if (Tone.context.state !== 'running'){
            console.log('this was hit', Tone.context.state)
            Tone.context.resume();
        }
        Tone.start();
        sequencer(true)
    })
});



function changeBPM() {
    Tone.Transport.bpm.rampTo(140, 10);
    console.log(Tone.Transport.bpm.value)
    debugger
}

// sequencer();