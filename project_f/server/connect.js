import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root', // 改為 root 使用者
  password: '', // 如果 root 沒有密碼，留空
  database: 'restful',
});

export default connection;
