import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./home";
import StepP3 from "./StepP3";
import StepS3 from "./StepS3";
import StepB3 from "./StepB3";
import StepB2 from "./StepB2";
import MainNavbar from './MainNavbar';
import About from './about';
import Web3 from 'web3'
import NFTreasure from '../abis/NFTreasure.json'

class App extends Component {


  render() {
    return (
        <div>
          <header>
          </header>
          <BrowserRouter>
            <main>
                {/* <MainNavbar /> */}

                <Switch>
                  <Route path="/stepp3" component={StepP3} />
                  <Route path="/steps3" component={StepS3} />
                  <Route path="/stepb3" component={StepB3} />
                  <Route path="/step2" component={StepB2} />
                  <Route path="/about" component={About} />
                  <Route path="/" component={Home} />
                </Switch>
            </main>
          </BrowserRouter>
        </div>

    );
  }
}

export default App;
