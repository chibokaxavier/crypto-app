import React from "react";

const Trending = ({ trending }) => {
  return (
    <div className="my-12 py-8 shadow-lg px-4 md:w-[1140px] mx-auto">
      <h1 className="text-2xl py-4 font-bold">Trending Coins</h1>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin, i) => (
          <div key={i} className=" shadow-lg p-4 flex justify-between hover:scale-105 ease-in-out duration-300">
            <div className="flex items-center justify-between w-full">
              <div className="flex">
                <img
                  className="mr-4 rounded-full"
                  src={coin.item.small}
                  alt="/"
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
