
'use strict'



//------------------------SPEECH RECOGNITION-----------------------------


//const synth = window.speechSynthesis
// const synth = speechSynthesis

//-----------------------JS Global Variable----------------------------

//
// const voices = [];

//------------------------COMPONENT-----------------------------

export const handleSyn=(text)=>{
    //speak(text);
    let synth = window.speechSynthesis
    let voices = synth.getVoices();
    let utterThis = new SpeechSynthesisUtterance(text);

    utterThis.pitch = 1;
    utterThis.rate = 1;
    utterThis.voice = voices[33];
    synth.speak(utterThis);

};
export const cancelSyn=()=>{
    let synth = window.speechSynthesis
    synth.cancel();
}
// const populateVoiceList=()=>{
//     let voices = synth.getVoices();
//     for(let i = 0; i < voices.length ; i++) {
//         let option = document.createElement('option');
//         option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
//         if(voices[i].default) {
//             option.textContent += ' -- DEFAULT';
//         }
//
//         option.setAttribute('data-lang', 'en-US');
//         option.setAttribute('data-name', 'Samantha');
//
//     }
// };
// const speak=(text)=>{
//
//     let voices = synth.getVoices();
//
//     let utterThis = new SpeechSynthesisUtterance(text);
//
//     for(let i = 0; i < voices.length ; i++) {
//         if(voices[i].name === 'Samantha'){
//             utterThis.voice = voices[i];
//         }
//     }
// }






