
function countDooku(nombre, hora) {

    let P = ''; //Variable P=Periodo de tiempo (Am, Pm)
    let Ms = ''; //Variable Ms = Mensaje de buenos días, buenas tarde o noches

    if (hora < 12) { //Si es menor a 12, se motrara la hora como "Am" y el mensaje de buenos días
        P = "Am ";
        Ms = ' BUENOS DÍAS! ';
    } else if (hora < 18) { //Si es menor a 18, se motrara la hora como "Pm" y el mensaje de buenas tardes
        P = "Pm ";
        Ms = ' BUENAS TARDES! ';
    } else {  //Si es mayor a 18, se motrara la hora como "Pm" y el mensaje de buenas noches
        P = "Pm ";
        Ms = ' BUENAS NOCHES! ';
    }
    console.log(" La hora es: " + hora + P + Ms + nombre + " ¡Voy por ti, Dooku!");
}
countDooku('Carlos', 11);

//Nota: Use el formato de 24 horas.




