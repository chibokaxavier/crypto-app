import { useRouter } from "next/router";
import React from "react";

const Coinpage = ({ coins }) => {
  console.log(coins);
  const router = useRouter();
  return <div>
    
  </div>;
};

export default Coinpage;

export async function getServerSideProps(context) {
  const coin = context.query.id;
  const request = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&sparkline=true`
  ).then((res) => res.json());

  return {
    props: {
      coins: request,
    },
  };
}
