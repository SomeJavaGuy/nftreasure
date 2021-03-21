import React,{Component} from 'react';

class StepP2 extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/app.js";
    script.async = true;
    document.body.appendChild(script);
  }

   render() {
      return (
        <div>
        <img className='center' src={process.env.PUBLIC_URL + "/img/Cryptokitty.jpg"}></img>
      </div>
      )}
}

export default StepP2;
