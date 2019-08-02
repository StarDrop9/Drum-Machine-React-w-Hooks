import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const bankOne = [{
  keyCode: 81, // 
  keyString: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 87,
  keyString: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 69,
  keyString: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyString: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyString: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyString: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyString: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyString: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyString: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

function DrumPad (props) {
   const playAudio = (e) => { 
    document.getElementById(props.keyString).play();
    let text = document.getElementById("display")
    text.innerText = props.updateDisplay;
   }

  useEffect (() => {
  window.addEventListener('keydown', handler);
  return () => {
  window.removeEventListener('keydown', handler)
  }
});
  
  function handler(e) { 
    if (e.keyCode === props.keyCode) { 
         playAudio();
     }
 }
    return(
      <div id={props.drumpadId} className='drum-pad' onClick={playAudio} >
       {props.keyString}
      <audio className='clip' id={props.keyString} src={props.audioUrl} ></audio>
      </div>
    )                                      
} 

const InnerContainer = () => {
    let innerContainer = bankOne.map((item, index, array) => {
      return(
      <DrumPad
      key={index} 
      keyCode={array[index].keyCode}
      keyString={array[index].keyString}
      drumpadId={array[index].id}
      audioUrl={array[index].url}
      updateDisplay = {array[index].id}
      />
    )
  })
  return(
    <div className="innerContainer" >
      {innerContainer}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPadBank: bankOne,
        display: "Audio Clip"
      }

    
  }
  
  render() {
      return (
        <div id="drum-machine" className="inner-container">
          <InnerContainer
            currentPadBank={this.state.currentPadBank}
            updateDisplay={this.displayClipName}
            />
          <div id="display">
            {this.state.display}
          </div>
        </div>
      )
  }
}
          

ReactDOM.render(<App />, document.getElementById('root'));