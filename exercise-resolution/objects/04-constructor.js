// Crear nueva calculadora

function Calculator() {
  this.read = function () {
    // el + antes del prompt, convierte el string en un numero
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Crear acumulador

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("Cuánto más agregar?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
