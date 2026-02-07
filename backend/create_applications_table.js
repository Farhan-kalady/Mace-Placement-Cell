
import mysql from 'mysql2';

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5260",
    database: "mace_placement"
});

db.connect(err => {
    if (err) {
        console.error("Connection failed:", err);
        process.exit(1);
    }
    console.log("Connected to MySQL");

    const sql = `
    CREATE TABLE IF NOT EXISTS applications (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        job_role VARCHAR(255) NOT NULL,
        status VARCHAR(50) DEFAULT 'Applied',
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating table:", err);
            process.exit(1);
        } else {
            console.log("Table 'applications' created successfully:", result);
        }
        db.end();
    });
});
