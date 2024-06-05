// Función para calcular el Índice de Masa Corporal (IMC)
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

// Función principal de la calculadora de IMC
function calcularIMCUsuario() {
  // Pedir al usuario que ingrese su peso en kilogramos
  let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));

  // Pedir al usuario que ingrese su altura en metros
  let altura = parseFloat(prompt("Ingrese su altura en metros:"));

  // Calcular el IMC utilizando la función
  let imc = calcularIMC(peso, altura);

  // Interpretar el IMC y mostrar el resultado al usuario
  let interpretacion;
  if (imc < 18.5) {
    interpretacion = "Bajo peso";
  } else if (imc >= 18.5 && imc < 25) {
    interpretacion = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    interpretacion = "Sobrepeso";
  } else {
    interpretacion = "Obesidad";
  }

  // Mostrar el resultado al usuario
  alert("Su IMC es: " + imc.toFixed(2) + ". " + interpretacion);
}

// Llamar a la función principal de la calculadora de IMC
calcularIMCUsuario();
