function calcularFatorial(n) {
  if (n < 0) {
    throw new Error("O fatorial não é definido para números negativos.");
  }
  if (n === 0) {
    return 1;
  }
  return n * calcularFatorial(n - 1);
}

function fatorial() {
  const input = document.getElementById("numero").value;
  const resultado = document.getElementById("resultadoFatorial");

  try {
    const numero = parseInt(input);
    if (isNaN(numero)) {
      resultado.innerText = "Por favor, digite um número válido.";
      return;
    }
    const f = calcularFatorial(numero);
    resultado.innerText = `O fatorial de ${numero} é ${f}.`;
  } catch (erro) {
    resultado.innerText = erro.message;
  }
}