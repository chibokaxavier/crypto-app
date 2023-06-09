import CoinSearch from "@/components/CoinSearch";
import Trending from "@/components/Trending";
import { useEffect, useState } from "react";

export default function Home({ coins,trending }) {
  return (
    <main>
      <div className=" min-h-screen  px-4">
        <CoinSearch coins={coins} />
        <Trending trending={trending} />
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const [requestRes, trendingRes] = await Promise.all ([
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en"
    ),
    fetch("https://api.coingecko.com/api/v3/search/trending"),
  ]);
  const [request, trending] = await Promise.all ([
    requestRes.json(),
    trendingRes.json(),
  ]);

  return {
    props: {
      coins: request,
      trending: trending.coins,
    },
  };
}
// export async function getServerSideProps(context) {
//   const request = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en"
//   ).then((res) => res.json());

//   return {
//     props: {
//       coins: request,
//     },
//   };
// }
