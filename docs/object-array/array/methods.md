# Métodos de un array

Los arrays en JavaScript son extremadamente versátiles gracias a una amplia gama de métodos integrados que facilitan su manipulación.

## Métodos de mutación

Estos métodos cambian el contenido del array en el que se llaman.

### `push`

Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.

```js
let frutas = ["Manzana", "Banana"];
frutas.push("Naranja");
console.log(frutas); // ["Manzana", "Banana", "Naranja"]
```

### `pop`

Elimina el último elemento del array y lo devuelve.

```js
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // "Naranja"
console.log(frutas); // ["Manzana", "Banana"]
```

### `shift`

Elimina el primer elemento del array y lo devuelve.

```js
let primeraFruta = frutas.shift();
console.log(primeraFruta); // "Manzana"
console.log(frutas); // ["Banana"]
```

### `unshift`

Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.

```js
frutas.unshift("Fresa");
console.log(frutas); // ["Fresa", "Banana"]
```

### `splice`

Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

## Métodos de acceso

Estos métodos no modifican el array, sino que crean una nueva versión del mismo o acceden a su contenido.

### `concat`

Combina dos o más arrays y devuelve un nuevo array.

```js
let masFrutas = ["Melon", "Uva"];
let todasLasFrutas = frutas.concat(masFrutas);
console.log(todasLasFrutas); // ["Fresa", "Naranja", "Mango", "Melon", "Uva"]
```

### `slice`

Devuelve una copia superficial de una porción de un array en un nuevo array.

```js
let algunasFrutas = todasLasFrutas.slice(1, 3);
console.log(algunasFrutas); // ["Naranja", "Mango"]
```

### `indexOf`

Devuelve el primer índice en el que se encuentra un elemento en el array, o -1 si no está presente.

```js
let indiceDeNaranja = todasLasFrutas.indexOf("Naranja");
console.log(indiceDeNaranja); // 1
```

### `includes`

Determina si un array contiene un elemento, devolviendo `true` o `false`.

```js
let contieneUva = todasLasFrutas.includes("Uva");
console.log(contieneUva); // true
```

### `join`

Une todos los elementos de un array en una cadena y la devuelve.

```js
let frutasString = todasLasFrutas.join(", ");
console.log(frutasString); // "Fresa, Naranja, Mango, Melon, Uva"
```

## Métodos de iteración

Estos métodos permiten recorrer los elementos de un array y realizar operaciones sobre ellos.

### `forEach`

Ejecuta una función proporcionada una vez por cada elemento del array.

```js
todasLasFrutas.forEach(function (fruta) {
  console.log(fruta);
});
// "Fresa", "Naranja", "Mango", "Melon", "Uva"
```

### `map`

Crea un nuevo array con los resultados de llamar a una función para cada elemento del array.

```js
let frutasEnMayusculas = todasLasFrutas.map(function (fruta) {
  return fruta.toUpperCase();
});
console.log(frutasEnMayusculas); // ["FRESA", "NARANJA", "MANGO", "MELON", "UVA"]
```

### `filter`

Crea un nuevo array con todos los elementos que pasan una prueba implementada por una función.

```js
let frutasConA = todasLasFrutas.filter(function (fruta) {
  return fruta.includes("a");
});
console.log(frutasConA); // ["Naranja", "Mango"]
```

### `find`

Devuelve el primer elemento del array que pasa una prueba implementada por una función.

```js
let frutaConO = todasLasFrutas.find(function (fruta) {
  return fruta.includes("o");
});
console.log(frutaConO); // "Mango"
```

### `findIndex`

Devuelve el índice del primer elemento del array que pasa una prueba implementada por una función.

```js
let indiceDeFrutaConO = todasLasFrutas.findIndex(function (fruta) {
  return fruta.includes("o");
});
console.log(indiceDeFrutaConO); // 2
```

## Ejercitación

Vayamos al [ejercicio](../../exercises/06-arrays.md) para aplicar lo aprendido!
