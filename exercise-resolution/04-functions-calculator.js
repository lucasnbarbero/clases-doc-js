// Función para sumar dos números
function sumar(num1, num2) {
  return num1 + num2;
}

// Función para restar dos números
function restar(num1, num2) {
  return num1 - num2;
}

// Función para multiplicar dos números
function multiplicar(num1, num2) {
  return num1 * num2;
}

// Función para dividir dos números
function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero.";
  } else {
    return num1 / num2;
  }
}

// Función principal de la calculadora
function calcular() {
  // Pedir al usuario que ingrese dos números
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));

  // Pedir al usuario que seleccione una operación
  let operacion = prompt(
    "Seleccione una operación: suma (+), resta (-), multiplicación (*) o división (/)"
  );

  // Realizar la operación seleccionada y mostrar el resultado
  let resultado;
  switch (operacion) {
    case "+":
      resultado = sumar(num1, num2);
      break;
    case "-":
      resultado = restar(num1, num2);
      break;
    case "*":
      resultado = multiplicar(num1, num2);
      break;
    case "/":
      resultado = dividir(num1, num2);
      break;
    default:
      resultado = "Operación inválida.";
  }

  // Mostrar el resultado al usuario
  alert("El resultado es: " + resultado);
}

// Llamar a la función principal de la calculadora
calcular();
