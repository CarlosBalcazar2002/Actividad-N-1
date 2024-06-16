const { inquirerMenu, pausa, leerInput } = require('./ayudas/inquirer');
const { sumarNumeros, mostrarTabla, convertirMoneda } = require('./modelos/operaciones');

const main = async () => {
    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const numeros = await leerInput('Ingrese los números a sumar separados por comas: ');
                const suma = sumarNumeros(numeros);
                console.log(`La suma es: ${suma}`);
                break;

            case 2:
                const numeroTabla = await leerInput('Ingrese el número para la tabla de multiplicar: ');
                mostrarTabla(numeroTabla);
                break;

            case 3:
                const cantidad = await leerInput('Ingrese la cantidad en dólares: ');
                const bolivianos = convertirMoneda(cantidad);
                console.log(`${cantidad} dólares son ${bolivianos} bolivianos.`);
                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);
}

main();
