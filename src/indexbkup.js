
import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  //  this.handleClick = this.handleClick.bind(this);

    this.url = "";
    this.audio = new Audio(this.url);
  }
  
  play(){
    this.setState({
      play: true,
      pause: false
    });
    console.log(this.audio);
    this.audio.play();
  }
  pause(){
  this.setState({ play: false, pause: true });
    this.audio.pause();
  }
 

  //Q, W, E, A, S, D, Z, X, C
  
  
 //Q, W, E, A, S, D, Z, X, C
  
  render() {
     
    var q = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
    var w = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    var E = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    var a = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    var s = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    var d = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    var z = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    var x = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')
    var c = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3')

    function handleClick(e){
      if(e.target.getAttribute("id") === "Q"){
       let text = document.getElementById("Q");
       text.innerText = "Playing Q";
       q.play();
       //set time out reset styles in 1 second.
       //text.innerText = "Q";
       }
        if(e.target.getAttribute("id") === "W"){
           let text = document.getElementById("W");
           text.innerText = "Playing W";
           w.play(); 
        }
      if(e.target.getAttribute("id") === "E"){
          let text = document.getElementById("E");
           text.innerText = "Playing E";
           E.play();
           }
       if(e.target.getAttribute("id") === "A"){
             //put in a settimeout hear
               let text = document.getElementById("A");
               text.innerText = "Playing A";
             //play Q audio file 
            a.play();
               }
       if(e.target.getAttribute("id") === "S"){
                let text = document.getElementById("S");
                text.innerText = "Playing S";
                s.play();
               }
       if(e.target.getAttribute("id") === "D"){
               let text = document.getElementById("D");
               text.innerText = "Playing D";
               d.play();
            }

       if(e.target.getAttribute("id") === "Z"){
             let text = document.getElementById("Z");
             text.innerText = "Playing Z";
             z.play();
             }
            
           if(e.target.getAttribute("id") === "X"){
               let text = document.getElementById("X");
               text.innerText = "Playing X";
               x.play();
               }
           
               if(e.target.getAttribute("id") === "C"){
                  let text = document.getElementById("C");
                  text.innerText = "Playing C";
                  c.play();
                   }
               }  

    return (
      <div id = "drum-machine" className= "inner-container">
      <div id= "display" className= "display">
      <div  id ="Q" className="drum-pad" onClick={handleClick}>
      <audio className='clip' id="Q" src={q}>Q</audio>
      </div>
      <button  id ="W" className="drum-pad" onClick={handleClick}>W</button>
      <button  id ="E" className="drum-pad" onClick={handleClick}>E</button>  
      <button  id ="A" className="drum-pad" onClick={handleClick}>A</button>  
      <button  id ="S" className="drum-pad" onClick={handleClick}>S</button>  
      <button  id ="D" className="drum-pad" onClick={handleClick}>D</button>  
      <button  id ="Z" className="drum-pad" onClick={handleClick}>Z</button>    
      <button  id ="X" className="drum-pad" onClick={handleClick}>X</button>  
      <button  id ="C" className="drum-pad" onClick={handleClick}>C</button>     
      </div>
      </div>
     
      )
    }
    }

ReactDOM.render(<App />, document.getElementById('root'));
