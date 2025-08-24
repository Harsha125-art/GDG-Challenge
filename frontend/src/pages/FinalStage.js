import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/finalStage.css";  // Import the CSS file

export default function FinalStage() {
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized! Login first.");
      navigate("/");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/final-stage",
        { key },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.error || "Error submitting key");
    }
  };

  return (
    <div className="final-stage">
      <div className="container">
        <h1>Final Stage 🔑</h1>
        <p>Enter the combined key from all previous hints:</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Enter final key"
          />
          <button type="submit">Submit Key</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
