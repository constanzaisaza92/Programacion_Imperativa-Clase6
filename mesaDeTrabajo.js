//Veamos como funciona:
//Respuesta:Este programa puede funcionar muy bien, solo hace falta definir la variable que contendrá el valor o el prompt para capturar la información desde consola

let anios =17;
if (anios>=18){
    console.log("Puede pasar")
    }else{
    console.log("No puede pasar")
}

//________________________________________________________________
// Ejercicio Agrega caminos:
const prompt = require("prompt-sync")({sigint: true});
const edad = parseInt(prompt("Ingresa tu edad: "));


if (edad < 0) {
  console.log(`Error, edad inválida. Por favor ingrese un número válido.`);
} else if (edad === 21) {
  console.log(`¡Bienvenido al bar! Felicidades por alcanzar la mayoría de edad.`);
  console.log(`¿Sabías que tu edad es impar?`);
} else if (edad < 18 && edad % 2 !== 0) {
  console.log(`No puede pasar al bar.`);
  console.log(`¿Sabías que tu edad es impar?`);
}else if (edad < 18 && edad % 2 === 0) {
    console.log(`No puede pasar al bar.`);
} else if (edad >= 21 && edad % 2 !== 0) {
    console.log(`Puede pasar al bar y tomar alcohol.`);
    console.log(`¿Sabías que tu edad es impar?`);
} else if (edad < 21 && edad % 2 !== 0) {
  console.log(`Puede pasar al bar, pero no puede tomar alcohol.`);
  console.log(`¿Sabías que tu edad es impar?`);
} else if (edad < 21 && edad % 2 === 0) {
    console.log(`Puede pasar al bar, pero no puede tomar alcohol.`);
} else {
  console.log(`Puede pasar al bar y tomar alcohol.`);
}

//________________________________________________________________
//Total a pagar:

function totalAPagar(vehiculo, litros) {
    let precioPorLitro;
  
    if (vehiculo === "coche") {
      precioPorLitro = 86;
    } else if (vehiculo === "moto") {
      precioPorLitro = 70;
    } else if (vehiculo === "autobus") {
      precioPorLitro = 55;
    } else {
      console.log("Vehículo no reconocido.");
      return;
    }
  
    let totalAPagar = precioPorLitro * litros;
  
    if (litros >= 0 && litros <= 25) {
      totalAPagar += 50;
    } else if (litros > 25) {
      totalAPagar += 25;
    }
  
    console.log(`Total a pagar: $${totalAPagar}`);
  }

totalAPagar("coche", 20);  // Ejemplo 1
totalAPagar("moto", 30);   // Ejemplo 2
totalAPagar("autobus", 10); // Ejemplo 3

//________________________________________________________________
//Local de sándwiches:

function calcularTotal(sandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let precioBase;
  
    switch (sandwichBase) {
      case "pollo":
        precioBase = 150;
        break;
      case "carne":
        precioBase = 200;
        break;
      case "veggie":
        precioBase = 100;
        break;
      default:
        console.log("Sándwich base no reconocido.");
        return;
    }
  
    let precioPan;
  
    switch (tipoPan) {
      case "blanco":
        precioPan = 50;
        break;
      case "negro":
        precioPan = 60;
        break;
      case "s/gluten":
        precioPan = 75;
        break;
      default:
        console.log("Tipo de pan no reconocido.");
        return;
    }
  
    let totalAdicionales = 0;
  
    if (queso) totalAdicionales += 20;
    if (tomate) totalAdicionales += 15;
    if (lechuga) totalAdicionales += 10;
    if (cebolla) totalAdicionales += 15;
    if (mayonesa) totalAdicionales += 5;
    if (mostaza) totalAdicionales += 5;
  
    const totalAPagar = precioBase + precioPan + totalAdicionales;
    return totalAPagar;
  }
  
  // Ejemplo
  const totalCliente = calcularTotal("carne", "s/gluten", true, true, false, true, false, true);
  console.log(`Total a pagar : $${totalCliente}`);
  
//________________________________________________________________
//Número secreto:
let numero = parseInt(prompt("Ingresa el numero que crees que es el secreto: "));
function numeroSecreto(numero){
    let max = 10;
    let min =0;
    let range = max - min + 1;
    let randomInt = Math.floor((Math.random() * range) + min);
    console.log(randomInt);

    if (numero ===randomInt){
        console.log("Felicitaciones! elejiste el número correcto!");
    }else{
        console.log("Intentalo de nuevo!");
    }
}

numeroSecreto(numero);//Ejemplo

//________________________________________________________________
//abrir paracaidas:
let velocidad = parseInt(prompt("Ingresa tu velocidad: "));
let altura = parseInt(prompt("Ingresa tu altura: "));
function abrirParacaidas(velocidad,altura){
    if (velocidad <1000 && (altura >= 2000 && altura < 3000)) {
        console.log("El paracaídas se abrirá!");
    }else{
        console.log("El paracaídas no abrirá!");
    }
}
abrirParacaidas(velocidad,altura);//Ejemplo

//________________________________________________________________
//