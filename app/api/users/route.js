import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

const filePath = path.join(process.cwd(), 'app', 'api', 'db', 'data.json');

// Função para ler o conteúdo do JSON
function readJsonFile() {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
}

// Função para escrever no JSON
function writeJsonFile(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export async function GET() {
    const data = readJsonFile();
    return NextResponse.json(data);
}

export async function POST(req) {
    const newUser = await req.json();
    const data = readJsonFile();
    
    // Adicionando um novo ID automaticamente
    newUser.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    data.push(newUser);

    writeJsonFile(data);
    return NextResponse.json({ message: 'User added successfully', data: newUser });
}
