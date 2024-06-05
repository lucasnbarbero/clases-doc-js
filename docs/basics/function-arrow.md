# Funciones flechas (arrow functions)

Hay otra sintaxis muy simple y concisa para crear funciones, que a menudo es mejor que las Expresiones de funciones.

Se llama **funciones flecha (arrow functions)**, porque se ve así:

```js
let func = (arg1, arg2, ..., argN) => expression;
```

Esto crea una función `func` que acepta los parámetros `arg1..argN`, luego evalúa la `expression` del lado derecho mediante su uso y devuelve su resultado.

En otras palabras, es la versión más corta de:

```js
let func = function(arg1, arg2, ..., argN) {
return expression;
};
```

Veamos un ejemplo concreto:

```js
let sum = (a, b) => a + b;

// Esta función de flecha es una forma más corta de:

// let sum = function(a, b) {
//  return a + b;
// };

alert(sum(1, 2)); // 3
```

Como puedes ver, `(a, b) => a + b` significa una función que acepta dos argumentos llamados `a y b`. Tras la ejecución, evalúa la expresión `a + b` y devuelve el resultado.

## Arrow functions multilíneas

Las funciones de flecha que estuvimos viendo eran muy simples. Toman los parámetros a la izquierda de `=>`, los evalúan y devuelven la expresión del lado derecho.

A veces necesitamos una función más compleja, con múltiples expresiones o sentencias. En ese caso debemos encerrarlos entre llaves. La diferencia principal es que las llaves necesitan usar un `return` para devolver un valor (tal como lo hacen las funciones comunes).

Como esto:

```js
let sum = (a, b) => {
  // la llave abre una función multilínea
  let result = a + b;
  return result; // si usamos llaves, entonces necesitamos un "return" explícito
};

alert(sum(1, 2)); // 3
```
