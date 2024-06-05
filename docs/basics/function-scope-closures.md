# Scope y Closures

## Scope (Ámbito)

El **scope** (o ámbito) en JavaScript se refiere al contexto en el cual las variables están definidas y accesibles. JavaScript tiene dos tipos principales de scope: global y local.

### Scope Global

Las variables definidas fuera de cualquier función o bloque tienen scope global. Esto significa que pueden ser accedidas desde cualquier parte del código.

```js
let globalVar = "Soy una variable global";

function showGlobalVar() {
  alert(globalVar);
}

showGlobalVar(); // Soy una variable global
```

### Scope Local

Las variables definidas dentro de una función tienen scope local y solo son accesibles dentro de esa función.

```js
function myFunction() {
  let localVar = "Soy una variable local";
  console.log(localVar);
}

myFunction(); // Soy una variable local
console.log(localVar); // Error: localVar es undefined
```

### Scope de Bloque

Con la introducción de `let` y `const` en ES6, ahora también tenemos scope de bloque, que se refiere a las variables definidas dentro de un bloque `{}` (por ejemplo, dentro de un `if` o `for`).

```js
if (true) {
  let blockVar = "Soy una variable de bloque";
  console.log(blockVar); // Soy una variable de bloque
}

console.log(blockVar); // Error: blockVar es undefined
```

### Anidacion de Scopes

Los scopes pueden estar anidados. Una función puede acceder a variables de su scope externo.

```js
let outerVar = "Estoy fuera";

function outerFunction() {
  let innerVar = "Estoy dentro";

  function innerFunction() {
    console.log(outerVar); // Estoy fuera
    console.log(innerVar); // Estoy dentro
  }

  innerFunction();
}

outerFunction();
```

## Closures

Un **closure** en JavaScript es una función que recuerda el entorno en el cual fue creada. Este entorno incluye cualquier variable que estaba en el alcance (scope) en el momento en que se creó la función.

### Ejemplo simple de Closure

Veamos un ejemplo sencillo para entender cómo funcionan los closures:

```js
function crearSaludador(nombre) {
  return function () {
    console.log(`¡Hola, ${nombre}!`);
  };
}

const saludarLucas = crearSaludador("Lucas");
saludarLucas(); // ¡Hola, Lucas!

const saludarMaria = crearSaludador("Maria");
saludarMaria(); // ¡Hola, Maria!
```

#### ¿Qué pasa aquí?

- Función Externa (`crearSaludador`):

  - `crearSaludador` es una función que toma un parámetro nombre y devuelve una nueva función.
  - La función devuelta (closure) tiene acceso al parámetro `nombre` incluso después de que `crearSaludador` haya terminado de ejecutarse.

- Función Interna (closure):

  - La función devuelta recuerda el entorno en el cual fue creada, es decir, el valor de `nombre`.

- Ejecutar el Closure:

  - Cuando llamamos a `saludarLucas()`, se ejecuta la función devuelta que recuerda el valor de `nombre` como "Lucas".
  - Cuando llamamos a `saludarMaria()`, se ejecuta la función devuelta que recuerda el valor de `nombre` como "Maria".

### Otro ejemplo: contador

Aquí hay otro ejemplo que muestra cómo un closure puede ser útil para crear un contador que mantiene su estado:

```js
function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    console.log(contador);
  };
}

const contador1 = crearContador();
contador1(); // 1
contador1(); // 2
contador1(); // 3

const contador2 = crearContador();
contador2(); // 1
contador2(); // 2
```

## Ejercicio

¡Llegó el gran momento! Vamos a realizar un [ejercicio](../exercises/04-integrator.md) donde pondremos en práctica todo lo aprendido hasta este momento!
