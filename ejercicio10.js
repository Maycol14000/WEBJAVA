let promedio = 17;
let nivel;

if (promedio < 10.5) {
    nivel = "Bajo";
} else if (promedio >= 10.5 && promedio <= 13) {
    nivel = "Regular";
} else if (promedio >= 14 && promedio <= 16) {
    nivel = "Bueno";
} else {
    nivel = "Excelente";
}

document.getElementById("resultado").innerHTML = "Promedio del estudiante: " + promedio + "<br>Nivel de rendimiento: " + nivel;