export async function VerificaLogin(usuario,senha) {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ usuario, senha }),
        });
        const dados = await response.json()
        return dados
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
    }
    
}