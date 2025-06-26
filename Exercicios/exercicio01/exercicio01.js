function ehAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function ehDataValida(dia, mes, ano) {
    if (ano < 1000 || ano > 2025) return false;
    if (mes < 1 || mes > 12) return false;
    if (dia < 1) return false;

    const diasPorMes = [31, (ehAnoBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return dia <= diasPorMes[mes - 1];
}

function verificarData() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    const ano = parseInt(document.getElementById('ano').value);
    const resultado = document.getElementById('resultado');

    const validarBissexto = ehAnoBissexto(ano) ? `${ano} é bissexto.` : `${ano} não é bissexto.`;

    if (ehDataValida(dia, mes, ano)) {
        resultado.textContent = `${dia}/${mes}/${ano} é uma data válida.\n ${validarBissexto}`;
    } else {
        resultado.textContent = `${dia}/${mes}/${ano} é uma data inválida.\n ${validarBissexto}`; 
    }
}
