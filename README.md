# Weather-NFT
A web app generating NFT images using real-time weather data. Uses Node.js, Express.js, Wagmi smart contract integration. Auto-updates NFTs every 6 hours. Perfect for exploring dynamic NFTs &amp; external data integration.

![Verbwire Project - Dynamic Weather NFT](https://res.cloudinary.com/dbt4ivvwm/image/upload/v1686088733/imageedit_2_6965947446_ioy0kw.png)


## How the Project Works

This section provides an overview of how the project works. It covers the steps involved in creating the contract, minting the NFTs, and updating the NFT metadata.

### 1. Create the Contract

To create the contract, follow these steps:

- Use the provided Endpoint to create the contract. You can find more details in the [Verbwire API documentation](https://docs.verbwire.com/reference/post_nft-deploy-deploycontract).

### 2. Minting the NFTs

You have two options for minting the NFTs:

#### Option 1: Using Endpoint

- Use the provided Endpoint to mint the NFTs from a metadata URL. Refer to the [Verbwire API documentation](https://docs.verbwire.com/reference/post_nft-mint-mintfrommetadataurl) for more details.

#### Option 2: Using Contract Write Function

- Implement the contract write function named `mint(address recipient, string memory tokenURI, uint256 quantity) payable` within your application's codebase.
- Provide the recipient's address, token URI (metadata URL), and the desired quantity as parameters when calling the `mint` function.
- This function allows you to mint NFTs directly through the contract by interacting with its write functions.

### 3. Updating the NFT Metadata

To update the NFT metadata, follow these steps:

- Use the provided Endpoint to update the token metadata. Details can be found in the [Verbwire API documentation](https://docs.verbwire.com/reference/post_nft-update-updatetokenmetadata).
- This Endpoint allows you to update the metadata associated with an existing NFT. You can provide the token ID and the new metadata information to update.

## Prerequisites

Before running the project, ensure that you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)
- Metamask Account

## Configuration

The following files need to be modified before running the project:

### Client

Navigate to the following file:
client -> src -> Components -> Credentials.jsx

Inside the `Credentials.jsx` file, update the following values:

- Verbwire API Key
- Contract Address
- Infura Key

### Server

Navigate to the following file:
server -> credentials.js

Inside the `credentials.js` file, update the following values:

- Verbwire API Key
- Contract Address
- Weather API Key

## Running the Application

To run the application, follow the steps below:

1. Run the client:
   - Open a terminal
   - Navigate to the `client` directory: `cd client`
   - Install the required dependencies: `npm install`
   - Start the client application: `npm run dev`

2. Run the server:
   - Open another terminal (in a separate window or tab)
   - Navigate to the `server` directory: `cd server`
   - Install the required dependencies: `npm install`
   - Start the server application: `npm run dev`

## Accessing the Application

Once both the client and server are running, your application should be up and running!

You can access the application by opening your web browser and navigating to the appropriate URL.

## Additional Resources

For additional reference, you can also check out this video tutorial: [Weather NFT Project Video](https://youtu.be/1qIarc0ODyw)

That's it! You should now have the project set up and ready to use. If you have any questions or run into any issues, please feel free to reach out. Happy coding!
