
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

    db.query("DESCRIBE users", (err, result) => {
        if (err) {
            console.error("Error describing table:", err);
        } else {
            console.log("Table 'users' schema:", result);
        }
        db.end();
    });
});
