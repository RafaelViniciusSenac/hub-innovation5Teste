

export async function GetAllUsers(){
    try {
        const response = await fetch('/api/users');
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
}

export async function GetUserPasswords(id) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        });
        const dados = await response.json()
        return dados.data.passwords;
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
    }
    
}