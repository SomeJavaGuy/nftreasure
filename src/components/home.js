import React,{Component} from 'react';


class Home extends Component {
  render() {
    
    return(
      <div>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/css/landpage.css"} />
        <div className='bg'></div>
      </div>    
    )
}}

export default Home;
