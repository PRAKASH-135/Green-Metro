import { useState } from "react";
import API from "../services/api";

export default function LogTrip() {
  const [startStation, setStart] = useState("");
  const [endStation, setEnd] = useState("");
  const [ticket, setTicket] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("startStation", startStation);
    formData.append("endStation", endStation);
    formData.append("ticket", ticket);

    await API.post("/trips/log", formData);
    alert("Trip Logged!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Trip</h2>
      <input placeholder="Start Station" onChange={e => setStart(e.target.value)} />
      <input placeholder="End Station" onChange={e => setEnd(e.target.value)} />
      <input type="file" onChange={e => setTicket(e.target.files[0])} />
      <button type="submit">Submit</button>
    </form>
  );
}