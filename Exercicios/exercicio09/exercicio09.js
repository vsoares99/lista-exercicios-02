function paresParaObjeto() {
  const input = document.getElementById('inputTexto').value.trim();
  const resultado = document.getElementById('resultado');

  if (!input) {
    resultado.textContent = "Por favor, insira os pares no formato correto.";
    return;
  }

  const obj = {};

  const pares = input.split(',');

  for (let par of pares) {
    const [chave, valor] = par.split(':').map(item => item.trim());

    if (!chave || valor === undefined) {
      resultado.textContent = "Formato inválido em um dos pares.";
      return;
    }

    obj[chave] = valor;
  }

  resultado.textContent = JSON.stringify(obj, null, 2);
}

function objetoParaPares() {
  const input = document.getElementById('inputTexto').value.trim();
  const resultado = document.getElementById('resultado');

  if (!input) {
    resultado.textContent = "Por favor, insira um objeto JSON válido.";
    return;
  }

  let obj;
  try {
    obj = JSON.parse(input);
  } catch {
    resultado.textContent = "Entrada inválida. Insira um objeto JSON válido.";
    return;
  }

  const pares = Object.entries(obj).map(([k,v]) => `${k}: ${v}`).join(', ');

  resultado.textContent = pares;
}
