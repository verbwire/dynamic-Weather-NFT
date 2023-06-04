import React, { useEffect, useState } from "react";
import credentials from "../Credentials";

function PostMinted() {
  const [state, setState] = useState(false);
  const [tokenURIState, settokenURIState] = useState("");

  const coolZone =
    "https://ipfs.io/ipfs/bafyreiatclodu2qm4lt72ldcvjiqo4w7yls5s35ypfl7v7ulamoy3tdhki/metadata.json";
  const comfortZone =
    "https://ipfs.io/ipfs/bafyreigcrs7pvk3g6tthvwkr6qzbcnvzb7skqmoil7od4l3utjuyirh67u/metadata.json";
  const hotZone =
    "https://ipfs.io/ipfs/bafyreiccbyy4qbaj7qdragknjfkx74pstwnebfgawjmq4ll5stotvm7bru/metadata.json";

  async function getDetails() {
    const contractAddress = credentials.contractAddress;
    const res1 = await fetch("/api/");
    const response1 = await res1.json();
    const tokenId = response1.tokenId;
    getNFTDetails(contractAddress, tokenId);
  }

  async function getNFTDetails(contractAddress, tokenId) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": credentials.apiKey,
      },
    };

    const res2 = await fetch(
      `https://api.verbwire.com/v1/nft/data/nftDetails?contractAddress=${contractAddress}&tokenId=${tokenId}&chain=goerli`,
      options
    );
    const response2 = await res2.json();
    console.log(response2);
    const nftDetails = response2.nft_details;
    settokenURIState(nftDetails.tokenURI);
    setState(true);
  }

  useEffect(() => {
    getDetails();
  }, []);

  async function clickButton() {
    const res4 = await fetch(`/api/updateNFT/`);
    console.log(res4.json());
    if(res4){
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
  }


  return (
    <>
      {!state && (
        <>
          <p>Loading...</p>
        </>
      )}
      {state && (
        <>
          <div>
            <img
              width={200}
              src={`/images/${
                tokenURIState == coolZone
                  ? `Cool-Zone`
                  : tokenURIState == comfortZone
                  ? `Comfort-Zone`
                  : tokenURIState == hotZone
                  ? `Hot-Zone`
                  : `Default`
              }.png`}
            ></img>
          </div>
          <div>
            <h2>
              Weather:{" "}
              {tokenURIState == coolZone
                ? `Cool Zone`
                : tokenURIState == comfortZone
                ? `Comfort Zone`
                : tokenURIState == hotZone
                ? `Hot Zone`
                : `Summer`}
            </h2>
          </div>
          <div>
            {tokenURIState != coolZone && hotZone && comfortZone && (
              <>
                <button onClick={clickButton}>Start Auto-Update</button>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default PostMinted;
