# Expresiones de función

En JavaScript, además de declarar funciones utilizando la declaración de función (`function`), también podemos crear funciones utilizando **expresiones de función**. Las expresiones de función ofrecen más flexibilidad en cómo y dónde se pueden definir las funciones.

### Declaración de Función

Una declaración de función define una función con el siguiente formato:

```js
function sayHello() {
  alert("¡Hola a todos!");
}

sayHello(); // ¡Hola a todos!
```

Las declaraciones de función son "elevadas" (hoisted) al inicio del contexto de ejecución, lo que significa que puedes llamar a la función antes de su definición en el código.

### Expresiones de función

Una expresión de función define una función como parte de una expresión, típicamente asignándola a una variable:

```js
const sayHello = function () {
  alert("¡Hola a todos!");
};

sayHello(); // ¡Hola a todos!
```

A diferencia de las declaraciones de función, las expresiones de función no son elevadas. Esto significa que no puedes llamar a la función antes de su definición en el código.

Como la creación de una función ocurre en el contexto de una expresión de asignación, (el lado derecho de0 `=`), esto es una _Expresión de función_.

Note que no hay un nombre después de la palabra clave `function`. Omitir el nombre está permitido en las expresiones de función.

Aquí la asignamos directamente a la variable, así que el significado de estos ejemplos de código es el mismo: "crear una función y ponerla en la variable `sayHi`".

## La función es un valor

No importa cómo es creada la función, una función es un valor. Ambos ejemplos arriba almacenan una función en la variable `sayHi`.

Incluso podemos mostrar aquel valor usando `alert`:

```js{5}
function sayHi() {
  alert("Hola");
}

alert(sayHi); // muestra el código de la función
```

Tengamos en cuenta que la última línea no ejecuta la función, porque no hay paréntesis después de `sayHi`. Existen lenguajes de programación en los que cualquier mención del nombre de una función causa su ejecución, pero JavaScript no funciona así.

En JavaScript, una función es un valor, por lo tanto podemos tratarlo como un valor. El código de arriba muestra su representación de cadena, que es el código fuente.

Por supuesto que es un valor especial, en el sentido que podemos invocarlo de esta forma `sayHi()`.

Pero sigue siendo un valor. Entonces podemos trabajar con ello como trabajamos con otro tipo de valores.

Podemos copiar una función a otra variable:

```js
function sayHi() {
  // (1) crear
  alert("Hola");
}

let func = sayHi; // (2) copiar

func(); // Hola // (3) ejecuta la copia (funciona)!
sayHi(); // Hola // esto también funciona (por qué no lo haría)
```

Esto es lo que sucede arriba en detalle:

- La Declaración de la Función `(1)` crea la función y la coloca dentro de la variable llamada `sayHi`.
- Línea`(2)` copia la función en la variable `func`.
- Ahora la función puede ser llamada de ambas maneras, `sayHi()` y `func()`.

## Callback

En JavaScript, un **callback** es una función que se pasa como argumento a otra función y se ejecuta después de que se completa alguna operación. Los callbacks son fundamentales para manejar la asincronía y la programación basada en eventos.

### ¿Cómo funcionan los callbacks?

Cuando una función recibe otra función como argumento, esta función pasada se llama callback. La función receptora puede ejecutar el callback en cualquier momento, dependiendo de su lógica interna.

```js
function greet(name, callback) {
  console.log("Hola, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Adiós");
}

greet("Lucas", sayGoodbye); // Hola, Lucas | Adiós
```

En este ejemplo, `greet` es una función que toma un nombre y un callback como argumentos. Después de saludar al nombre dado, llama al callback `sayGoodbye`.

### Callbacks Anonimos

A menudo, los callbacks se definen como funciones anónimas directamente en el lugar donde se pasan como argumentos.

```js
function greet(name, callback) {
  console.log("Hola, " + name);
  callback();
}

greet("Lucas", function () {
  console.log("Adiós");
}); // Hola, Lucas | Adiós
```

## Declaración vs Expresión de función

Formulemos las principales diferencias entre Declaración y Expresión de Funciones.

Primero, la sintaxis: cómo diferenciarlas en el código.

- _Declaración de Función_: una función, declarada como una instrucción separada, en el flujo de código principal.

```js
// Declaración de Función
function sum(a, b) {
  return a + b;
}
```

- _Expresión de Función_: una función, creada dentro de una expresión o dentro de otra construcción sintáctica. Aquí, la función es creada en el lado derecho de la “expresión de asignación” `=`:

```js
// Expresión de Función
let sum = function (a, b) {
  return a + b;
};
```

La diferencia más sutil es **cuándo** la función es creada por el motor de JavaScript.

**Una Expresión de Función es creada cuando la ejecución la alcance y es utilizable desde ahí en adelante.**

Una vez que el flujo de ejecución pase al lado derecho de la asignación `let sum = function… ` aquí vamos, la función es creada y puede ser usada (asignada, llamada, etc.) de ahora en adelante.

Las Declaraciones de Función son diferente.

**Una Declaración de Función puede ser llamada antes de ser definida.**

Por ejemplo, una Declaración de Función global es visible en todo el script, sin importar dónde se esté.

Esto se debe a los algoritmos internos. Cuando JavaScript se prepara para ejecutar el script, primero busca Declaraciones de Funciones globales en él y crea las funciones. Podemos pensar en esto como una “etapa de inicialización”.

Y después de que se procesen todas las Declaraciones de Funciones, el código se ejecuta. Entonces tiene acceso a éstas funciones.

Por ejemplo, esto funciona:

```js
sayHi("John"); // Hola, John

function sayHi(name) {
  alert(`Hola, ${name}`);
}
```

Si fuera una Expresión de Función, entonces no funcionaría:

```js{1}
sayHi("John"); // error!

let sayHi = function(name) {  // (*) ya no hay magia
  alert( `Hola, ${name}` );
};
```
