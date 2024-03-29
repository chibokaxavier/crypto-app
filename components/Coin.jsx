import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import useAuth from "hooks/useAuth";
import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase";

const Coin = ({ coin }) => {
  const { user } = useAuth();
  const [starred, setStarred] = useState(false);
  const [savedCoin, setSavedCoin] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStarred(stars.findIndex((star) => star.id === coin.id) !== -1);
  }, [stars]);

  useEffect(
    () =>
      onSnapshot(
        collection(db, "users", `${user?.email}`, "wishlist"),
        (snapshot) => {
          const post = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setStars(post);
        }
      ),
    [db]
  );

  const saveCoin = async () => {
    if (user?.email) {
      if (starred) {
        await deleteDoc(doc(db, "users", `${user.email}`, "wishlist", coin.id));
      } else {
        await setDoc(doc(db, "users", `${user.email}`, "wishlist", coin.id), {
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        });
      }
    } else {
      alert("Please Sign in to save a coin to your watch list!!");
    }
  };

  return (
    <tr className=" h-[80px] border-b overflow-hidden">
      <td onClick={saveCoin} className="">
        {starred ? (
          <AiFillStar className="cursor-pointer" />
        ) : (
          <AiOutlineStar className="cursor-pointer" />
        )}
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
