// import fs from 'fs';
import { NextResponse } from 'next/server';

import { readJsonFile } from '../../jsonUtils';
// export async function GET() {
//     const data = await readJsonFile();
//     return NextResponse.json(data);
// }

export async function POST(req) {
    const request = await req.json();
    const data = await readJsonFile();
    const usuarioAlvo = data.find(u => u.id === request.id)
    return NextResponse.json({ message: 'Sucesso', data: usuarioAlvo });
}