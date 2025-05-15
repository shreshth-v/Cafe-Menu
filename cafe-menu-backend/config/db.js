import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection(process.env.RAILWAY_DB_URL);

const connectDB = () => {
  db.connect((err) => {
    if (err) {
      console.error("Database connection failed:", err.message);
      process.exit(1);
    }
    console.log("Connected to Railway MySQL database.");
  });
};

export { db, connectDB };
