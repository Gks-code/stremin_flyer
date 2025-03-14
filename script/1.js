document.querySelector('.barra-pesquisa form').addEventListener('submit', function(event) {
    event.preventDefault();
    let query = event.target.search.value.toLowerCase();
    let produtos = document.querySelectorAll('.produto');

    produtos.forEach(function(produto) {
        let nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
        if (nomeProduto.includes(query)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
});
