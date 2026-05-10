let precioOriginal = 100;
let porcentajeDescuento = 20;
let descuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - descuento;
document.getElementById("resultado").innerHTML = "Precio original: S/ " + precioOriginal + "<br>Descuento: " + porcentajeDescuento + "%<br>Precio final: S/ " + precioFinal;