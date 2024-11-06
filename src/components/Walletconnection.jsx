import React from 'react';
import toast from 'react-hot-toast';

const WalletConnection = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const walletAddress = accounts[0];
        toast.success("Wallet connected successfully!");

        // wallelt address ko backend me bhejna hai

      } catch (error) {
        toast.error("Failed to connect wallet.");
        console.error(error);
      }
    } else {
      toast.error("MetaMask not detected.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Connect Your Wallet</h2>
      <p className="text-gray-600 mb-6">To continue, please connect your MetaMask wallet.</p>
      <button
        onClick={connectWallet}
        className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition duration-200"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default WalletConnection;
