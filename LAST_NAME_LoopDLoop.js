/*¿Cómo sabemos que necesitamos un bucle aquí?
Porque cada 3 kilometros se repite la misma acción*/

/*¿Cuál es el punto de partida del bucle?
El punto de partida del bucle es 0, porque es donde inicia el corredor*/

/*¿Cuándo debe detenerse el bucle?
Cuando el corredor llegue al kilometro 10*/

/*¿Cómo sabrá parar?
Con la condición dentro del bucle, que tiene que ser menor a 10*/

/*¿Cuál es el incremento para cada iteración del bucle?
El incremento es 3, porque cada 3 kilometros se entrega un caramelo*/

/*¿Qué variables necesitamos?
K = kilometros
C = Caramelos*/

let C = 0;


for (let k = 0; k < 9; k = k + 3) {

    C = C + 1;


}
console.log("El corredor recibió " + C + " Caramelos.");

/*Crea un nuevo bucle en el que el corredor solo reciba un caramelo cada 
3 kilómetros Y si se desplaza a más de 9 kilómetros por hora.*/

let V = 11;
let Ca = 0;

if (V > 9) {
    for (let J = 0; J < 9; J = J + 3) {
        Ca = Ca + 1;
    }
    console.log("El corredor se desplazo a: " + V + "Km/h y recibió " + Ca + " Caramelos");
} else {
    console.log("El corredor no recibió caramelos");
}



