
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

    // Delete users where name is 'Mohammed' to allow clean re-signup, 
    // or just delete the recently created ones. 
    // For safety, let's just log first.

    // Actually, let's delete the specific broken user to avoid confusion.
    // Assuming the broken user is the one with ID 8 or email 'mohammed@gmail.com'

    const sql = "DELETE FROM users WHERE email = 'mohammed@gmail.com'";

    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error deleting user:", err);
        } else {
            console.log(`Deleted ${result.affectedRows} users with email 'mohammed@gmail.com'`);
        }
        db.end();
    });
});
