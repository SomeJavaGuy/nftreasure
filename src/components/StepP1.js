import React,{Component} from 'react';

class StepB1 extends Component {

  componentDidMount () {
    const script = document.createElement("script");
    script.src = process.env.PUBLIC_URL + "/js/app.js";
    script.async = true;
    document.body.appendChild(script);
}

   render(){
      return (
             <div>
             <title>Where is Wally?</title>
             How many faces?
             <form>
             <input type='text' id='solution' name='How many faces?' />
             </form>
             </div>
      )
   }
}

export default StepB1;

