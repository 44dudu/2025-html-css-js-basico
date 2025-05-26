console.log("Olá, mundo!");

// função responsável para carregar o HTML
function carregarPagina(pagina) {
    fetch(pagina)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;

        })
        .catch(error => console.error('Erro ao carregar a página:', error));


}