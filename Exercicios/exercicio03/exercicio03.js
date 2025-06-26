function separarPalavras() {
    const frase = document.getElementById('frase').value;
    const resultadoPalavra = document.getElementById('resultadoPalavra');

    const palavras = frase.split(" ");
    const palavrasUnicas = [];

    for (let i = 0; i < palavras.length; i++) {
        let palavraRepetida = false;

        for (let j = 0; j < palavrasUnicas.length; j++) {
            if (palavras[i] === palavrasUnicas[j]) {
                palavraRepetida = true;
                break;
            }
        }

        if (!palavraRepetida) {
            palavrasUnicas.push(palavras[i]);
        }
    }

    resultadoPalavra.textContent = `${palavrasUnicas.join(" ")}`;
}
