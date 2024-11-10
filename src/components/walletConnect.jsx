import React, { useState } from "react";
import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import { FaWallet, FaEthereum, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const WalletConnector = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [chainId, setChainId] = useState(null);
  const navigate = useNavigate();

  // Connect function to interact with MetaMask
  const connect = async () => {
    if (typeof window.ethereum === "undefined") {
      console.warn("MetaMask is not installed. Please install MetaMask.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      if (accounts.length > 0) {
        const connectedAccount = accounts[0];
        setAccount(connectedAccount);

        const web3 = new Web3(window.ethereum);
        const balanceWei = await web3.eth.getBalance(connectedAccount);
        const balanceInEther = web3.utils.fromWei(balanceWei, "ether");
        setBalance(balanceInEther);

        const chainId2 = await web3.eth.getChainId();
        setChainId(chainId2.toString());

        // Send account details to the server (optional)
        console.log(connectedAccount);
        
        const response = await axios.post("http://localhost:1000/api/account/save", {
          address: connectedAccount,
        });

        console.log(response);
      } else {
        console.warn("No accounts found. Please connect to MetaMask.");
      }
    } catch (err) {
      console.warn("Failed to connect:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-800 to-black text-white p-6">
      <div className="w-full max-w-lg bg-gray-900 text-gray-200 rounded-lg shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-extrabold text-center text-indigo-300">
          Welcome to Your Wallet Hub
        </h1>
        <p className="text-center text-lg font-medium text-gray-300">
          Connect your <span className="text-indigo-400">MetaMask</span> wallet to check your balance, network details, and experience a seamless connection.
        </p>
        
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={connect}
            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out w-full text-lg"
          >
            <FaWallet className="mr-3" />
            Connect to MetaMask
          </button>
          
          {account && (
            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg w-full text-center space-y-4">
              <p className="text-xl font-bold">
                <FaEthereum className="inline-block mr-2 text-indigo-400" />
                <span className="text-indigo-300">Wallet Connected</span>
              </p>
              <p className="text-lg font-semibold">
                Chain ID: <span className="font-bold text-indigo-300">{chainId || "Not Connected"}</span>
                <br />
                {chainId === "0x89" ? (
                  <span className="text-green-400">Polygon Mainnet</span>
                ) : (
                  <span className="text-red-400">Not Polygon Mainnet</span>
                )}
              </p>
              <p className="text-lg font-semibold">
                Account: <span className="text-indigo-300 font-bold">{account}</span>
              </p>
              <p className="text-lg font-semibold">
                Balance: <span className="text-green-300 font-bold">{balance} MATIC</span>
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate("/role")}
          disabled={!account} // Disable if account is not set
          className={`flex items-center justify-center py-3 px-6 rounded-lg transition duration-200 ease-in-out w-full text-lg font-semibold ${
            account ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-500 cursor-not-allowed text-gray-300"
          }`}
        >
          Add Your Role <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default WalletConnector;
