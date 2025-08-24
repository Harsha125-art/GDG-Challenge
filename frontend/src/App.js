// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import SecondHint from "./pages/SecondHint";
import FinalStage from "./pages/FinalStage";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ELA" element={<SecondHint />} />
        <Route path="/final-stage" element={<FinalStage />} />
      </Routes>
    </Router>
  );
}

export default App;
