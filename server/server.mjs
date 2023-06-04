
import express from "express";
const app = express();

import credentials from "./credentials.js";
import fetch from "node-fetch";
import FormData from "form-data";
import cron from "node-cron";


const coolZone = 'https://ipfs.io/ipfs/bafyreiatclodu2qm4lt72ldcvjiqo4w7yls5s35ypfl7v7ulamoy3tdhki/metadata.json';
const comfortZone = 'https://ipfs.io/ipfs/bafyreigcrs7pvk3g6tthvwkr6qzbcnvzb7skqmoil7od4l3utjuyirh67u/metadata.json';
const hotZone = 'https://ipfs.io/ipfs/bafyreiccbyy4qbaj7qdragknjfkx74pstwnebfgawjmq4ll5stotvm7bru/metadata.json';


let isMinted = false;
let tokenId = null;
let autoUpdate = false;

cron.schedule('0 */6 * * *', () => {
  if(autoUpdate){
    fetch('http://localhost:5000/updateNFT/')
  }
});

app.get("/", (req, res) => {
  res.json({
    isMinted: isMinted,
    tokenId: tokenId,
    autoUpdate: autoUpdate,
  });
});

app.get("/setMinted", (req, res) => {
  isMinted = true;
  res.json({ status: "Done" });
});

app.get("/setTokenID/:id", (req, res) => {
  tokenId = req.params.id;
  res.json({ status: "Done" });
});

app.get("/updateNFT/", (req, res) => {

    async function updateMetadata(metadata){
    const form = new FormData();
    form.append("chain", "goerli");
    form.append("contractAddress", credentials.contractAddress);
    form.append("newTokenURI", metadata);
    form.append("tokenId", tokenId);

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "X-API-Key": credentials.apiKey ,
      },
    };

    options.body = form;

    const res4 = await fetch("https://api.verbwire.com/v1/nft/update/updateTokenMetadata", options);
    console.log(res4.json());
    if(res4) {
      res.json({ status: "Done" });
    }

    }
  
    async function update() {
    autoUpdate = true;
    const res3 = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${credentials.weatherAPIKey}&q=${credentials.location}&aqi=no`
    );
    const response3 = await res3.json();
    const current = response3.current;

    if(current.temp_f <= 50){
        updateMetadata(coolZone);
    }
    else if(current.temp_f > 50 && current.temp_f < 80){
        updateMetadata(comfortZone);
    }
    else if(current.temp_f >= 80){
        updateMetadata(hotZone);
    }

    
  }
  update();
});

app.listen(5000, () => {
  console.log("server running.");
});
