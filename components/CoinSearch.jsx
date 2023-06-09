import React from 'react'

const CoinSearch = ({coins}) => {
  return (
    <div>{coins.map((coin)=>(
        <div key={coin.id}>
            {coin.name}
        </div>
    ))}</div>
  )
}

export default CoinSearch