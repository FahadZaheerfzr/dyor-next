import React from 'react'

export default function DexScreener({ chartAddress, networkName}) {
    return (
        <iframe
            title="Charts from Dexscreener"
            src={`https://dexscreener.com/${networkName}/${chartAddress}?embed=1&trades=0&info=0&theme=dark`}
            className="fit"
            scrolling='no'
            style={{ width: "100%", height: "100%", display: 'block' }} 
        />
    )
}
