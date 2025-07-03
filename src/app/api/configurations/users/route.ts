import { NextResponse } from 'next/server';
import { pool}from "../../../lib/db"



export async function GET() {
  try {
    // const res = await pool.query('SELECT full_name, id, address, status, phone_number, username  FROM master.t_users WHERE id = $1', [1])
    const res = await pool.query('SELECT full_name, id, address, status, phone_number, username  FROM master.t_users ')
    // const users = await getPool.select().from('users'); // Example: select all users
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
 
  }
}