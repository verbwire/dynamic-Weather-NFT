import React, { useState } from 'react'

function TokenForm() {
    const [token, setToken] = useState('');

    async function setTokenId() {
        const res = await fetch(`/api/setTokenID/${token}`);
        const response = await res.json();
        if(response.status == 'Done'){
            location.reload();
        }
    }
  return (
    <>
        <input
            placeholder='TokenID'
            onChange={(e) => setToken(e.target.value)}
        ></input>
        <button onClick={() => setTokenId()}>Submit</button>
    </>
  )
}

export default TokenForm