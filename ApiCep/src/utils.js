class Client {
    constructor(form) {
        this.name = form.inputName.value;
        this.email = form.inputEmail.value;
        this.cep = form.inputCep.value;
        this.logradouro = form.inputlogradouro.value;
        this.district = form.inputDistrict.value;
        this.city = form.inputCity.value;
        this.uf = form.inputUF.value;
    }
}

function formClientEdit(client) {
    formEdit.inputName.value = client.name;
    formEdit.inputEmail.value = client.email;
    formEdit.inputCep.value = client.cep;
    formEdit.inputlogradouro.value = client.logradouro;
    formEdit.inputDistrict.value = client.district;
    formEdit.inputCity.value = client.city;
    formEdit.inputUF.value = client.uf;
}

function formCep(cep) {
    form.inputCity.value = cep.localidade
    form.inputDistrict.value = cep.bairro
    form.inputlogradouro.value = cep.logradouro
    form.inputUF.value = cep.uf
}

function formCepEdit(cep) {
    formEdit.inputCity.value = cep.localidade
    formEdit.inputDistrict.value = cep.bairro
    formEdit.inputlogradouro.value = cep.logradouro
    formEdit.inputUF.value = cep.uf
}

function templateClients(client, id) {
    return `
    <tr>
        <th scope="row">${client.id}</th>
        <td>${client.name}</td>
        <td>${client.email}</td>
        <td>${client.cep}</td>
        <td>${client.logradouro}</td>
        <td>${client.district}</td>
        <td>${client.city}</td>
        <td>${client.uf}</td>
        <td>
            <div id="actions_list">
                <i onclick="deleteClientid(${id})" class="bi bi-trash"></i>
                <i onclick="editClientid(${id})" class="bi bi-pencil-square"></i>
            </div>
        </td>
    </tr>
    `
}

function templateTableXls(client) {
    return `
      <tr>
      <td>${client.name}</td>
      <td>${client.email}</td>
      <td>${client.cep}</td>
      <td>${client.logradouro}</td>
      <td>${client.district}</td>
      <td>${client.city}</td>
      <td>${client.uf}</td>
      </tr>
    `
}

export const utilities = {
    Client,
    templateClients,
    formClientEdit,
    templateTableXls,
    formCep,
    formCepEdit,
}