import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import NFTreasure from '../abis/NFTreasure.json'

class StepB3 extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = NFTreasure.networks[networkId]
    if(networkData) {
      const abi = NFTreasure.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  submit_secret_br = (color) => {
      this.state.contract.methods.submitSecret(Web3.utils.fromAscii("QmYr7p8TvRPGoCjBipTXSs7DP1FR5oPNjmohuUt3UW3pZZ")).send({ from: this.state.account })
          .once('receipt', (receipt) => {
              this.setState({
                  colors: [...this.state.colors, color]
              })
          })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      contract: null,
      totalSupply: 0,
      colors: []
    }
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + "/css/successpage.css"} />

        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account">{this.state.account}</span></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
              <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <form onSubmit={(event) => {
                  event.preventDefault()
                  const color = this.color.value
                  this.submit_secret_br(color)
                }}>
                  <input
                    type='submit'
                    className='btn btn-block btn-primary'
                    value="Get BR's prize!"
                  />
                </form>
              </div>
            </main>
          </div>
          <hr/>
          <div className="row text-center">
            { this.state.colors.map((color, key) => {
              return(
                <div key={key} className="col-md-3 mb-3">
                  <div className="token" style={{ backgroundColor: color }}></div>
                  <div>{color}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default StepB3;
