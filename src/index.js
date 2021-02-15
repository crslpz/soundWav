// src/index.js
import "./styles/index.scss";
import * as Tone from "tone";


let kick1;
let kick2;
let hat1;
let hat2;
let snare1;
let snare2;
let sample1;
let sample2;
let sample3;
let sample4;
let sample5;
let ctx = new Tone.Context(AudioContext);

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
     sample1 = new Tone.Player("../assets/sounds/samples/sample1.wav").toDestination();
     sample2 = new Tone.Player("../assets/sounds/samples/sample2.wav").toDestination();
     sample3 = new Tone.Player("../assets/sounds/samples/sample3.wav").toDestination();
     sample4 = new Tone.Player("../assets/sounds/samples/sample4.wav").toDestination();
     sample5 = new Tone.Player("../assets/sounds/samples/sample5.wav").toDestination();
    // End of melody samples

    // These will find the radio and check boxes the user selected in the sequencer.
    const sampleOne = document.getElementById('sample1');
    const sampleTwo = document.getElementById('sample2')
    const sampleThree = document.getElementById('sample3')
    const sampleFour = document.getElementById('sample4')
    const sampleFive = document.getElementById('sample5')
    // End of document culling

    //This will add event listeners to the found elements so that when the radio buttons are pressed they will play audio.
    // sampleOne.addEventListener('click', () => {
    //     // playStop(sample1, true);
    //     // gatherAllAudio(sample1);
    //     sequencer();
    // })
    document.querySelector('.play-pause').addEventListener("click", () => {
        debugger
        // await Tone.start();
        sequencer(true)
        if (ctx.state === 'suspended'){
            ctx
            console.log(ctx.state, Tone.context)
            debugger
        }
    })
});

function gatherAllAudio(audio) {
    let audioArr = [audio];

    // document.querySelector('.play-pause').addEventListener("click", () => {
    //     // Tone.Transport.scheduleRepeat(repeat, '4n')
    //     // Tone.Transport.start();
    //     // audioArr.forEach(soundByte => {
    //     //     playAudio(soundByte)
    //     // });
    // });
}

function sequencer(toggle) {
    debugger
    //Index - will be used to iterate through inputs
    let index = 0;
    if (toggle){
        // if (ctx.state === 'suspended') {
        //     ctx.resume()
        //     console.log(ctx.state)
        //     debugger
        // }
        debugger
        Tone.Transport.scheduleRepeat(repeat, '4n')
        Tone.Transport.start();

        function repeat(){
            let step = index % 16;
            let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
            let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
            let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);
            let sampleSelect1 = document.querySelector(`.samples input:nth-child(${step+1})`)
            // Tone.Transport.scheduleRepeat(repeat, '4n')
            // Tone.Transport.start();
            // audioArr.forEach(soundByte => {
            //     playAudio(soundByte)
            // });

            if (hatInputs.checked) {
                // hat1.start();
                hat1.start();
            }
            if (kickInputs.checked) {
                kick1.start();
            }
            if (snareInputs.checked) {
                snare1.start();
            }
            if (sampleSelect1.checked){
                sample1.start();
                console.log('melody should play')
            }

            // document.querySelector("#sample5").addEventListener("check",()=>{
            //     sample5.start();
            //     console.log('hit it')
            // }) 
            index++;
            // let sliderVal = document.getElementById('sequencerVol').value;
            // console.log(sliderVal);
        }
    }
}



function playAudio(audio) {
    audio.start();
    console.log(Tone.Transport.bpm.value, "you hit this one")
}

function changeBPM() {
    Tone.Transport.bpm.rampTo(140, 10);
    console.log(Tone.Transport.bpm.value)
    debugger
}

// sequencer();