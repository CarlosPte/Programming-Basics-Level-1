/*1. Escribe un bucle for que recorra 
un arreglo de números e imprima cada número.
*/

var arr1 = [8, 6, 7, 5, 3, 0, 9];

for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

/*2. Escribe un ciclo for que recorra un arreglo 
de números e imprima la suma del número y el índice del número 
en el arreglo.
*/

var arr2 = [4, 7, 13, 13, 19, 37, -2];
var sum = 0;

for (var k = 0; k < arr2.length; k++) {
    sum = arr2[k] + k;
    console.log("La suma de: " + arr2[k] + " + " + k + " es: " + sum);
    console.log("El índice de " + arr2[k] + " dentro del array es: " + k)

}

/*3. Escribe un bucle for que recorra un arreglo de números 
e imprima SOLO los números mayores a 5.
*/

var arr3 = [6, 2, 12, 14, -24, 5, 0];

for (var j = 0; j < arr3.length; j++) {
    if (arr3[j] > 5) {
        console.log(arr3[j]);
    }
}

/*
BONUS NINJA: modifica tu solución para el #3 para que cualquier número en 
el arreglo que NO sea mayor que 5 se reemplace con una cadena de 
"No hay dados". Esta cadena NO debe imprimirse.
*/

for (var T = 0; T < arr3.length; T++) {
    if (arr3[T] > 5) {
        console.log(arr3[T]);
    } else {
        arr3[T] = "No hay dados";
    }

}