import { useEffect, useState } from 'react'
import './App.css'
import { goerli } from "viem/chains";
import { WagmiConfig, createConfig, configureChains, mainnet, useConnect, useAccount } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { infuraProvider } from '@wagmi/core/providers/infura';
import credentials from './Credentials';
import Home from './Components/Home';


function App() {

  const { chains, publicClient } = configureChains(
    [goerli],
    [infuraProvider({apiKey: credentials.infuraKey})]
    );
    
  const config = createConfig({
      autoConnect: true,
      connectors: [new MetaMaskConnector({chains})],
      publicClient,
    });
  

  return (
    <>
      <WagmiConfig config={config}>
        <Home />
      </WagmiConfig>
    </>
  )
}

export default App
