/* Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1”
sugerencias:
Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo HTML y enlazar tu script.
Piensa en las posibles combinaciones de números, para ayudarte puedes desarrollar un algoritmo y el pseudocódigo. */

const prompt = require('prompt-sync')();

// Convertimos las entradas a Number() desde la lectura para poder comparar correctamente
const num1 = Number(prompt("Ingresa un número: "));
const num2 = Number(prompt("Ingresa un número: "));
const num3 = Number(prompt("Ingresa un número: "));

let array = [];

if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales");
} else {
    if (num1 >= num2 && num1 >= num3) {
        array[0] = num1;
        if (num2 >= num3) {
            array[1] = num2;
            array[2] = num3;
        } else {
            array[1] = num3;
            array[2] = num2;
        }
    }
    else if (num2 >= num1 && num2 >= num3) {
        array[0] = num2;
        if (num1 >= num3) {
            array[1] = num1;
            array[2] = num3;
        } else {
            array[1] = num3;
            array[2] = num1;
        }
    } 
    else if (num3 >= num1 && num3 >= num2) {
        array[0] = num3;
        if (num1 >= num2) {
            array[1] = num1;
            array[2] = num2;
        } else {
            array[1] = num2;
            array[2] = num1;
        }
    }
    
    console.log("Mayor a menor: " + array[0] + ", " + array[1] + ", " + array[2]);
    console.log("Menor a mayor: " + array[2] + ", " + array[1] + ", " + array[0]);
}