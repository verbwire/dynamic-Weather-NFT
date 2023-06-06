# Weather-NFT
A web app generating NFT images using real-time weather data. Uses Node.js, Express.js, Wagmi smart contract integration. Auto-updates NFTs every 6 hours. Perfect for exploring dynamic NFTs &amp; external data integration.
![Project Thumbnail Youtube](https://github.com/verbwire/dynamic-Weather-NFT/assets/96954448/8773ccd0-0b62-4344-8f55-d56c1eaacde7)


## Prerequisites

Before running the project, ensure that you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

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
