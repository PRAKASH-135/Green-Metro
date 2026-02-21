import { useEffect, useState } from "react";
import API from "../services/api";

export default function Wallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchWallet = async () => {
      const res = await API.get("/wallet");
      setBalance(res.data.balance);
    };
    fetchWallet();
  }, []);

  const claimReward = async () => {
    const res = await API.post("/rewards/claim");
    alert(res.data.message);
  };

  return (
    <div>
      <h2>Wallet Balance: {balance}</h2>
      <button onClick={claimReward}>Claim Reward</button>
    </div>
  );
}