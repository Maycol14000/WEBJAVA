let lista = [4, 7, 10, 13, 16, 21];
let contadorPares = 0;
for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
        contadorPares++;
    }
}
document.getElementById("resultado").innerHTML = "Lista de numeros: " + lista.join(", ") + "<br>Cantidad de numeros pares: " + contadorPares;