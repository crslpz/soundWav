// import { buildAssetPath } from "./scripts/util"
// import kick1Sound from "../assets/sounds/drums/kick1.wav"
// import kick1Sound from "..dist/kick9.mp3"
// import kick1Sound from "../assets/sounds/drums/kick9.mp3"
// const kick1Sound = require("../assets/sounds/drums/kick1.mp3")


// let vol = new Tone.Volume(-20).toDestination();

// // vol.volume.value = -20
// document.addEventListener("DOMContentLoaded", () => {
//     const sampleOne = document.getElementById('drill');
//     sampleOne.addEventListener('click', () =>{
//         playStop(drill, true);
//         sequencer();
//     })
//     // document.querySelector('.play-pause').addEventListener("click", () =>{
// //     sequencer()
// // });
// })
// const drill = new Tone.Player("../assets/sounds/samples/drill.wav").toDestination();

// let toggle = false;
// function playStop(audio, toggle) {
//     audio.connect(vol)
//     if (toggle) {
//         audio.start();
//         // audio.playbackRate = 0.25;
//         audio.loop = true;
//     } else {
//         audio.stop()
//     }
// }

// function volume(volVal){
//     // let slider = document.getElementById('sequencerVol');
//     vol.volume.value = Number(volVal);
//     if (Number(volVal) === -60){
//         volume.mute = true
//     } else{
//         volume.mute = false
//     }
//     console.log("you hit this", volVal, volume.mute);
//         // audio.volume = slider.value;
//         // const vol  = new Tone.Volume()
// }

// function sequencer() {
//     //Index - will be used to iterate through inputs
//     let index = 0;

//     //Percussion
//     const kick1 = new Tone.Player("../assets/sounds/drums/kick1.wav").toDestination();
//     const kick2 = new Tone.Player("../assets/sounds/drums/kick2.wav").toDestination();
//     const hat1 = new Tone.Player("../assets/sounds/drums/hat1.wav").toDestination();
//     const hat2 = new Tone.Player("../assets/sounds/drums/hat2.wav").toDestination();
//     const snare1 = new Tone.Player("../assets/sounds/drums/snare1.wav").toDestination();
//     const snare2 = new Tone.Player("../assets/sounds/drums/snare2.wav").toDestination();
//     //end of Percussion samples
//     //SAMPLES
//     // const drill = new Tone.Player("../assets/sounds/samples/drill.wav").toDestination();
//     const hiphop = new Tone.Player("../assets/sounds/samples/hiphop.wav").toDestination();
//     const rap = new Tone.Player("../assets/sounds/samples/rap.wav").toDestination();
//     const reggaeton = new Tone.Player("../assets/sounds/samples/reggaeton.wav").toDestination();
//     const rnb = new Tone.Player("../assets/sounds/samples/rnb.wav").toDestination();
//     // End of melody samples
//    Tone.Transport.scheduleRepeat(repeat, '4n')
//    Tone.Transport.start();

//     function repeat(){
//         let step = index % 16;
//         let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
//         let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
//         let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);
//         let sampleSelect1 = document.querySelector('.samples input:nth-child(1)')
//         if(hatInputs.checked){
//             hat1.start();
//         }
//         if (kickInputs.checked){
//             kick1.start();
//         }
//         if(snareInputs.checked){
//             snare1.start();
//         }
//         // if (sampleSelect1.clicked){
//         //     drill.start();
//         //     console.log('melody should play')
//         // }
//         // document.querySelector("#rnb").addEventListener("check",()=>{
//         //     rnb.start();
//         //     console.log('hit it')
//         // }) 
//         index++;
//         // let sliderVal = document.getElementById('sequencerVol').value;
//         // console.log(sliderVal);
//     }
// }

// // These query Selectors are responsible for choosing which sample is chosen when the corresponding button is pressed.
// // document.querySelector("#drill").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     console.log('melody')
// //     playStop(drill, toggle)
// // });

// // document.querySelector("#hiphop").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(hiphop, toggle)
// // });
// // document.querySelector("#rap").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(rap, toggle)
// // });
// // document.querySelector("#reggaeton").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(reggaeton, toggle)
// // });
// // document.querySelector("#rnb").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(rnb, toggle)
// // });


// // document.querySelector('.play-pause').addEventListener("click", () =>{
// //     sequencer()
// // });
// document.querySelector("#sequencerVol").addEventListener('change', (e)=>{
//     debugger;
//     volume(e.currentTarget.value);
// })

// // end of sample query selectors

//     // sequencer()

