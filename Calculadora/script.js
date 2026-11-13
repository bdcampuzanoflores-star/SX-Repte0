function calcular() {

    let entrada = prompt("Introduce una operación:");

    if (entrada === null) {
        document.getElementById("resultado").innerHTML =
            "Error: Has cancelado la operación";
        return;
    }

    const patro = /^\s*([+-]?\d+(?:\.\d+)?)\s*([+\-*\/%])\s*([+-]?\d+(?:\.\d+)?)\s*$/;

    const parts = entrada.match(patro);

    if (parts === null) {
        document.getElementById("resultado").innerHTML =
            "Error: La expresión no es válida...";
        return;
    }

    let numero1 = parseFloat(parts[1]);
    let operador = parts[2];
    let numero2 = parseFloat(parts[3]);

    if (numero2 === 0 && operador === "/") {
        document.getElementById("resultado").innerHTML =
            "Error: No se puede dividir entre cero";
        return;
    }

    if (numero2 === 0 && operador === "%") {
        document.getElementById("resultado").innerHTML =
            "Error: No se puede calcular el módulo entre cero";
        return;
    }

    let resultado;

    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;

        case "-":
            resultado = numero1 - numero2;
            break;

        case "*":
            resultado = numero1 * numero2;
            break;

        case "/":
            resultado = numero1 / numero2;
            break;

        case "%":
            resultado = numero1 % numero2;
            break;
    }

    document.getElementById("resultado").innerHTML =
        "Resultado: " + resultado;
}
