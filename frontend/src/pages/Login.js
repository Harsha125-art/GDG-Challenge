import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import loginBackground from "../assets/login_background.png"; // ✅ Import image

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      // ✅ Save JWT token
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);

      // ✅ Navigate to /home
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Invalid login!");
    }
  };

  return (
    <div
      className="login-container glitch-bg"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login-box">
        <h2>🔐 Secure Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Access</button>
        </form>
      </div>
    </div>
  );
}
