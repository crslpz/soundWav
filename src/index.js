// src/index.js
import "./styles/index.scss";
import * as Tone from "tone";

let toggle = false;

function playStop(audio, toggle) {
    if (toggle){
        audio.start();
        // audio.playbackRate = 0.25;
        audio.loop = true;
    }else { 
        audio.stop()
    }
}

//SAMPLES
const sample1 = new Tone.Player("../assets/sounds/samples/sample1.wav").toDestination();
const sample2 = new Tone.Player("../assets/sounds/samples/sample2.wav").toDestination();
const sample3 = new Tone.Player("../assets/sounds/samples/sample3.wav").toDestination();
const sample4 = new Tone.Player("../assets/sounds/samples/sample4.wav").toDestination();
const sample5 = new Tone.Player("../assets/sounds/samples/sample5.wav").toDestination();

document.querySelector("#sample1").addEventListener("click", () =>{
    !toggle ? toggle = true : toggle = false;
    playStop(sample1, toggle)});

document.querySelector("#sample2").addEventListener("click", () =>{
    !toggle ? toggle = true : toggle = false;
    playStop(sample2, toggle)});
document.querySelector("#sample3").addEventListener("click", () =>{
    !toggle ? toggle = true : toggle = false;
    playStop(sample3, toggle)});
document.querySelector("#sample4").addEventListener("click", () =>{
    !toggle ? toggle = true : toggle = false;
    playStop(sample4, toggle)});
document.querySelector("#sample5").addEventListener("click", () =>{
    !toggle ? toggle = true : toggle = false;
    playStop(sample5, toggle)});


