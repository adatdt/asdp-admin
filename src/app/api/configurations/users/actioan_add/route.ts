import { NextResponse, NextRequest } from 'next/server';
import { pool}from "../../../../lib/db"
import { hashPassword}from "../../../../lib/hash"


    export async function POST(req: NextRequest) {

        const body = await req.json(); // Parse the request body
        const pass = await hashPassword(body.password)
        try {
        const data = [
            body.name, 
            body.address, 
            1, 
            body.phone, 
            body.username,
            pass, 
            'admin', 
            new Date()]

            console.log(data)
        await pool.query('BEGIN'); // Start transaction
            await pool.query('insert into master.t_users (full_name, address, status, phone_number, username, password,created_by, created_on) values ($1, $2, $3, $4, $5, $6 ,$7, $8)  returning id ',data)
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