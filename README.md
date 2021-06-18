<h1>soundWav App</h1>

<a href="https://imgur.com/DWk9hSH"><img src="https://i.imgur.com/DWk9hSH.jpg" title="source: imgur.com" /></a>

soundWav is an online app that allows users to create songs from their browser. As the user enters the site they will be greeted with a splash page that allows them to pick a genre in music(hip-hop, Electronic, RnB and Pop). Once this is chosen the user will see a a rectangle channel rack broken up into 4 counts of 4 cells that correspond to the tempo of a song. Every count will be color coded for ease of use.

<br>

![soundWav](https://user-images.githubusercontent.com/69684931/122502324-69c52700-cfc4-11eb-8446-55beb5ceb4c7.gif)

### Music Sequencer
Using Tone.js, I was able to manipulate the web audio context and connect it to Tone Transport to schedule a timely repetition that ensured that all the audio played in sync. I utilized checkbox query selectors to play selected soundbyte.  

```
function sequencer(toggle) {
    //Index - will be used to iterate through each checkbox and will be used to calculate the step variable
    let index = 0;
    if (toggle) {
        Tone.Transport.scheduleRepeat(repeat, '4n')
        Tone.Transport.start();
        //repeat function gets called once the event listener is triggered. Using scheduleRepeat iterates through the checkboxing using the 4/4 measure. 
        //If the input is selected, the audio will play.
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
                if (Tone.Transport.bpm.value== 120){
                    drill.start();
                } else if (Tone.Transport.bpm.value == 100){
                    drillChill.start();
                }else{
                    drillSlow.start();
                }
            } 
            if ((step === 0) && sampleSelect2.checked && (!sampleSelect1.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)) {
                if (Tone.Transport.bpm.value == 120) {
                    hiphop.start();
                } else if (Tone.Transport.bpm.value == 100) {
                    hiphopChill.start();
                } else {
                    hiphopSlow.start();
                } 
            } 
            if ((step === 0) && sampleSelect3.checked && (!sampleSelect2.checked) && (!sampleSelect1.checked) && (!sampleSelect4.checked) && (!sampleSelect5.checked)) {
                if (Tone.Transport.bpm.value == 120) {
                    rap.start();
                } else if (Tone.Transport.bpm.value == 100) {
                    rapChill.start();
                } else {
                    rapSlow.start();
                }
            } 
            if ((step === 0) && sampleSelect4.checked && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect1.checked) && (!sampleSelect5.checked)) {
                if (Tone.Transport.bpm.value == 120) {
                    reggaeton.start();
                } else if (Tone.Transport.bpm.value == 100) {
                    reggaetonChill.start();
                } else {
                    reggaetonSlow.start();
                }
            } 
            if ((step === 0) && sampleSelect5.checked && (!sampleSelect2.checked) && (!sampleSelect3.checked) && (!sampleSelect4.checked) && (!sampleSelect1.checked)) {
                rnb.start();
            } 
            index++;
        }
    } 
}
```

### OTHER FEATURES
- BPM vibe selector: Using 3 preset tempos, I created a function that adapts the reptition speed to match the sample rate
- Sample Key Safe guarding: if a sample is selected with a keyboard soundbyte with a different key, the sequencer will remove the conflicting keyboard sound

## Future Features
- Downloading project
- Sound Visualizer
