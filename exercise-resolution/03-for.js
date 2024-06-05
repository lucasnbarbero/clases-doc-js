// Sumatoria
let sumatoria = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Ingrese el número ${i}:`));
  sumatoria += numero;
}

alert(`La sumatoria de los números ingresados es: ${sumatoria}`);

// Promedio
let suma = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Ingrese el número ${i}:`));
  suma += numero;
}

let promedio = suma / 5;

alert(`El promedio de los números ingresados es: ${promedio}`);

// Porcentajes
let numerosPares = 0;
let numerosImpares = 0;
let sumaNumeros = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Ingrese el número ${i}:`));
  sumaNumeros += numero;

  if (numero % 2 === 0) {
    numerosPares++;
  } else {
    numerosImpares++;
  }
}

let promedioNumeros = sumaNumeros / 5;
let porcentajePares = (numerosPares / 5) * 100;
let porcentajeImpares = (numerosImpares / 5) * 100;

alert(
  `Porcentaje de números pares: ${porcentajePares.toFixed(
    2
  )}%\nPorcentaje de números impares: ${porcentajeImpares.toFixed(
    2
  )}%\nPromedio de los números: ${promedioNumeros.toFixed(2)}`
);

// Mayor y menor
let numeroMayor = Number.MIN_SAFE_INTEGER;
let numeroMenor = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Ingrese el número ${i}:`));

  if (numero > numeroMayor) {
    numeroMayor = numero;
  }

  if (numero < numeroMenor) {
    numeroMenor = numero;
  }
}

alert(`El número mayor es: ${numeroMayor}\nEl número menor es: ${numeroMenor}`);
