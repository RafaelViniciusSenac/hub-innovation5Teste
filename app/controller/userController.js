

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

export async function AddUsers(name,password) {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password }),
        });
        return response;
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
    }
    
}