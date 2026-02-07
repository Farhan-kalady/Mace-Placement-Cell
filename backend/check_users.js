
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

    db.query("SELECT id, name, email, password, cgpa FROM users", (err, rows) => {
        if (err) {
            console.error("Error fetching users:", err);
        } else {
            console.log("Users in DB:");
            rows.forEach(user => {
                console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Password (hash): ${user.password.substring(0, 10)}...`);
            });
        }
        db.end();
    });
});
