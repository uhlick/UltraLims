async function newClient(client) {
    try {
        return await fetch('http://localhost:3000/clients', {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    } catch (error) {
        alert(`Verifique se o servidor está online! ERRO: ${error.message}`)
    }
}

async function loadClients() {
    const url = 'http://localhost:3000/clients'
    try {
        const clientsJSON = await fetch(url);
        return await clientsJSON.json();
    } catch(error) {
        alert(`Verifique se o servidor está online! ERRO: ${error.message}`)
    }
}

async function loadClient(id) {
    const url = `http://localhost:3000/clients/${id}`

    try {
        const client = await fetch(url);
        return client.json();
    } catch(error) {
        alert(`Verifique se o servidor está online! ERRO: ${error.message}`)
    }
}

async function deleteClient(id) {
    const url = `http://localhost:3000/clients/${id}`
    try {
        return await fetch(url, {
            method: 'DELETE',
        })
    } catch(error) {
        alert(`Verifique se o servidor está online! ERRO: ${error.message}`)
    }
}

async function editClient(id, changedClient) {
    const url = `http://localhost:3000/clients/${id}`
    try {
        return await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' 
            },
            body: JSON.stringify(changedClient)
        })
    } catch(error) {
        alert(`Verifique se o servidor está online! ERRO: ${error.message}`)
    }
}

async function foundCep(cepInput) {
    const url = `https://viacep.com.br/ws/${cepInput}/json/`
    
    try {
        const address = await fetch(url);
            return address.json()
    } catch(error) {
        alert(`Verifique se o servidor está online! ERRO: ${error.message}`)
    }
}

export const functions = {
    newClient,
    loadClients,
    loadClient,
    deleteClient,
    editClient,
    foundCep,
}