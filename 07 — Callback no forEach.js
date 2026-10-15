const produtos = ["Teclado", "Mouse", "Monitor", "Gabinete", "Fone de Ouvido"];

function exibirProduto(produto) {
    console.log("Produto em estoque:", produto);
}

produtos.forEach(exibirProduto);