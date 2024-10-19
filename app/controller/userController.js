export async function GetUserPasswords(id) {
    try {
        const response = await fetch('/api/rotas/users', {
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