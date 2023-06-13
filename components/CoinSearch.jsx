import React, { useState } from "react";
import Coin from "./Coin";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="my-4 md:w-[1140px] md:mx-auto md:shadow-2xl md:rounded-lg md:p-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search for Crypto</h1>
        <form className="">
          {" "}
          <input
            className="w-full bg-transparent border-none outline-none shadow-xl rounded-2xl px-4 py-2 "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search a Coin"
          />
        </form>
      </div>

      <table className=" w-full text-center border-collapse">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden md:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>

        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <Coin coin={coin} key={coin.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
