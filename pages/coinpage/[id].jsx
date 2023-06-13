import { useRouter } from "next/router";
import React from "react";

const Coinpage = ({ coin }) => {
  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name}</p>
          <p>({coin.symbol?.toUpperCase()}/USD)</p>
        </div>
      </div>

      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>{coin.market_data.current_price.ngn.toLocaleString()}</p>
            ) : null}
            <p>7 Days</p>
          </div>
          <div>

            
          </div>
        </div>
      </div>
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
