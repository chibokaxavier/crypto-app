import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinSearch = ({ coins }) => {
  return (
    <div>
      <div>
        <h1>Search for Crypto</h1>
        <form>
          {" "}
          <input type="text" placeholder="Search a Coin" />
        </form>
      </div>

      <div className="grid grid-cols-9">
        <div></div>
        <div>#</div>
        <div>Coin</div>
        <div></div>
        <div>Price</div>
        <div>24h</div>
        <div>24h Volume</div>
        <div>Mkt</div>
        <div>Last 7 Days</div>
      </div>
      <div>
        {coins.map((coin) => (
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
        ))}
      </div>
    </div>
  );
};

export default CoinSearch;
