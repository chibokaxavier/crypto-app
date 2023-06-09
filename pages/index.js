import CoinSearch from "@/components/CoinSearch";
import { useEffect, useState } from "react";

export default function Home({ coins }) {
  return (
    <main>
      <div className=" min-h-screen">
        <CoinSearch coins={coins} />
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const request = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en"
  ).then((res) => res.json());

  return {
    props: {
      coins: request,
    },
  };
}
