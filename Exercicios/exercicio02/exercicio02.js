function adivinharNumero(){
    let numeroAleatorio = parseInt(Math.random() * 100 + 1);
    let tentativas = 0;
    let chute = null;
    
    while(chute != numeroAleatorio){
        const entrada = prompt("Adivinhe um número entre 1 e 100:");

        if (entrada === null) {
            alert("Jogo cancelado pelo usuário.");
            return;
        }

        chute = parseInt(entrada);
        tentativas++;

        if (isNaN(chute)) {
            alert("Digite um número válido!");
            continue;
        }

        if (chute > numeroAleatorio) {
            alert(`${chute} está incorreto. O número aleatório é menor!`);
        } else if (chute < numeroAleatorio) {
            alert(`${chute} está incorreto. O número aleatório é maior!`);
        }
    }
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Você acertou com ${tentativas} ${palavraTentativa}. O número aleatório era ${chute}!`);
}