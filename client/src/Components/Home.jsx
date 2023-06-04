import React, { useEffect, useState } from 'react'
import {
    Connector,
    useAccount,
    useConnect,
    useContractWrite,
    useDisconnect,
    usePrepareContractWrite,
  } from "wagmi";
import Mint from './Mint';
import TokenForm from './TokenForm';
import PostMinted from './PostMinted';
  

function Home() {
    const { address, isConnected } = useAccount();
    const { connectAsync, connectors } = useConnect();
    const [isMinted, setIsMinted] = useState(false);
    const [tokenId, setTokenId] = useState('');
    

    useEffect(() => {
      async function fetchInfo(){
        const res = await fetch('/api');
        const data = await res.json();
        setIsMinted(data.isMinted);
        setTokenId(data.tokenId);
        console.log(data);
      }

      fetchInfo()
    }, [])
    

    async function connectWallet(connector) {
        const { chain } = await connectAsync({ connector });
    }
  return (
    <>
    {!isConnected &&
        connectors.map((connector) => {
          const { id, name } = connector;
          return (
            <button onClick={() => connectWallet(connector)} key={id} id={id}>
              Connect to {name}
            </button>
          );
        })}
    {isConnected &&  <>
    {!isMinted && <>
        <Mint />
    </>}
    {isMinted && <>
        {!tokenId && <>
            <TokenForm />
        </>}
        {tokenId && <>
            <PostMinted />
        </>}
    </>}
    </> }

    </>
    
  )
}

export default Home