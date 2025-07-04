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
  
  const body = await req.json(); // Parse the request body
  try {
    // Process the received data (e.g., save to database)
    // Example: Create a new todo item
    
    await pool.query('BEGIN'); // Start transaction
     await pool.query('insert into master.t_users (full_name, address, status, phone_number, username, password, created_on, created_by) value($1, $2, $3, $4, $5, $6 ,$7, $8)  returning id ',[body.name, body.address, 1, body.phone, body.username, body.password,new Date(), "admin"])
    await pool.query('COMMIT'); // Commit transaction

    
    const newTodo = { id: Date.now().toString(), data: body, status:1, message:"Success"  };

    // Simulate saving to a database
    console.log("New todo created:", newTodo);
    return NextResponse.json(newTodo, { status: 201 }); // 201 Created
  } catch (error) {
    await pool.query('ROLLBACK'); // Rollback transaction on error
    console.error('Error fetching users:', error);
    const errorRest = { data: body, status:1, message:error  };
    return NextResponse.json({ errorRest }, { status: 500 });
  }
};