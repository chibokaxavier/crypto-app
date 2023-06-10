import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Coin = ({ coin }) => {
  return (
    <div className="grid grid-cols-9">
      <div>
        <AiOutlineStar />
      </div>
      <div>{coin.market_cap_rank}</div>
      <div>
        <div className=" ">
          <img src={coin.image} alt={coin.id} />
          <p>{coin.name}</p>
        </div>
      </div>
      <div>{coin.symbol}</div>
      <div>{coin.current_price}</div>
      <div>{coin.price_change_percentage_24h}</div>
      <div>{coin.total_volume}</div>
      <div>{coin.market_cap}</div>
      <div>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>
    </div>
  );
};

export default Coin;
