import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/theme.css";
import "../styles/glitch.css";

export default function SecondHint() {
  const [secretKey, setSecretKey] = useState(null);
  const [backendContent, setBackendContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized! Please login first.");
      navigate("/");
      return;
    }

    // Fetch secret hint
    axios
      .get("http://localhost:5000/api/ELA", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.secretHint) setSecretKey(res.data.secretHint);
      })
      .catch(() => alert("Error fetching secret key"));

    // Fetch backend protected content
    axios
      .get("http://localhost:5000/api/ELA", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBackendContent(res.data))
      .catch(() => setBackendContent("<h2>Access Denied ❌</h2>"));
  }, [navigate]);

  return (
    <div className="second-page">
      {/* Header */}
      <div className="terminal-text text-center mb-6">
  <h1 className="text-3xl font-bold glitch">Welcome to the next step...</h1>
  <p className="mt-2 text-lg cyber-sub">
    Nothing is what it seems — even buttons may wear cloaks. 🕵️
  </p>

</div>


      {/* Secret key + button */}
      <div className="flex flex-col items-center">
        {/* Blurred until hover */}
        <p className="secret-key">{secretKey || "•••"}</p>

        {/* Hidden until hover on secret-key */}
        <button
          onClick={() => navigate("/final-stage")}
          className="hidden-button"
        >
          Proceed to Final Stage →
        </button>
      </div>

      {/* Backend protected content */}
      <div
        className="mt-10 p-4 border rounded bg-black text-green-400 font-mono"
        dangerouslySetInnerHTML={{ __html: backendContent }}
      />
    </div>
  );
}
