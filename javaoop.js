function leer() {
    // Referencia por pseudoclase
    var nom = document.forms["formulario"].elements["user"].value;
    // Referencia por id
    var clave = document.getElementById("pass").value;

    // Referencia por Etiqueta
    var carr = document.getElementById("carrera").value;
    // Referencia por Name
    var gen = document.getElementsByName("genero");
    var g;
    for (var i=0; i < gen.length; i++) {
        if (gen[i].checked) {
            g = gen[i].value;
        }
    }
    var p = document.getElementById("privacidad").checked;

    document.getElementById("datos").innerHTML=
        "Tu nombre es: " + nom +
        "<br>Tu password es: " + clave +
        "<br>Tu carrera es: " + carr +
        "<br>Tu genero es: " + g +
        "<br>Aceptacion de acuerdos: " +p;
}
