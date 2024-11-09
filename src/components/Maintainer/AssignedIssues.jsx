import React, { useState } from 'react';
import { ethers } from 'ethers';

const ContractDeployer = () => {
    const [maintainerAddress, setMaintainerAddress] = useState('');
    const [bountyHunterAddress, setBountyHunterAddress] = useState('');
    const [bountyAmount, setBountyAmount] = useState('');
    const [status, setStatus] = useState('');
    const contractABI = [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_bountyHunter",
            "type": "address"
          }
        ],
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "amount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "bountyHunter",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "bountyPoster",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "cancelBounty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "complete",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getContractBalance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "markComplete",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "releaseFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];

    // Deploy contract function
    const deployContract = async () => {
        if (!window.ethereum) {
            setStatus('MetaMask is not installed!');
            return;
        }

        try {
            // Connect to MetaMask
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            // Convert bounty amount to Wei
            const amountInWei = ethers.parseEther(bountyAmount);

            // Contract bytecode for PaymentDispenser (get it from contract compilation)
            const contractBytecode = `608060405260405162000f0a38038062000f0a83398181016040528101906200002991906200024e565b600034116200006f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200006690620002fb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620000e2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000d990620002d9565b60405180910390fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346002819055506000600360006101000a81548160ff021916908315150217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fac9bb969dfe6415a4665bfa1e14d838c195141fe49fe20c01910c98aa5a1b7066002546040516200022891906200031d565b60405180910390a350620003f5565b6000815190506200024881620003db565b92915050565b6000602082840312156200026157600080fd5b6000620002718482850162000237565b91505092915050565b600062000289601d836200033a565b9150620002968262000389565b602082019050919050565b6000620002b06020836200033a565b9150620002bd82620003b2565b602082019050919050565b620002d3816200037f565b82525050565b60006020820190508181036000830152620002f4816200027a565b9050919050565b600060208201905081810360008301526200031681620002a1565b9050919050565b6000602082019050620003346000830184620002c8565b92915050565b600082825260208201905092915050565b600062000358826200035f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f496e76616c696420626f756e74792068756e7465722061646472657373000000600082015250565b7f4d7573742073656e642066756e647320746f2063726561746520626f756e7479600082015250565b620003e6816200034b565b8114620003f257600080fd5b50565b610b0580620004056000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80636f9fb98a1161005b5780636f9fb98a146100f1578063a913eb081461010f578063aa8c217c14610119578063b421ba0b1461013757610088565b806304b4b8c51461008d578063271ac22a146100ab578063522e1177146100c957806369d89575146100e7575b600080fd5b610095610141565b6040516100a29190610861565b60405180910390f35b6100b3610167565b6040516100c09190610861565b60405180910390f35b6100d161018b565b6040516100de919061087c565b60405180910390f35b6100ef61019e565b005b6100f9610383565b6040516101069190610957565b60405180910390f35b61011761038b565b005b6101216105b7565b60405161012e9190610957565b60405180910390f35b61013f6105bd565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900460ff1681565b600360009054906101000a900460ff166101ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e4906108d7565b60405180910390fd5b600254471015610232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022990610917565b60405180910390fd5b6000600254905060006002819055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826040516102899061084c565b60006040518083038185875af1925050503d80600081146102c6576040519150601f19603f3d011682016040523d82523d6000602084013e6102cb565b606091505b505090508061030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030690610897565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f221c08a06b07a64803b3787861a3f276212fcccb51c2e6234077a9b8cb13047a836040516103779190610957565b60405180910390a25050565b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610419576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610410906108f7565b60405180910390fd5b600360009054906101000a900460ff1615610469576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046090610937565b60405180910390fd5b60006002549050600060028190555060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826040516104bf9061084c565b60006040518083038185875af1925050503d80600081146104fc576040519150601f19603f3d011682016040523d82523d6000602084013e610501565b606091505b5050905080610545576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053c906108b7565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f74ff9509031fadb6ecc6f77f8d6d7a27e84f26cce20cd792f1fe8006f1222e4a836040516105ab9190610957565b60405180910390a25050565b60025481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461064b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610642906108f7565b60405180910390fd5b600360009054906101000a900460ff161561069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069290610937565b60405180910390fd5b6001600360006101000a81548160ff021916908315150217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f3841988603bba0118f0e29fd384a83630cf4db053fb024823cc12864304bc4d46002546040516107209190610957565b60405180910390a2565b6107338161098e565b82525050565b610742816109a0565b82525050565b6000610755600f8361097d565b9150610760826109d6565b602082019050919050565b6000610778600d8361097d565b9150610783826109ff565b602082019050919050565b600061079b601b8361097d565b91506107a682610a28565b602082019050919050565b60006107be600083610972565b91506107c982610a51565b600082019050919050565b60006107e160208361097d565b91506107ec82610a54565b602082019050919050565b6000610804601d8361097d565b915061080f82610a7d565b602082019050919050565b6000610827601f8361097d565b915061083282610aa6565b602082019050919050565b610846816109cc565b82525050565b6000610857826107b1565b9150819050919050565b6000602082019050610876600083018461072a565b92915050565b60006020820190506108916000830184610739565b92915050565b600060208201905081810360008301526108b081610748565b9050919050565b600060208201905081810360008301526108d08161076b565b9050919050565b600060208201905081810360008301526108f08161078e565b9050919050565b60006020820190508181036000830152610910816107d4565b9050919050565b60006020820190508181036000830152610930816107f7565b9050919050565b600060208201905081810360008301526109508161081a565b9050919050565b600060208201905061096c600083018461083d565b92915050565b600081905092915050565b600082825260208201905092915050565b6000610999826109ac565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b7f526566756e64206661696c656400000000000000000000000000000000000000600082015250565b7f576f726b206e6f74206d61726b656420617320636f6d706c6574650000000000600082015250565b50565b7f4f6e6c7920626f756e747920706f737465722063616e2063616c6c2074686973600082015250565b7f496e73756666696369656e7420636f6e74726163742062616c616e6365000000600082015250565b7f576f726b20616c7265616479206d61726b656420617320636f6d706c6574650060008201525056fea26469706673582212209f4e869108a917bde683507619bfd7ba8bdd7908e7e96308d0a81081c59948a064736f6c63430008020033`; // Replace with your contract bytecode
 // Paste compiled bytecode here

            // Deploy the contract with constructor arguments and value
            const factory = new ethers.ContractFactory(contractABI, contractBytecode, signer);
            const contract = await factory.deploy(bountyHunterAddress, {
                value: amountInWei, // Sends ETH as part of the deployment
            });

            // Wait for contract deployment to complete
            await contract.deploymentTransaction().wait();
            setStatus(`Contract deployed at address: ${contract.target}`);

            // Listen for events emitted from the contract
            contract.on("BountyCreated", (poster, hunter, amount) => {
                console.log(`Bounty Created by ${poster} for ${hunter} with amount ${ethers.formatEther(amount)} ETH`);
            });

            contract.on("WorkCompleted", (hunter, amount) => {
                console.log(`Work Completed by ${hunter}. Amount: ${ethers.formatEther(amount)} ETH`);
            });

            contract.on("FundsReleased", (hunter, amount) => {
                console.log(`Funds Released to ${hunter}. Amount: ${ethers.formatEther(amount)} ETH`);
            });

            contract.on("BountyCancelled", (poster, amount) => {
                console.log(`Bounty Cancelled by ${poster}. Refund Amount: ${ethers.formatEther(amount)} ETH`);
            });

        } catch (error) {
            console.error("Error deploying contract:", error);
            setStatus('Error deploying contract. Please check console for details.');
        }
    };

    return (
        <div>
            <h2>Deploy Payment Dispenser Contract</h2>
            <input
                type="text"
                placeholder="Maintainer Address"
                value={maintainerAddress}
                onChange={(e) => setMaintainerAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="Bounty Hunter Address"
                value={bountyHunterAddress}
                onChange={(e) => setBountyHunterAddress(e.target.value)}
            />
            <input
                type="number"
                placeholder="Bounty Amount (ETH)"
                value={bountyAmount}
                onChange={(e) => setBountyAmount(e.target.value)}
            />
            <button onClick={deployContract}>Deploy Contract</button>
            <p>{status}</p>
        </div>
    );
};

export default ContractDeployer;
