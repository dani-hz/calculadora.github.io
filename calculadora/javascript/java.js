alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: Sumar, 2: Restar, 3: Multiplicar, 4: Dividir");

if (operacion == 1) {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    if (num1 > num2) {
        let resultado = num1 + num2;
        alert("Resultado: " + resultado);
    } else {
        alert("El primer numero debe ser mayor que el segundo");
    }
} else if (operacion == 2) {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    if (num1 > num2) {
        let resultado = num1 - num2;
        alert("Resultado: " + resultado);
    } else {
        alert("El primer numero debe ser mayor que el segundo");
    }
} else if (operacion == 3) {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    if (num1 > num2) {
        let resultado = num1 * num2;
        alert("Resultado: " + resultado);
    } else {
        alert("El primer numero debe ser mayor que el segundo");
    }
} else if (operacion == 4) {
    let num1 = parseInt(prompt("Ingresa el primer numero"));
    let num2 = parseInt(prompt("Ingresa el segundo numero"));
    if (num1 > num2) {
        let resultado = num1 / num2;
        alert("Resultado: " + resultado);
    } else {
        alert("El primer numero debe ser mayor que el segundo");
    }
} else {
    alert("Opcion invalida");
}