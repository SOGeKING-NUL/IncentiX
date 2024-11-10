# *Incentix - Open Source Contribution Reward Platform*

Incentix is a decentralized platform designed to reward contributors for their work on open-source projects. Through GitHub OAuth, contributors can access bountied issues, complete them, and earn cryptocurrency through automated smart contract payments. Built with blockchain technology, Incentix promotes transparency, security, and accountability in open-source contributions.

## *Table of Contents*
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## *Tech Stack*
- *Frontend*: React + Vite
- *Backend*: Node.js, Express
- *Database*: MongoDB
- *Authentication*: OAuth 2.0 (GitHub)
- *Blockchain*: Solidity (Smart Contracts), Polygon Network, Metamask Wallet

---

## *Features*

### *Role-Based Access*
- *Maintainers* can set bounties on GitHub issues and validate contributor work to release payments.
- *Contributors* can browse open issues tagged with "Incentix" and request to be assigned, earning rewards for successful completion.

### *Automated Payments via Smart Contracts*
- Bounties are managed through Solidity smart contracts on the Polygon blockchain.
- Payments are automatically processed upon task validation by maintainers, providing trustless, secure transactions.

### *GitHub OAuth Authentication*
- Users authenticate with GitHub, ensuring access only to relevant repositories and issues based on user roles.

### *Data Management in MongoDB*
- Project data, including user roles, issue tracking, and transaction logs, is securely stored and managed in MongoDB.

---

## *Getting Started*

### *Prerequisites*
- Node.js (version >= 14)
- Metamask browser extension
- GitHub Developer account for OAuth setup
- MongoDB instance for data storage

### *Installation*

1. *Clone the Repository*
    bash
    git clone https://github.com/ArshTiwari2004/IncentiX.git
    cd incentix
    

2. *Install Backend Dependencies*
    bash
    cd IncentiX-backend
    npm install
    

3. *Install Frontend Dependencies*
    bash
    cd ../client
    npm install
    

---

### *Environment Variables*

Create a .env file in the root of the IncentiX-backend/config directory and add the following environment variables:

plaintext
MONGO_URI=<your-mongodb-connection-string>
GITHUB_CLIENT_ID=<your-github-client-id>
GITHUB_CLIENT_SECRET=<your-github-client-secret>
JWT_SECRET=<your-jwt-secret>
POLYGON_RPC_URL=<polygon-node-url>
PRIVATE_KEY=<private-key-for-deployment>


## *Usage*

### *1. Running the Backend Server*

Navigate to the IncentiX-backend directory and start the backend server:

bash
`cd IncentiX-backend
npm start` 

The backend server will be running on http://localhost:1000.

### *2. Running the Frontend Client*

Navigate to the client directory and start the frontend client:

bash
`cd client
npm run dev` 

The frontend client will be running on http://localhost:5173.

### *3. Using the App*

-   Visit http://localhost:5173 and click "Get Started" to log in with GitHub.
-   Choose a role (either *Maintainer* or *Contributor*).
-   *Maintainers* can assign bounties to issues and validate contributor work.
-   *Contributors* can browse tagged issues, request assignments, and earn rewards upon successful completion.

----------

## *Contributing*

Contributions are welcome! To contribute:

1.  Fork the project.
2.  Create a feature branch (git checkout -b feature/YourFeature).
3.  Commit your changes (git commit -m 'Add some feature').
4.  Push to the branch (git push origin feature/YourFeature).
5.  Open a Pull Request.

----------

## *License*

This project is licensed under the MIT License. See the LICENSE file for details.

vbnet

Copy code

 This version should be easier to render without errors. Let me know if this solves the issue or if you
