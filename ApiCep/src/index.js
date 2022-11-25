import { functions } from "./fetch.js";
import { utilities } from "./utils.js";

const modalClient = document.querySelector('#modal');
const modalEdit = document.querySelector('#modalEdit');
const form = document.forms.namedItem('form');
const formEdit = document.forms.namedItem('formEdit');
const tbody = document.querySelector('#tbody')
const table_xls_modal = document.querySelector('#table_xls table tbody')
const table_xls = document.querySelector('#table_xls table')

let idClient = 0

functions.loadClients().then(clients => {
    clients.forEach((client) => {
        tbody.innerHTML += utilities.templateClients(client, client.id)
    })
})

window.deleteClientid = (id) => {
    if(confirm('Deseja mesmo deletar este cliente permanentemenete?')) {
        functions.deleteClient(id)
    }
}
window.editClientid = (id) => {
    modalEdit.showModal();
    functions.loadClient(id).then(client => utilities.formClientEdit(client))
    idClient = id
}

window.editClientSubmit = () => {
    if(confirm('Deseja mesmo alterar os dados desse cliente permanentemente?')) {
        const changedClient = new utilities.Client(formEdit);
        functions.editClient(idClient, changedClient)
    }
}

window.closeModalClientEdit = () => {
    modalEdit.close();
}

window.newClientModal = () => {
    modalClient.showModal();
}

window.closeModalClient = () => {
    modalClient.close();
}

form.addEventListener(('submit'), (e) => {
    e.preventDefault()
    
    const client = new utilities.Client(form)
    functions.newClient(client)
})

window.downloadXls = () => {
    table_xls_modal.innerHTML = '' 
    functions.loadClients().then(client => {
        client.forEach((client) => {
            table_xls_modal.innerHTML += utilities.templateTableXls(client)
        })
        const a = document.createElement('a');

        const html_table = table_xls.outerHTML;
        const type_data = 'data:application/vnd.ms-excel charset=UTF-8';
        
        a.href = type_data + ', ' + html_table;
        a.download = 'clientlist.xls';
        a.click();
    })
}

window.foundCepInput = () => {
    const cepInput = document.querySelector('#inputCep').value
    functions.foundCep(cepInput).then(cep => utilities.formCep(cep))
}


window.foundCepInputEdit = () => {
    const cepInput = document.querySelector('#formCepEdit #inputCep').value
    functions.foundCep(cepInput).then(cep => utilities.formCepEdit(cep))
}