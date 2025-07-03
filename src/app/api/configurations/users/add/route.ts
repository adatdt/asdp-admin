import { NextResponse, NextRequest } from 'next/server';
import { pool}from "../../../../lib/db"



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

// import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json(); // Parse the request body
    // Process the received data (e.g., save to database)
    // Example: Create a new todo item
    const newTodo = { id: Date.now().toString(), ...body };
    // Simulate saving to a database
    console.log("New todo created:", newTodo);
    return NextResponse.json(newTodo, { status: 201 }); // 201 Created
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: "Failed to create todo" }, { status: 500 });
  }
};