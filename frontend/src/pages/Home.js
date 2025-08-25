// src/pages/Home.js
import React from "react";
import "../styles/glitch.css";
import "../styles/theme.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      
      <div className="cyber-container">
        {/* Neon Grid Background */}
        <div className="grid-background"></div>

        <div className="content">
          <h1 className="glitch" data-text="HUNT SECRET KEY">
            HUNT SECRET KEY
          </h1>

          <p className="access-text">
          Access granted… yet <span class="coded">truth hides in plain sight</span>.  
Not all secrets live in the <span class="coded">centre</span>. — sometimes the edges whisper louder.

          </p>
        </div>

        {/* Hidden part of the secret */}
        <div>
          <span className="hidden-key" style={{ fontSize: "18px", fontWeight: "bold" }}>
           secret key(part1)- Xa1
            <br />
            <span style={{ fontSize: "10px", opacity: 0.6 }}>
              – try inspecting page for fun
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
