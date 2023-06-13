import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaGithub, FaReddit } from "react-icons/fa";
import DOMPurify from "dompurify";

const Coinpage = ({ coin }) => {
  return (
    <div className="my-12 py-8 md:w-[1140px] md:shadow-lg md:mx-auto px-4">
      <div className="flex py-8">
        <img className="w-20 mr-8" src={coin.image?.large} alt="/" />
        <div>
          <p className="text-3xl font-bold ">{coin?.name} Price</p>
          <p>({coin.symbol?.toUpperCase()}/USD)</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between">
            {coin.market_data?.current_price ? (
              <p className="font-bold text-3xl">
                &#8358;{coin.market_data.current_price.ngn.toLocaleString()}
              </p>
            ) : null}
            <p>7 Days</p>
          </div>
          <div className="mt-8">
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="yellow" />
            </Sparklines>
          </div>


          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>&#8358;{coin.market_data.market_cap.ngn.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500" >Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>
                  &#8358;{coin.market_data.total_volume.ngn.toLocaleString()}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between py-4" >
            <div>
              <p className="text-sm text-gray-500">24h High</p>
              {coin.market_data?.high_24h ? (
                <p>&#8358;{coin.market_data.high_24h.ngn.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>&#8358;{coin.market_data.low_24h.ngn.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-xl font-bold">Market Stats</p>
          <div  className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className="text-sm text-gray-500">Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div className="">
              <p className="text-sm text-gray-500">Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-between py-4">
            <div>
              <p className="text-sm text-gray-500">Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className="text-sm text-gray-500">Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>

           
          </div>
          <div className=" flex justify-around p-8 text-cyan-500">
              <FaTwitter />
              <FaFacebook />
              <FaReddit />
              <FaGithub />
            </div>
        </div>
      </div>

      {/* Desription */}
      {/* <div className="md:w-full">
        <p>About {coin.name}</p>
        <p className="">{coin.description.en}</p>
      </div> */}
    </div>
  );
};

export default Coinpage;

export async function getServerSideProps(context) {
  const coin = context.query.id;
  const request = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&sparkline=true`
  ).then((res) => res.json());

  return {
    props: {
      coin: request,
    },
  };
}
