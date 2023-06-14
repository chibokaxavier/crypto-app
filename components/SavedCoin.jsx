import { db } from "@/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useAuth from "hooks/useAuth";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  const { user } = useAuth();
  // const deleteCoin = async (passedId) => {
  //   try {
  //     const results = coins.filter((coin) => coin.id !== passedId);
  //     await updateDoc(doc(db, "users", `${user.email}`), {
  //       watchlist: results,
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
  //     setCoins(doc.data()?.watchlist);
  //   });
  // }, [user.email]);

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list <Link href="/">Click here to search coins</Link>
        </p>
      ) : (
        <table className="text-center border-collapse w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={coin.id} className="h-[60px] overflow-hidden ">
                <td>{coin?.rank}</td>
                <td>
                  <Link href={`/coin/${coin.id}`}>
                    <div className="flex items-center ">
                      <img src={coin?.image} className="w-8 mr-4" alt="/" />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-gray-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8" onClick={()=>deleteCoin(coin.id)}>
                  <AiOutlineClose className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
