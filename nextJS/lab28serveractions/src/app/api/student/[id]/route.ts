import connection from "@/lib/pssql"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    try {
        const { id } = await params;
        const data = await connection.query(
            'SELECT * FROM student WHERE roll = $1', [id]
        );
        return NextResponse.json(data.rows);
    } catch (err) {
        return NextResponse.json(err);
    }
}