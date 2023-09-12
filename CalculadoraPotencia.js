class CalculoPotencia {
    constructor(numeroBase, indice) {
        this.numeroBase = numeroBase;
        this.indice = indice;
        this.resultFinal = Math.pow(numeroBase, indice);
    }

    obtenerPotencia() {
        return this.resultFinal;
    }

    mostrarEnWeb() {
        document.getElementById('resultadoFinal').innerHTML = 'Resultado: ' + this.resultFinal;
    }
}

function ejecutarCalculoPotencia() {
    let numeroBase = parseFloat(document.getElementById('valorBase').value);
    let indice = parseFloat(document.getElementById('valorExponente').value);
    if (isNaN(numeroBase) || isNaN(indice)) {
        alert('Por favor, introduce valores válidos.');
        return;
    }
    let calculoPotencia = new CalculoPotencia(numeroBase, indice);
    calculoPotencia.mostrarEnWeb();
}
