let heigth = 50;
let age = 11;

/*tiene que cumplir con los dos requisitos para "poder subir", de lo contrario "no puede subir"*/

if (heigth > 52 && age > 10) {
    console.log("¡Súbete, chico!");
} else {
    console.log("Lo siento, chico. Tal vez el próximo año");
}

/*Si cumple con uno de los dos requisitos "puede subir", sino cumple con uno de los dos requisitos
"no puede subir"
*/

if (heigth > 52 || age > 10) {
    console.log("¡Súbete, chico!");
} else {
    console.log("Lo siento, chico. Tal vez el próximo año");
}
