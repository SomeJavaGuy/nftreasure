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
         <img className='center' src={process.env.PUBLIC_URL + "/img/MapPage.jpg"}></img>
       </div>
     )
      
   }
}

export default StepB1;

