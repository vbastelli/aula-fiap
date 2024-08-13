function salvarItem() {
    const item = document.getElementById('item').value;

    if (item !== '') {

        let lista = JSON.parse(localStorage.getItem('lista'))|| [];

        lista.push(item);

        localStorage.setItem('lista', JSON.stringify(lista));

        document.getElementById('item').value = '';
    }
}

function visualizarLista () {
    const lista = JSON.parse(localStorage.getItem('lista'));

    const listaHtml = document.getElementById('lista');

    listaHtml.innerHTML = '';

    lista.forEach(item => {
        
        const li = document.createElement('li');

        li.textContent = item;

        listaHtml.appendChild(li);
    })
}

function limparLista() {

    localStorage.removeItem('lista');

    document.getElementById('lista').innerHTML = '';
}