import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "supersecret123";

// Combined final key (PART1 + PART2)
const FINAL_KEY = "Xa15Zs";

// 🔑 Middleware to verify JWT
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(403);

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// ==================== ROUTES ==================== //

// ✅ Login Route (returns token + first hint)
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Simple authentication
  if (username === "player" && password === "hunt123") {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

    return res.json({
      token,
      secretHint: "PART1-XYZ", // first part of key for frontend
    });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

// 🔒 Secret Grid Route (returns part 2 of key)
app.get("/api/secret", verifyToken, (req, res) => {
  res.json({ secretHint: "PART2-N0E" });
});

// 🔒 ELA Puzzle Page (direct access allowed if logged in)
app.get("/api/ELA", verifyToken, (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body { background: black; color: lime; font-family: monospace; text-align:center; padding:40px; }
          .coded { color: red; font-weight: bold; }
          h1 { font-size: 2rem; }
        </style>
      </head>
      <body>
        <h1>✅ Access Granted</h1>
        <p>The screen color hides secrets. <span class="coded">Look carefully...</span></p>
        <p class="hint">Part2-5Zs</p>
      </body>
    </html>
  `);
});

// 🔒 Final Stage Route (submit combined key)
app.post("/api/final-stage", verifyToken, (req, res) => {
  const { key } = req.body;

  if (!key) return res.status(400).json({ error: "Key required" });

  if (key === FINAL_KEY) {
    return res.json({ message: "✅ Congratulations! You've unlocked the final stage!" });
  } else {
    return res.status(401).json({ error: "❌ Incorrect key. Try again." });
  }
});

// 🚀 Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
