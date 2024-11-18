import React from "react";
import WalletConnector from "./walletConnect";

const ConnectWalletModal = ({ isOpen, onClose, onConnect }) => {
  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
        <WalletConnector onConnect={onConnect} />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  ) : null;
};

export default ConnectWalletModal;


