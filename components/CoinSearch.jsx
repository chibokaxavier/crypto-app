import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Coin from "./Coin";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div>
        <h1>Search for Crypto</h1>
        <form>
          {" "}
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search a Coin"
          />
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
        {coins
          .filter((value) => {
            if (searchText === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            ) {
              return value;
            }
          })
          .map((coin) => (
            <Coin coin={coin} key={coin.id} />
          ))}
      </div>
    </div>
  );
};

export default CoinSearch;
