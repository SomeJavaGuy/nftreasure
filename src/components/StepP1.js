import React,{Component} from 'react';

class StepP1 extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/app.js";
    script.async = true;
    document.body.appendChild(script);
  }

   render() {
      return (
             <div>
             <title>Where is Wally?</title>
                 How many faces?
             </div>
      )}
}

export default StepP1;
