function debounce(fn, delay){
    let timeoutId;

    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function mostrarTextoDigitado(event){
    const resultado = document.getElementById("resultadoDebounce");
    resultado.textContent = `Você digitou: ${event.target.value}`;
}

const debounceDigitacao = debounce(mostrarTextoDigitado, 1000);

document.getElementById("entradaDebounce").addEventListener("input", debounceDigitacao);