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
  password: "5260",
  database: "mace_placement"
});

// Test connection
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Signup API
app.post("/signup", async (req, res) => {
  const { name, email, password, cgpa } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO users (name, email, password, cgpa) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, hashedPassword, cgpa || 0.0], (err, result) => {
    if (err) return res.status(500).json({ message: "Error registering user: " + err.sqlMessage });

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

    const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Login Success", token, user: { id: user.id, name: user.name, email: user.email, cgpa: user.cgpa } });
  });
});

// Apply for a job
app.post("/apply", (req, res) => {
  const { userId, company, role } = req.body;
  const sql = "INSERT INTO applications (user_id, company_name, job_role) VALUES (?, ?, ?)";
  db.query(sql, [userId, company, role], (err, result) => {
    if (err) return res.status(500).json({ message: "Error applying: " + err.sqlMessage });
    res.json({ message: "Applied Successfully" });
  });
});

// Get user applications
app.get("/applications/:userId", (req, res) => {
  const sql = "SELECT * FROM applications WHERE user_id = ?";
  db.query(sql, [req.params.userId], (err, rows) => {
    if (err) return res.status(500).json({ message: "Error fetching applications" });
    res.json(rows);
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
