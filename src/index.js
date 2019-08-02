import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const baseUrl = "https://s3.amazonaws.com/freecodecamp/drums/"

// put this on a google gist and API in
const bank = [
{keyCode: 81, kString: 'Q', id: 'Heater-1', url: 'Heater-1.mp3'},
{keyCode: 87, kString: 'W', id: 'Heater-2',  url: 'Heater-2.mp3'},
{keyCode: 69, kString: 'E', id: 'Heater-3',url: 'Heater-3.mp3'},
{keyCode: 65, kString: 'A', id: 'Heater-4',url: 'Heater-4_1.mp3'},
{keyCode: 83, kString: 'S', id: 'Clap',url: 'Heater-6.mp3'},
{keyCode: 68, kString: 'D', id: 'Open-HH', url: 'Dsc_Oh.mp3'},
{keyCode: 90, kString: 'Z', id: "Kick-n'-Hat", url: 'Kick_n_Hat.mp3'},
{keyCode: 88, kString: 'X', id: 'Kick', url: 'RP4_KICK_1.mp3'},
{keyCode: 67, kString: 'C', id: 'Closed-HH', url: 'Cev_H2.mp3'}
];

function APad (props) {
   const playAudio = (e) => { 
    document.getElementById(props.kString).play();
    document.getElementById("display").innerText = props.updateDisplay;
   }

  useEffect (() => {
  window.addEventListener('keydown', handler);
  return () => {
  window.removeEventListener('keydown', handler)
  }});
  
  function handler(e) { 
    if (e.keyCode === props.keyCode) { 
         playAudio();
     }}
    return(
      <div id={props.audioId} className='drum-pad' onClick={playAudio} >
       {props.kString}
      <audio className='clip' id={props.kString} src={props.audioUrl} ></audio>
      </div>
    )}

const InnerContainer = () => {
    let innerContainer = bank.map((item, index, array) => {
      return(
      <APad
      key={index} 
      keyCode={array[index].keyCode}
      kString={array[index].kString}
      audioId={array[index].id}
      audioUrl={baseUrl + array[index].url}
      updateDisplay = {array[index].id}
      />
    )})
  return(
    <div className="innerContainer" >
      {innerContainer}
    </div>
  )}

  function App () {
        return (
        <div id="drum-machine" className="inner-container">
          <InnerContainer />
          <div id="display">Drum Machine in React ^16.8 w Hooks    
          </div>
        </div>
     )}

ReactDOM.render(<App />, document.getElementById('root'));