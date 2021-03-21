import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./home";

import StepP1 from "./StepP1";
import StepP2 from "./StepP2";
import StepP3 from "./StepP3";

import StepS1 from "./StepS1";
import StepS2 from "./StepS2";
import StepS3 from "./StepS3";

import StepB1 from "./StepB1";
import StepB2 from "./StepB2";
import StepB3 from "./StepB3";

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
                  <Route path="/50t3r" component={StepS1} />
                  <Route path="/beep5" component={StepS2} />
                  <Route path="/i am bored of morse code riddles" component={StepS3} />

                  <Route path="/goathunt" component={StepP1} />
                  <Route path="/39" component={StepP2} />
                  <Route path="/1997134" component={StepP3} />

                  <Route path="/wally" component={StepB1} />
                  <Route path="/anchor" component={StepB2} />
                  <Route path="/BRATSXONEBRANDECAYXBARBADEE" component={StepB3} />

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
