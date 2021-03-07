import "./styles/index.scss";
import * as Tone from "tone";
let kick1, kick2, hat1, hat2, snare1, snare2, drill, hiphop, rap, reggaeton, rnb, keys1, keys2, keys3;
let sliderVal = document.getElementById('sequencerVol').value
let bpmVal = document.getElementById('bpm-Val').value
let toggle = false;
let kick1Toggle = true;
let snare1Toggle = true;
let hh1Toggle = true;
let hhImg = document.querySelector('.hh-img');
let snareImg = document.querySelector('.snare-img');
let kickImg = document.querySelector('.kick-img');
let sample1toggle = 0;
let sample2toggle = 0;
let sample3toggle = 0;
let sample4toggle = 0;
let sample5toggle = 0;
let ctx; 
Tone.Destination.volume.value = sliderVal;
Tone.Transport.bpm.value = bpmVal;
console.log(Tone.Transport.bpm.value)
// console.log(bpmVal)

function sequencer(toggle) {
    //Index - will be used to iterate through each checkbox and will be used to calculate the step variable
    let index = 0;
    if (toggle) {
        Tone.Transport.scheduleRepeat(repeat, '4n')
        Tone.Transport.start();
        //repeat function gets called once the event listener is triggered. Using scheduleRepeat iterates through the checkboxing using the 4/4 measure. If the input is selected, the audio will play.
        function repeat() {
            let step = index % 32;
            let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
            let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
            let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);
            let keys1Inputs = document.querySelector(`.keys1 input:nth-child(${step + 1})`);
            let keys2Inputs = document.querySelector(`.keys2 input:nth-child(${step + 1})`);
            let keys3Inputs = document.querySelector(`.keys3 input:nth-child(${step + 1})`);

            let sampleSelect1 = document.querySelector(`.samples input:nth-child(1)`)
            let sampleSelect2 = document.querySelector('.samples input:nth-child(2)')
            let sampleSelect3 = document.querySelector('.samples input:nth-child(3)')
            let sampleSelect4 = document.querySelector('.samples input:nth-child(4)')
            let sampleSelect5 = document.querySelector('.samples input:nth-child(5)')
            if (hatInputs.checked) {
                if (hh1Toggle === true){
                    hat1.start();
                } else {
                    hat2.start();
                }
            } 
            if (kickInputs.checked) {
                if (kick1Toggle === true){
                    kick1.start();
                } else {
                    kick2.start();
                }
            } 
            if (snareInputs.checked) {
                if (snare1Toggle === true){
                    snare1.start();
                } else {
                    snare2.start();
                }
            } 
            if (keys1Inputs.checked ) {
                if ((!sampleSelect1.checked) && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)){
                    keys1.start();
                }else{
                    keys1Inputs.checked = false;
                }
            } 
            if (keys2Inputs.checked) {
                if ((!sampleSelect1.checked) && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)) {
                    keys2.start();
                } else {
                    keys2Inputs.checked = false;
                }
            } 
            if (keys3Inputs.checked) {
                if ((!sampleSelect1.checked) && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)) {
                    keys3.start();
                } else {
                    keys3Inputs.checked = false;
                }
            } 
            if ((step === 0) && (sampleSelect1.checked) && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)) {
                drill.start();
            } 
            if ((step === 0) && sampleSelect2.checked && (!sampleSelect1.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)) {
                hiphop.start();
            } 
            if ((step === 0) && sampleSelect3.checked && (!sampleSelect2.checked) && (!sampleSelect1.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)) {
                rap.start();
            } 
            if ((step === 0) && sampleSelect4.checked && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect1.checked) && (!sampleSelect5.checked)) {
                reggaeton.start();
            } 
            if ((step === 0) && sampleSelect5.checked && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect1.checked)) {
                rnb.start();
            } 
            index++;
        }
    } 
}

// DOMContentLoaded preps the sounds to be played when the site loads. There is an event listener set for when a user presses the play button on the sequencer.
document.addEventListener("DOMContentLoaded", () => {
    // Tone.Transport.bpm.value = 80;
    reset();
});

function reset() {
    // Percussion
    kick1 = new Tone.Player("../assets/sounds/drums/kick1.wav").toDestination();
    kick2 = new Tone.Player("../assets/sounds/drums/kick2.wav").toDestination();
    hat1 = new Tone.Player("../assets/sounds/drums/hat1.wav").toDestination(); ``
    hat2 = new Tone.Player("../assets/sounds/drums/hat2.wav").toDestination();
    snare1 = new Tone.Player("../assets/sounds/drums/snare1.wav").toDestination();
    snare2 = new Tone.Player("../assets/sounds/drums/snare2.wav").toDestination();
    //end of Percussion samples

    // play button event listeners
    let img = document.querySelector('.play-pause')
    //SAMPLES
    drill = new Tone.Player("../assets/sounds/samples/drill.wav").toDestination();
    hiphop = new Tone.Player("../assets/sounds/samples/hiphop.wav").toDestination();
    rap = new Tone.Player("../assets/sounds/samples/rap.wav").toDestination();
    reggaeton = new Tone.Player("../assets/sounds/samples/reggaeton.wav").toDestination();
    rnb = new Tone.Player("../assets/sounds/samples/rnb.wav").toDestination();
    // End of melody samples

    //piano key samples 
    keys1 = new Tone.Player("../assets/sounds/samples/key1.wav").toDestination();
    keys2 = new Tone.Player("../assets/sounds/samples/key2.wav").toDestination();
    keys3 = new Tone.Player("../assets/sounds/samples/key3.wav").toDestination();
    //

    ctx = new Tone.Context(new AudioContext());
    //This will add event listeners to the play button so that when clicked the audio will play. Above the audio context is created to prevent the browser from suspending the audio
    document.querySelector('.play-pause').addEventListener("mousedown", () => {
        console.log(Tone.context.state)
        if (toggle === false) {
            if (Tone.context.state !== 'running') {
                console.log(Tone.context.state)
                Tone.context.resume();
                console.log(Tone.context.state)
            }
            toggle = true;
            sequencer(toggle)
            img.src = "../assets/images/pause.png"
        } else if (toggle = true) {
            toggle = false
            Tone.Transport.stop();
            Tone.Transport.cancel();
            hat1.stop();
            hat2.stop();
            keys1.stop();
            keys2.stop();
            keys3.stop();
            kick1.stop();
            kick2.stop();
            snare1.stop();
            snare2.stop();
            drill.stop();
            hiphop.stop();
            rap.stop();
            reggaeton.stop();
            rnb.stop();
            img.src = "../assets/images/play.png"
        }
    })
}

document.getElementById('sequencerVol').addEventListener('change', () => {
    sliderVal = document.getElementById('sequencerVol').value;
    Tone.Destination.volume.value = sliderVal;
    console.log(sliderVal)
})

document.getElementById('bpm-Val').addEventListener('change', () =>{
    bpmVal = document.getElementById('bpm-Val').value;
    Tone.Transport.bpm.value = bpmVal;
    console.log(Tone.Transport.bpm.value)
})

// These event listeners are responsible for the switching the sound source and img  of the percussion. 
document.querySelector('.kick-img').addEventListener('click', () =>{
    if (kick1Toggle === true){
        kick1Toggle = false
        kickImg.src = '../assets/images/kickSelected.png'
    } else {
        kick1Toggle = true;
        kickImg.src = '../assets/images/kickDrumImg.png'
    }
})

document.querySelector('.snare-img').addEventListener('click', () =>{
    if (snare1Toggle === true){
        snare1Toggle = false
        snareImg.src = '../assets/images/snareSelected.png'
    } else {
        snare1Toggle = true;
        snareImg.src = '../assets/images/snareDrumImg.png'
    }
})

document.querySelector('.hh-img').addEventListener('click', () =>{
    if (hh1Toggle === true){
        hh1Toggle = false
        hhImg.src = '../assets/images/hhSelected.png'
    } else {
        hh1Toggle = true;
        hhImg.src = '../assets/images/hhImg.png'
    }
})
// End of percussion sound eventlisteners 

// These event listeners are responsible for deselecting the radio buttons of the samples.
let sample1 = document.querySelector(`.samples input:nth-child(1)`)
sample1.addEventListener('click', () =>{
    sample1toggle ++
    console.log(sample1.checked)
    if (sample1toggle !== 1){
        sample1.checked = false;
        sample1toggle = 0;
    }
})
let sample2 = document.querySelector(`.samples input:nth-child(2)`)
sample2.addEventListener('click', () =>{
    sample2toggle ++
    console.log(sample2.checked)
    if (sample2toggle !== 1){
        sample2.checked = false;
        sample2toggle = 0;
    }
})
let sample3 = document.querySelector(`.samples input:nth-child(3)`)
sample3.addEventListener('click', () =>{
    sample3toggle ++
    console.log(sample3.checked)
    if (sample3toggle !== 1){
        sample3.checked = false;
        sample3toggle = 0;
    }
})
let sample4 = document.querySelector(`.samples input:nth-child(4)`)
sample4.addEventListener('click', () =>{
    sample4toggle ++
    console.log(sample4.checked)
    if (sample4toggle !== 1){
        sample4.checked = false;
        sample4toggle = 0;
    }
})
let sample5 = document.querySelector(`.samples input:nth-child(5)`)
sample5.addEventListener('click', () =>{
    sample5toggle ++
    console.log(sample5.checked)
    if (sample5toggle !== 1){
        sample5.checked = false;
        sample5toggle = 0;
    }
})

document.querySelector('.reset-sequencer').addEventListener('click', () =>{
    reset();
    console.log('you hit this')
})
// end of radio eventlisteners

