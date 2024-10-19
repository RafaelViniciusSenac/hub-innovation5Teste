"use client"
import { GetUserPasswords } from '@/app/controller/userController';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
export default function Home() {
    const searchParams = useSearchParams();
    const idUsuario = Number(searchParams.get('id'));


    async function GetUserData() {
        const dados = await GetUserPasswords(idUsuario);
        
    }

    useEffect(() => {
        GetUserData()
    }, [])



    return (
        <>
            <div className="max-w-7xl mx-auto">


                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Bem-vindo, Admin</h1>
                    <button className="bg-blue-600 text-white w-56 py-1 rounded-lg mb-6">Nova Senha</button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Título do Card</h2>
                        <p className="text-gray-600 mb-1">Usuário: usuario123</p>
                        <p className="text-gray-600 mb-4">Senha: ********</p>
                        <div className="flex gap-2 justify-end">
                            <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                                Editar
                            </button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded ">
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
