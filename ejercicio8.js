let numero = 7;
let html = "";
for (let i = 1; i <= 10; i++) {
    html += numero + " x " + i + " = " + (numero * i) + "<br>";
}
document.getElementById("resultado").innerHTML = html;