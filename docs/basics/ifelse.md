# Condicionales (if, else, switch)

En programación, las estructuras condicionales son fundamentales para controlar el flujo de ejecución de nuestro código. Nos permiten tomar decisiones basadas en condiciones específicas y ejecutar diferentes bloques de código en función de esas condiciones.

## `if`

La sentencia `if(...)` evalúa la condición en los paréntesis, y si el resultado es verdadero (`true`), ejecuta un bloque de código.

```js
var year = prompt("¿En que año fué creado JavaScript?");

if (year == 1995) alert("¡Estás en lo cierto!");
```

Si queremos ejecutar más de una sentencia, debemos encerrar nuestro bloque de código entre llaves:

```js
if (year == 1995) {
  alert("¡Es Correcto!");
  alert("¡Eres muy inteligente!");
}
```

## `else`

La sentencia `if` puede contener un bloque `else` (“si no”, “en caso contrario”) opcional. Este bloque se ejecutará cuando la condición sea falsa.

Por ejemplo:

```js
var year = prompt("¿En que año fué creado JavaScript?");

if (year == 1995) {
  alert("¡Lo adivinaste, correcto!");
} else {
  alert("¿Cómo puedes estar tan equivocado?"); // cualquier valor excepto 1995
}
```

## `else-if`

A veces queremos probar más de una condición. La clausula `else if` nos permite hacer esto.

Por ejemplo:

```js
var year = prompt("¿En que año fué creado JavaScript?");

if (year < 2015) {
  alert("Muy poco...");
} else if (year > 2015) {
  alert("Muy Tarde");
} else {
  alert("¡Exactamente!");
}
```

## `switch`

La estructura switch nos permite ejecutar diferentes bloques de código en función del valor de una expresión. Por ejemplo:

```js
var dia = 3;
var nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  // Más casos aquí...
  default:
    nombreDia = "Día no válido";
}

alert("Hoy es " + nombreDia);
```

## Ejercicio

Pongamos en práctica lo aprendido en esta sección resolviendo los siguientes [ejercicios](../exercises/02-ifelse.md)
