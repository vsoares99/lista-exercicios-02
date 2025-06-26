function ordenarProdutos() {
  const nomes = document.querySelectorAll(".nome");
  const precos = document.querySelectorAll(".preco");
  const resultado = document.getElementById("resultadoOrdenacao");

  let produtos = [];

  for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i].value.trim();
    const preco = parseFloat(precos[i].value);

    if (nome && !isNaN(preco)) {
      produtos.push({ nome, preco });
    }
  }

  if (produtos.length === 0) {
    resultado.textContent = "Preencha ao menos um produto válido.";
    return;
  }

  const nomesOrdenados = produtos
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);

  resultado.innerHTML = `<strong>Produtos ordenados por preço:</strong><br>${nomesOrdenados.join(", ")}`;
}