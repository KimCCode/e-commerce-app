import mysql from 'mysql2/promise';
require('dotenv').config();

export default async function connect() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: process.env.DB,
    password: process.env.PASS
  });
}