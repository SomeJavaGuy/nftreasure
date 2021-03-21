
import React,{Component} from 'react';
//var perf =require('./memorymatch/index.html');
import './memorymatch/css/app.css';
//require('./memorymatch/js/app.js');

class StepB2 extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = "C:/Projects/Hackintosh/nftreasure/src/components/memorymatch/js/app.js";
    script.async = true;
    document.body.appendChild(script);
}

  
   render(){
      return (
         
      <div>
      <meta charSet="utf-8" />
      <title>Memory Game</title>
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
      <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda" />
      <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker" />
      <link rel="stylesheet" href="memorymatch/css/app.css" />
      <div className="container">
        <header>
          <h1>Memory Game</h1>
        </header>
        <section className="score-panel">
          <ul className="stars">
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
          </ul>
          <span className="moves">0</span> Move(s)
          <div className="timer">
          </div>
          <div className="restart" onclick="startGame()">
            <i className="fa fa-repeat" />
          </div>
        </section>
        <ul className="deck" id="card-deck">
          <li className="card" type="diamond">
            <i className="fa fa-diamond" />
          </li>
          <li className="card" type="plane">
            <i className="fa fa-paper-plane-o" />
          </li>
          <li className="card match" type="anchor">
            <i className="fa fa-anchor" />
          </li>
          <li className="card" type="bolt">
            <i className="fa fa-bolt" />
          </li>
          <li className="card" type="cube">
            <i className="fa fa-cube" />
          </li>
          <li className="card match" type="anchor">
            <i className="fa fa-anchor" />
          </li>
          <li className="card" type="leaf">
            <i className="fa fa-leaf" />
          </li>
          <li className="card" type="bicycle">
            <i className="fa fa-bicycle" />
          </li>
          <li className="card" type="diamond">
            <i className="fa fa-diamond" />
          </li>
          <li className="card" type="bomb">
            <i className="fa fa-bomb" />
          </li>
          <li className="card" type="leaf">
            <i className="fa fa-leaf" />
          </li>
          <li className="card" type="bomb">
            <i className="fa fa-bomb" />
          </li>
          <li className="card open show" type="bolt">
            <i className="fa fa-bolt" />
          </li>
          <li className="card" type="bicycle">
            <i className="fa fa-bicycle" />
          </li>
          <li className="card" type="plane">
            <i className="fa fa-paper-plane-o" />
          </li>
          <li className="card" type="cube">
            <i className="fa fa-cube" />
          </li>
        </ul>
        <div id="popup1" className="overlay">
          <div className="popup">
            <h2>Congratulations 🎉</h2>
            <a className="close" href="#">×</a>
            <div className="content-1">
              Congratulations you're a winner 🎉🎉
            </div>
            <div className="content-2">
              <p>You made <span id="finalMove"> </span> moves </p>
              <p>in <span id="totalTime"> </span> </p>
              <p>Rating:  <span id="starRating" /></p>
            </div>
            <button id="play-again" onclick="playAgain()">
              Play again 😄
            </button>
          </div>
        </div>
      </div>
    </div> /* like this */
      );
   }
}
export default StepB2;