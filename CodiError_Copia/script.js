function errorCodi() {

    try {
        throw new Error("Error provocado por el código");

    } catch (error) {
        console.error("Error: " + error.message);

        document.getElementById("missatge").innerHTML =
            "Error: Se ha producido un error en el código.";
    }
}


function comprovarOpcio() {

    try {
        let opcion = document.getElementById("opcio").value;

        if (opcion != 1 && opcion != 2) {
            throw new Error("Opción incorrecta");
        }

        document.getElementById("missatge").innerHTML =
            "Has seleccionado una opción correcta.";

    } catch (error) {
        console.error("Error: " + error.message);

        document.getElementById("missatge").innerHTML =
            "Error: La opción seleccionada no es válida.";
    }
}
