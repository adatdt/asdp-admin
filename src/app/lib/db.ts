import pg from 'pg'
const { Pool} = pg

// DB_HOST= localhost;
// DB_PORT= '5432';
// DB_USER=postgres;
// DB_PASSWORD= root;
// DB_NAME= next_cms;

export const pool = new Pool({
  user: 'postgres',
      host: 'localhost',
      database: 'next_cms',
      password: 'root',
      // port: parseInt(process.env.DB_PORT),

      port: parseInt(process.env.DB_PORT || '5432'),
      // ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
      // connectionTimeoutMillis: 5000, // 5 seconds
      // idleTimeoutMillis: 30000,
      // max: 20,
})



export default pool;