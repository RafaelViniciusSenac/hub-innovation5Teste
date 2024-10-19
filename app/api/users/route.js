// import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

import { readJsonFile, writeJsonFile } from '../jsonUtils';

const filePath = path.join(process.cwd(), 'app', 'api', 'db', 'data.json');

export async function GET() {
    const data = await readJsonFile();
    return NextResponse.json(data);
}

export async function POST(req) {
    const newUser = await req.json();
    const data = await readJsonFile();
    
    newUser.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    data.push(newUser);

    await writeJsonFile(data);
    return NextResponse.json({ message: 'User added successfully', data: newUser });
}