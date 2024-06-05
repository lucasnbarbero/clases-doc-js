// Temperaturas semanales
let dia = 1;
let temperatura;
let sumaTemperaturas = 0;
let temperaturaBajoCero = 0;
let temperaturaMaxima = Number.MIN_SAFE_INTEGER;
let temperaturaMinima = Number.MAX_SAFE_INTEGER;
let diaMasCaluroso;
let diaMasFrio;

while (dia <= 7) {
  temperatura = parseFloat(prompt(`Ingrese la temperatura del día ${dia}:`));

  sumaTemperaturas += temperatura;

  if (temperatura < 0) {
    temperaturaBajoCero++;
  }

  if (temperatura > temperaturaMaxima) {
    temperaturaMaxima = temperatura;
    diaMasCaluroso = dia;
  }

  if (temperatura < temperaturaMinima) {
    temperaturaMinima = temperatura;
    diaMasFrio = dia;
  }

  dia++;
}

let promedioTemperaturas = sumaTemperaturas / 7;
let porcentajeBajoCero = (temperaturaBajoCero / 7) * 100;

alert(
  `Promedio de temperatura semanal: ${promedioTemperaturas.toFixed(
    2
  )}\nDía más caluroso: ${diaMasCaluroso}\nDía más frío: ${diaMasFrio}\nPorcentaje de temperaturas bajo cero: ${porcentajeBajoCero.toFixed(
    2
  )}%`
);

// Resultado de encuentros
let equipo1 = prompt("Ingrese el nombre del equipo 1:");
let equipo2 = prompt("Ingrese el nombre del equipo 2:");
let partidos = 1;
let golesEquipo1 = 0;
let golesEquipo2 = 0;
let victoriasEquipo1 = 0;
let victoriasEquipo2 = 0;

while (partidos <= 4) {
  let resultado = prompt(
    `Ingrese el resultado del partido ${partidos} (Formato: golesEquipo1-golesEquipo2):`
  );
  let goles = resultado.split("-");

  golesEquipo1 += parseInt(goles[0]);
  golesEquipo2 += parseInt(goles[1]);

  if (goles[0] > goles[1]) {
    victoriasEquipo1++;
  } else if (goles[0] < goles[1]) {
    victoriasEquipo2++;
  }

  partidos++;
}

let equipoMasGanador, golesMasGanador;
if (victoriasEquipo1 > victoriasEquipo2) {
  equipoMasGanador = equipo1;
  golesMasGanador = golesEquipo1;
} else if (victoriasEquipo1 < victoriasEquipo2) {
  equipoMasGanador = equipo2;
  golesMasGanador = golesEquipo2;
}

let promedioGoles = (golesEquipo1 + golesEquipo2) / 4;

alert(
  `Equipo que ganó más veces: ${equipoMasGanador} (${
    victoriasEquipo1 + victoriasEquipo2
  } victorias)\nEquipo que hizo más goles: ${
    golesEquipo1 > golesEquipo2 ? equipo1 : equipo2
  } (${golesMasGanador} goles)\nPromedio de goles por partido: ${promedioGoles.toFixed(
    2
  )}`
);
