import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Coin = ({ coin }) => {
  return (
    <tr className=" w-full text-center border-collapse">
      <td className="">
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <td className=" ">
          <img src={coin.image} alt={coin.id} />
          <p>{coin.name}</p>
        </td>
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
      <td>{coin.price_change_percentage_24h}</td>
      <td>{coin.total_volume}</td>
      <td>{coin.market_cap}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default Coin;
