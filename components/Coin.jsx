import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Coin = ({ coin }) => {
  return (
    <tr className=" h-[80px] border-b overflow-hidden">
      <td className="">
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link href={`/coinpage/${coin.id}`}>
        <div className=" flex items-center">
          <img
            className="w-6 mr-2 rounded-full"
            src={coin.image}
            alt={coin.id}
          />
          <p className="hidden sm:table-cell"> {coin.name}</p>
        </div>
        </Link>
       
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>&#8358;{coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-500">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-500">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className=" w-[180px] hidden md:table-cell">
        &#8358;{coin.total_volume.toLocaleString()}
      </td>
      <td className=" w-[180px] hidden md:table-cell">
        &#8358;{coin.market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default Coin;
