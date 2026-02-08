import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "b6wxttxassl9oxsyp2cu-mysql.services.clever-cloud.com",
  user: process.env.DB_USER || "ul0ziut2erumjaw7",
  password: process.env.DB_PASSWORD || "0QKU983IBI6SpqRjGEkl",
  database: process.env.DB_NAME || "b6wxttxassl9oxsyp2cu",
  port: process.env.DB_PORT || 3306
});

// Test connection
db.connect(err => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }
  console.log("MySQL Connected");
});

// Signup API
app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ message: "User Registered Successfully" });
  });
});

// Login API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, rows) => {
    if (err) return res.status(500).json({ error: err });

    if (rows.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ message: "Wrong Password" });

    // Use JWT secret from env
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secretkey", { expiresIn: "1h" });
    res.json({ message: "Login Success", token, user: { id: user.id, name: user.name, email: user.email } });
  });
});

// Export for Vercel
export default app;

// Keep listen for local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
