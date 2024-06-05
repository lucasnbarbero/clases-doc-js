# Arrays

Los arrays (o arreglos) son una estructura de datos fundamental en JavaScript que permite almacenar múltiples valores en una sola variable. Los arrays utilizan índices numéricos para acceder a sus elementos.

## ¿Qué es un array?

Un array es una colección ordenada de elementos, que pueden ser de cualquier tipo, incluyendo números, cadenas de texto, booleanos, funciones, e incluso otros arrays. Los arrays en JavaScript son dinámicos, lo que significa que pueden cambiar de tamaño automáticamente y pueden contener elementos de diferentes tipos.

## Declaración

Hay dos sintaxis para crear un array vacío:

```js
let arr = new Array();
let arr = [];
```

Casi siempre se usa la segunda. Podemos suministrar elementos iniciales entre los corchetes:

```js
let fruits = ["Apple", "Orange", "Plum"];
```

Los elementos del array están numerados comenzando desde cero.

Podemos obtener un elemento por su número entre corchetes:

```js
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[0]); // Apple
alert(fruits[1]); // Orange
alert(fruits[2]); // Plum
```

Podemos reemplazar un elemento:

```js
fruits[2] = "Pear"; // ahora ["Apple", "Orange", "Pear"]
```

…o agregar uno nuevo al array:

```js
fruits[3] = "Lemon"; // ahora ["Apple", "Orange", "Pear", "Lemon"]
```

La cuenta total de elementos en el array es su longitud `length`:

```js
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits.length); // 3
```

También podemos usar `alert` para mostrar el array completo.

```js
let fruits = ["Apple", "Orange", "Plum"];

alert(fruits); // Apple,Orange,Plum
```

Un array puede almacenar elementos de cualquier tipo.

Por ejemplo:

```js
// mezcla de valores
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

// obtener el objeto del índice 1 y mostrar su nombre
alert(arr[1].name); // John

// obtener la función del índice 3 y ejecutarla
arr[3](); // hello
```

## Recorriendo un array

### Arrays de tipo vector

Un array de tipo vector es un array unidimensional. Para recorrerlo, puedes utilizar un bucle `for`, `forEach`, o cualquier otro método de iteración.

#### Usando un bucle `for`

```js
let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
// Salida: 1, 2, 3, 4, 5
```

#### Usando `forEach`

```js
numeros.forEach(function (numero) {
  console.log(numero);
});
// Salida: 1, 2, 3, 4, 5
```

#### Usando un bucle `for...of`

```js
for (let numero of numeros) {
  console.log(numero);
}
// Salida: 1, 2, 3, 4, 5
```

### Recorrer un Array de Tipo Matriz

Un array de tipo matriz es un array multidimensional (como un array de arrays). Para recorrer este tipo de array, necesitas anidar bucles.

#### Usando un Bucle `for`

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
// Salida: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

#### Usando `forEach`

```js
matriz.forEach(function (fila) {
  fila.forEach(function (elemento) {
    console.log(elemento);
  });
});
// Salida: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

#### Usando un bucle `for...of`

```js
for (let fila of matriz) {
  for (let elemento of fila) {
    console.log(elemento);
  }
}
// Salida: 1, 2, 3, 4, 5, 6, 7, 8, 9
```

### Ejemplo completo

Para ilustrar mejor, veamos un ejemplo completo de cómo recorrer y trabajar con ambos tipos de arrays.

#### Recorrer un Array de Tipo Vector

```js
let frutas = ["Manzana", "Banana", "Naranja"];

// Usando un bucle for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Usando forEach
frutas.forEach(function (fruta) {
  console.log(fruta);
});

// Usando for...of
for (let fruta of frutas) {
  console.log(fruta);
}
```

#### Recorrer un Array de Tipo Matriz

```js
let tabla = [
  ["Nombre", "Edad", "Ciudad"],
  ["Juan", 30, "Madrid"],
  ["Ana", 25, "Barcelona"],
  ["Pedro", 28, "Valencia"],
];

// Usando un bucle for
for (let i = 0; i < tabla.length; i++) {
  for (let j = 0; j < tabla[i].length; j++) {
    console.log(tabla[i][j]);
  }
}

// Usando forEach
tabla.forEach(function (fila) {
  fila.forEach(function (celda) {
    console.log(celda);
  });
});

// Usando for...of
for (let fila of tabla) {
  for (let celda of fila) {
    console.log(celda);
  }
}
```
