const express = require('express');
const mysql = require('mysql2/promise');

const {
  MYSQL_HOST = 'localhost',
  MYSQL_PORT = 3306,
  MYSQL_USER = 'root',
  MYSQL_PASSWORD = '',
  MYSQL_DATABASE = ''
} = process.env;

const pool = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const app = express();

app.use(express.json());

// Simple endpoint to test connection
app.get('/ping', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS val');
    res.json({ status: 'ok', result: rows });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// Example: Query endpoint
app.post('/query', async (req, res) => {
  const { sql, values } = req.body;
  try {
    const [rows] = await pool.query(sql, values);
    res.json({ status: 'ok', result: rows });
  } catch (err) {
    res.status(400).json({ status: 'error', error: err.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`MCP-MySQL server running on port ${PORT}`);
});
