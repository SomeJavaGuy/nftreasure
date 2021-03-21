import React,{Component} from 'react';
//var perf =require('./memorymatch/index.html');
//require('./memorymatch/js/app.js');

class StepS1 extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/app.js";
    script.async = true;
    document.body.appendChild(script);
}

  
   render(){
      return (
         
      <div>
      <meta charSet="utf-8" />
      <title>Memory Game</title>
      <meta name="description" content="true" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
      <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda" />
      <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker" />
      <link rel="stylesheet" href={process.env.PUBLIC_URL + "/css/mm.css"} />
      <div className="container">
        <br />
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
            <a href="/steps3" class="button">It's ok, you can go now.</a>
          </div>
        </div>
      </div>
      <section class="score-panel">
        	<ul class="stars">
        		<li><i class="fa fa-star"></i></li>
        		<li><i class="fa fa-star"></i></li>
        		<li><i class="fa fa-star"></i></li>
        	</ul>
        	<span class="moves">0</span> Move(s)
            <div class="timer">
            </div>
            <div class="restart" onclick="startGame()">
        	</div>
        </section>
        <small>courtesy of: https://github.com/sandraisrael</small>
    </div> /* like this */
      );
   }
}

export default StepS1;
