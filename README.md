# JewelAssure

JewelAssure is a blockchain-based decentralized app for verifying the authenticity of jewelry by securely storing detailed attributes on the blockchain. Enhance trust in online jewelry transactions with immutable and transparent verification.

## Problem Statement

The online jewelry market is plagued with counterfeit products, leading to significant trust issues among consumers. This project addresses the problem by providing a reliable and transparent method to verify the authenticity of jewelry using blockchain technology.

## Solution

Our DApp leverages blockchain to store and verify jewelry information. Each piece of jewelry is registered on the blockchain with unique identifiers and detailed attributes. Users can verify the authenticity of jewelry by scanning a QR code or entering the unique identifier into the DApp, which retrieves and displays the recorded information from the blockchain.

## Features

- **Secure Data Storage:** Jewelry information is stored on the blockchain, ensuring immutability and security.
- **Smart Contracts:** Smart contracts handle the recording and verification of jewelry data.
- **User-Friendly Interface:** A web-based interface allows users to easily interact with the DApp.
- **QR Code Verification:** Users can quickly verify jewelry authenticity by scanning a QR code.

## Tech Stack

- **Blockchain Platform:** Ethereum
- **Storage Solution:** FileCoin for decentralized storage
- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Smart Contracts:** Solidity
- **Deployment:** IPFS for decentralized hosting

## Installation and Setup

### Prerequisites

- Node.js
- Truffle
- Ganache
- MetaMask

### Smart Contract Deployment

1. Clone the repository:

   ```bash
   git clone https://github.com/amanraj069/JewelAssure
   cd jewelry-authentication-dapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the smart contracts:

   ```bash
   truffle compile
   ```

4. Deploy the smart contracts:
   ```bash
   truffle migrate
   ```

### Running the DApp

1. Start the development server:

   ```bash
   npm start
   ```

2. Open MetaMask and connect to the local blockchain (e.g., Ganache).

3. Access the DApp at `http://localhost:3000`.

## Usage

1. **Register Jewelry:**

   - Navigate to the registration page.
   - Enter the jewelry details (carats, weight, color, design number, manufacturing date).
   - Submit the form to store the information on the blockchain.

2. **Verify Jewelry:**
   - Navigate to the verification page.
   - Scan the QR code or enter the unique identifier of the jewelry.
   - View the recorded details to verify authenticity.
