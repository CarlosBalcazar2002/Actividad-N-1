const sumarNumeros = (numeros) => {
    const numArray = numeros.split(',').map(num => parseFloat(num.trim()));
    return numArray.reduce((acc, curr) => acc + curr, 0);
}

const mostrarTabla = (numero) => {
    const num = parseInt(numero);
    console.log(`Tabla de multiplicar del ${num}`.green);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

const convertirMoneda = (cantidad) => {
    const dolares = parseFloat(cantidad);
    const tasaCambio = 6.96; // Tasa de cambio de ejemplo
    return (dolares * tasaCambio).toFixed(2);
}

module.exports = {
    sumarNumeros,
    mostrarTabla,
    convertirMoneda
}
