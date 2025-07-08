import { NextResponse, NextRequest } from 'next/server';
import { pool}from "../../../lib/db"


export async function GET() {
  try {
    
    const res = await pool.query('SELECT full_name, id, address, status, phone_number, username  FROM master.t_users ')
    return NextResponse.json(res.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
 
  }
}

export async function POST(req: NextRequest) {
  
    const body = await req.json(); // Parse the request body
    const startData = body.startData
    const showData = body.showData
    const qry =`SELECT full_name, id, address, status, phone_number, username  
                        FROM master.t_users
                        order by id asc 
                        limit $1 offset $2
                        `
    try {
        const res = await pool.query(qry,[showData,startData])
        return NextResponse.json(res.rows);
    }
    catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }

};