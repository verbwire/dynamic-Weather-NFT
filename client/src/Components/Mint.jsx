import React, { useEffect } from 'react'
import { usePrepareContractWrite, useContractWrite, useAccount } from 'wagmi'
import credentials from '../Credentials'
import { parseAbi } from 'viem'

function Mint() {
  const {address} = useAccount();
  const tokenURI = 'https://ipfs.io/ipfs/bafyreiex46ep4jybrrho7f4nzkgddwrfkga2x6pf7gc5infpfcigxhkczq/metadata.json';


  const { config, error, isError } = usePrepareContractWrite({
    address: credentials.contractAddress,
    abi: parseAbi(['function mint(address recipient, string memory tokenURI, uint256 quantity) payable']),
    functionName: 'mint',
    args: [address, tokenURI, 1]
  })
  const { data, isLoading, isSuccess, write } = useContractWrite(config)

  useEffect(() => {
    async function setMinted() {
      const res = await fetch('/api/setMinted');
      const response = await res.json();
      if(response.status == 'Done'){
        // location.reload();
      }
    }

    setTimeout(() => {
      if(isSuccess){
        setMinted();
      }
    }, 3000);

  }, [isSuccess])

  function refresh() {
    location.reload();
  }
  

  return (
    <>
    {!isSuccess &&<button onClick={() => write()}>
      {isLoading ? 'Loading...' : 'Mint NFT'}
    </button>}
    {isSuccess && <>
      <a href= {`https://goerli.etherscan.io/tx/${data.hash}`} target="_blank">
        <button>View on EtherScan</button>
      </a>
      <div>
        <button onClick={() => refresh()}>Refresh</button>
      </div>
    </>
    }

    </>
  )
}

export default Mint