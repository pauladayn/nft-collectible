import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Web3 = require("web3");

function App() {
  const ethereum = window.ethereum;

  const [address, setAddress] = useState("");
  const [accounts, setAccounts] = useState([]);
  const ethEnabled = () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();

      return true;
    }
    return false;
  };
  console.log(address)

 
  /*   const isMetaMaskConnected = () => accounts && accounts.length > 0;
  //este bloque de código chequea la conexión a entre Metamask y el address al que está conectada
  if (ethereum) {
    ethereum.on("accountsChanged", (accounts) => {
      // Handle the new accounts, or lack thereof.
      // "accounts" will always be an array, but it can be empty.
      setAddress(accounts[0]);
    });
  } */

  return (
    <div className="App">
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Color Tokens {ethereum && <p>Your Ethereum address: {address}</p>}
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white">
              <span id="account"></span>
            </small>
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default App;
