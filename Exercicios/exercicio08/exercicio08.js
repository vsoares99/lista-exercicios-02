const vendas = [];

function adicionarVenda() {
  const clienteInput = document.getElementById('cliente');
  const totalInput = document.getElementById('total');
  const listaVendas = document.getElementById('listaVendas');

  const cliente = clienteInput.value.trim();
  const total = parseFloat(totalInput.value);

  if (!cliente) {
    alert('Digite o nome do cliente.');
    return;
  }
  if (isNaN(total) || total <= 0) {
    alert('Digite um valor válido para total.');
    return;
  }

  vendas.push({ cliente, total });
  
  listaVendas.textContent = vendas.map(v => `${v.cliente}: R$ ${v.total.toFixed(2)}`).join(' | ');

  clienteInput.value = '';
  totalInput.value = '';
  clienteInput.focus();
}

function processarVendas() {
  const resultado = document.getElementById('resultadoAgrupamento');

  if (vendas.length === 0) {
    resultado.textContent = 'Nenhuma venda adicionada.';
    return;
  }

  const agrupamento = vendas.reduce((acc, venda) => {
    if (!acc[venda.cliente]) {
      acc[venda.cliente] = 0;
    }
    acc[venda.cliente] += venda.total;
    return acc;
  }, {});

  resultado.innerHTML = '<h3>Total por Cliente:</h3>';
  resultado.innerHTML += Object.entries(agrupamento)
    .map(([cliente, total]) => `<p>${cliente}: R$ ${total.toFixed(2)}</p>`)
    .join('');
}
