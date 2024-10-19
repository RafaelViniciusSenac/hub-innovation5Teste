"use client"
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import UserData from './userData';


export default function Home() {
    const searchParams = useSearchParams();
    const idUsuario = Number(searchParams.get('id'));

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Bem-vindo</h1>
                <button className="bg-blue-600 text-white w-56 py-1 rounded-lg mb-6">Nova Senha</button>
            </div>

            <Suspense fallback={<p>Carregando...</p>}>
                {idUsuario ? <UserData id={idUsuario} /> : <p>Nenhum ID fornecido.</p>}
            </Suspense>
        </div>
    );
}
