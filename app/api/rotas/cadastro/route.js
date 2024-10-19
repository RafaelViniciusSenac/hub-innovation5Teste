import { NextResponse } from 'next/server';
import { readJsonFile, writeJsonFile } from '../../jsonUtils';


export async function POST(req) {
    const newUser = await req.json();
    const data = await readJsonFile();
    const usuarioAlvo = data.find(u => u.id === newUser.id)
    console.log(usuarioAlvo)
    if (usuarioAlvo) {
        usuarioAlvo.passwords.push({
            titulo: newUser.titulo,
            usuario: newUser.usuario,
            senha: newUser.senha
        });

        await writeJsonFile(data);
        return NextResponse.json({ message: 'Cadastrado com sucesso!', status: true });
    }
}