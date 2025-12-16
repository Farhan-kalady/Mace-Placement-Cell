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
  host: "localhost",
  user: "root",
  password: "",
  database: "mace_placement"
});

// Test connection
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Signup API
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ message: "User Registered Successfully" });
  });
});

// Login API
app.post("/login", (req, res) => {
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

    res.json({ message: "Login Success", user });
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
