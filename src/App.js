import React from 'react'
import './App.css';


const sounds = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


const App = ()=>{

  const play = (str) => {
    console.log(str)
    const audio = document.getElementById(str);
    if(str === "q" || str ==="Q"){
      document.getElementById("display").innerText = "Q"
    }else if(str === "w" || str === "W"){
      document.getElementById("display").innerText = "W"
    }else if(str==="e" || str === "E"){
      document.getElementById("display").innerText = "E"
    }else if(str ==="a" || str === "A"){
      document.getElementById("display").innerText = "A"
    }else if(str ==="s" || str === "S"){
      document.getElementById("display").innerText = "S"
    }else if(str ==="d" || str === "D"){
      document.getElementById("display").innerText = "D"
    }else if(str ==="z" || str === "Z"){
      document.getElementById("display").innerText = "Z"
    }else if(str ==="x" || str === "X"){
      document.getElementById("display").innerText = "X"
    }else if(str ==="c" || str === "C"){
      document.getElementById("display").innerText = "C"
    }
    audio.pause();
    audio.play();
  }

  window.document.onkeyup =function (event){
    if(event.key === "q" || event.key === "Q"){
      play("Q")
    } else if(event.key === "w" || event.key === "W"){
      play("W")
    }else if(event.key === "e" || event.key === "E"){
      play("E")
    }else if(event.key === "a" || event.key === "A"){
      play("A")
    }else if(event.key === "s" || event.key === "S"){
      play("S")
    }else if(event.key === "d" || event.key === "D"){
      play("D")
    }else if(event.key === "z" || event.key === "Z"){
      play("Z")
    }else if(event.key === "x" || event.key === "X"){
      play("X")
    }else if(event.key === "c" || event.key === "C"){
      play("C")
    }
  }

  return(
    <div className="container-fluid" id="drum-machine">
      <div className="app">
        <div id="display" style={{display:'block', width:'100%'}}></div>
        <button className="btn btn-primary drum-pad" id="drum-0" onClick={()=> play("Q")}>
          Q
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"/>
        </button>

        <button className="btn btn-primary drum-pad" id="drum-1" onClick={()=> play("W")}>
          W
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"/>
        </button>

        <button className="btn btn-primary drum-pad" id="drum-2" onClick={()=> play("E")}>
          E
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"/>
        </button>

        <button className="btn btn-primary drum-pad" id="drum-3" onClick={()=> play("A")}>
          A
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"/>
        </button>

        <button className="btn btn-primary drum-pad" id="drum-4" onClick={()=> play("S")}>
          S
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"/>
        </button>
        
        <button className="btn btn-primary drum-pad" id="drum-5" onClick={()=> play("D")}>
          D
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"/>
        </button>

        <button className="btn btn-primary drum-pad" id="drum-6" onClick={()=> play("Z")}>
          Z
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"/>
        </button>

        <button className="btn btn-primary drum-pad" id="drum-7" onClick={()=> play("X")}>
          X
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"/>
        </button>

        <button className="btn btn-primary drum-pad" id="drum-8" onClick={()=> play("C")}>
          C
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"/>
        </button>
      </div>
    </div>
  )
}

export default App;
