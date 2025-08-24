import React from "react";

function GlitchText({ text }) {
  return (
    <h1 className="glitch" data-text={text}>
      {text}
    </h1>
  );
}

export default GlitchText;
