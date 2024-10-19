import { GetUserPasswords } from "@/app/controller/userController";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";


export default function UserData() {
    const [userData, setUserData] = useState([]);
    const searchParams = useSearchParams();
    const idUsuario = Number(searchParams.get('id'));

    useEffect(() => {
        async function GetUserData() {
            const dados = await GetUserPasswords(idUsuario);
            console.log(dados);

            setUserData(dados);
        }

        if (id) {
            GetUserData();
        }
    }, [id]);

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userData.map((item, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">{item.titulo}</h2>
                    <p className="text-gray-600 mb-1">Usuário: {item.usuario}</p>
                    <p className="text-gray-600 mb-4">Senha: {item.senha}</p>
                    <div className="flex gap-2 justify-end">
                        <button className="bg-red-500 text-white px-4 py-2 rounded">
                            Excluir
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
