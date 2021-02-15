
// let vol = new Tone.Volume(-20).toDestination();

// // vol.volume.value = -20
// document.addEventListener("DOMContentLoaded", () => {
//     const sampleOne = document.getElementById('sample1');
//     sampleOne.addEventListener('click', () =>{
//         playStop(sample1, true);
//         sequencer();
//     })
//     // document.querySelector('.play-pause').addEventListener("click", () =>{
// //     sequencer()
// // });
// })
// const sample1 = new Tone.Player("../assets/sounds/samples/sample1.wav").toDestination();

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
//     // const sample1 = new Tone.Player("../assets/sounds/samples/sample1.wav").toDestination();
//     const sample2 = new Tone.Player("../assets/sounds/samples/sample2.wav").toDestination();
//     const sample3 = new Tone.Player("../assets/sounds/samples/sample3.wav").toDestination();
//     const sample4 = new Tone.Player("../assets/sounds/samples/sample4.wav").toDestination();
//     const sample5 = new Tone.Player("../assets/sounds/samples/sample5.wav").toDestination();
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
//         //     sample1.start();
//         //     console.log('melody should play')
//         // }
//         // document.querySelector("#sample5").addEventListener("check",()=>{
//         //     sample5.start();
//         //     console.log('hit it')
//         // }) 
//         index++;
//         // let sliderVal = document.getElementById('sequencerVol').value;
//         // console.log(sliderVal);
//     }
// }

// // These query Selectors are responsible for choosing which sample is chosen when the corresponding button is pressed.
// // document.querySelector("#sample1").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     console.log('melody')
// //     playStop(sample1, toggle)
// // });

// // document.querySelector("#sample2").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(sample2, toggle)
// // });
// // document.querySelector("#sample3").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(sample3, toggle)
// // });
// // document.querySelector("#sample4").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(sample4, toggle)
// // });
// // document.querySelector("#sample5").addEventListener("click", () => {
// //     !toggle ? toggle = true : toggle = false;
// //     playStop(sample5, toggle)
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




let kick1;
let kick2;
let hat1;
let hat2;
let snare1;
let snare2;

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
    const sample1 = new Tone.Player("../assets/sounds/samples/sample1.wav").toDestination();
    const sample2 = new Tone.Player("../assets/sounds/samples/sample2.wav").toDestination();
    const sample3 = new Tone.Player("../assets/sounds/samples/sample3.wav").toDestination();
    const sample4 = new Tone.Player("../assets/sounds/samples/sample4.wav").toDestination();
    const sample5 = new Tone.Player("../assets/sounds/samples/sample5.wav").toDestination();
    // End of melody samples

    // These will find the radio and check boxes the user selected in the sequencer.
    const sampleOne = document.getElementById('sample1');
    const sampleTwo = document.getElementById('sample2')
    const sampleThree = document.getElementById('sample3')
    const sampleFour = document.getElementById('sample4')
    const sampleFive = document.getElementById('sample5')
    // End of document culling

    //This will add event listeners to the found elements so that when the radio buttons are pressed they will play audio.
    sampleOne.addEventListener('click', () => {
        // playStop(sample1, true);
        gatherAllAudio(sample1);

    })
});
Tone.Transport.scheduleRepeat(repeat, '4n')
Tone.Transport.start();
function gatherAllAudio(audio) {
    let audioArr = [audio];

    document.querySelector('.play-pause').addEventListener("click", () => {
        Tone.Transport.scheduleRepeat(repeat, '4n')
        Tone.Transport.start();
        audioArr.forEach(soundByte => {
            playAudio(soundByte)
        });
    });
}

function repeat() {
    let index = 0;
    let step = index % 16;

    let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
    let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
    let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);
    let sampleSelect1 = document.querySelector('.samples input:nth-child(1)')
    document.querySelector('.play-pause').addEventListener("click", () => {


        if (hatInputs.checked) {
            // hat1.start();
            playAudio(hat1);
        }
        if (kickInputs.checked) {
            playAudio(kick1);
        }
        if (snareInputs.checked) {
            playAudio(snare1);

        }
    });

    // if (sampleSelect1.clicked){
    //     sample1.start();
    //     console.log('melody should play')
    // }
    // document.querySelector("#sample5").addEventListener("check",()=>{
    //     sample5.start();
    //     console.log('hit it')
    // }) 
    index++;
    // let sliderVal = document.getElementById('sequencerVol').value;
    // console.log(sliderVal);
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
