import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/pssql";
export async function GET(req: NextRequest) {
    try {
        const data = await pool.query("select * from student");

        return NextResponse.json(data.rows);
    } catch (err) {
        return NextResponse.json(err);
    }
}
