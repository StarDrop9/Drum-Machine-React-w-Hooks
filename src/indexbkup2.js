import React from 'react';
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

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) { 
        if (e.keyCode === this.props.keyCode) { 
            this.playSound();
            console.log(e.keyCode + " " + this.props.keyCode);
        }
    }
    playSound(e) { 
      const sound = document.getElementById(this.props.keyString);
      sound.currentTime = 0;
      sound.play();
      this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }

    render() {
      return(
        <div 
          id={this.props.clipId}
          onClick={this.playSound}
          className='drum-pad' >
          <audio className='clip' id={this.props.keyString} src={this.props.clipSource} ></audio>
          {this.props.keyString}
        </div>
      )                                      
    } // End Render
} // End Component

class PadBank extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let padBank = this.props.currentPadBank.map((item, index, array) => {
      return(
        <div id="drum-pads">
      <DrumPad 
        clipId={array[index].id}
        clipSource={array[index].url}
        keyCode={array[index].keyCode}
        keyString={array[index].keyString}
        updateDisplay={this.props.updateDisplay} 
        />
       </div>
      )
    })
    return(
      <div className="padBank" >
				{padBank}
			</div>
    )
  }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPadBank: bankOne,
          display: ""
        }
  
        this.displayClipName = this.displayClipName.bind(this);
    }
    displayClipName(name){
      this.setState({
        display: name
      })
    }
    render() {
        return (
          <div id="drum-machine" className="inner-container">
				    <PadBank 
              currentPadBank={this.state.currentPadBank}
              updateDisplay={this.displayClipName}
              />
            <div id="display">
              <p>Sample name:</p>
              {this.state.display}
            </div>
          </div>
        )
    }
}
            

ReactDOM.render(<App />, document.getElementById('app'));