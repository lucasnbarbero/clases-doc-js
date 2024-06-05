// Positivo, negativo o cero
let numero = parseInt(prompt("Ingresa un número:"));

if (numero > 0) {
  alert("El número es positivo");
} else if (numero < 0) {
  alert("El número es negativo");
} else {
  alert("El número es neutro (cero)");
}

// Par o impar
numero = parseInt(prompt("Ingresa otro número:"));

if (numero % 2 === 0) {
  alert("El número es par");
} else {
  alert("El número es impar");
}

// Mostrar mayor
let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));

if (numero1 > numero2) {
  alert("El primer número es mayor");
} else if (numero1 < numero2) {
  alert("El segundo número es mayor");
} else {
  alert("Los números son iguales");
}

// Mayor de tres
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

if (num1 > num2 && num1 > num3) {
  alert("El primer número es el mayor");
} else if (num2 > num1 && num2 > num3) {
  alert("El segundo número es el mayor");
} else if (num3 > num1 && num3 > num2) {
  alert("El tercer número es el mayor");
} else {
  alert("Los números son iguales");
}

// Calcular salario
let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
let salario;

if (horasTrabajadas <= 40) {
  salario = horasTrabajadas * 150;
} else {
  let horasExtras = horasTrabajadas - 40;
  salario = 40 * 150 + horasExtras * 250;
}

alert("El salario semanal es: $" + salario);

// Seguro de automóviles
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let sexo = prompt("Ingrese su sexo (M o F):").toUpperCase();
let precioPoliza;

if (sexo === "M") {
  if (edad < 25) {
    precioPoliza = 1000;
  } else {
    precioPoliza = 700;
  }
} else {
  if (edad < 21) {
    precioPoliza = 800;
  } else {
    precioPoliza = 1200;
  }
}

alert(
  `Nombre: ${nombre}\nEdad: ${edad}\nSexo: ${sexo}\nPrecio de la póliza: $${precioPoliza}`
);
