function fatorial(n) {
  if (n < 0) throw new Error("Número não pode ser negativo");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache[chave] !== undefined) {
      console.log("Retornando do cache:", args);
      return cache[chave];
    }

    const resultado = fn(...args);
    cache[chave] = resultado;
    return resultado;
  };
}

const fatorialMemoizado = memoize(fatorial);

function calcularFatorialMemoizado() {
  const entrada = parseInt(document.getElementById("entradaMemoize").value);
  const resultadoDiv = document.getElementById("resultadoMemoize");

  try {
    const resultado = fatorialMemoizado(entrada);
    resultadoDiv.textContent = `Fatorial de ${entrada} é ${resultado}`;
  } catch (error) {
    resultadoDiv.textContent = error.message;
  }
}
