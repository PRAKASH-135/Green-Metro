import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LogTrip from "./pages/LogTrip";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Dashboard | </Link>
        <Link to="/login">Login | </Link>
        <Link to="/register">Register | </Link>
        <Link to="/logtrip">Log Trip | </Link>
        <Link to="/wallet">Wallet</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logtrip" element={<LogTrip />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default App;