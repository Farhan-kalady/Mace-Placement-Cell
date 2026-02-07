
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

    const sql = "ALTER TABLE users ADD COLUMN cgpa DECIMAL(4,2) DEFAULT 0.00";

    db.query(sql, (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_FIELDNAME') {
                console.log("Column 'cgpa' already exists.");
            } else {
                console.error("Error altering table:", err);
                process.exit(1);
            }
        } else {
            console.log("Table 'users' altered successfully:", result);
        }
        db.end();
    });
});
