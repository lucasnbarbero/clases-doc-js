# Desestructuracion

Las dos estructuras de datos más usadas en JavaScript son `Object` y `Array`.

- Los objetos nos permiten crear una simple entidad que almacena items con una clave cada uno.
- Los arrays nos permiten reunir items en una lista ordenada.

Pero cuando los pasamos a una función, tal vez no necesitemos un objeto o array como un conjunto sino en piezas individuales.

La asignación desestructurante es una sintaxis especial que nos permite “desempaquetar” arrays u objetos en varias variables, porque a veces es más conveniente.

La desestructuración también funciona bien con funciones complejas que tienen muchos argumentos, valores por defecto, etcétera. Pronto lo veremos.

## Desestructuración de Arrays

Un ejemplo de cómo el array es desestructurado en variables:

```js
// tenemos un array con el nombre y apellido
let arr = ["John", "Smith"];

// asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname); // Smith
```

Ahora podemos trabajar con variables en lugar de miembros de array.

Se ve genial cuando se combina con split u otro método que devuelva un array:

```js
let [firstName, surname] = "John Smith".split(" ");
alert(firstName); // John
alert(surname); // Smith
```

### “Desestructuración” no significa “destructivo”.

Se llama “asignación desestructurante” porque “desestructura” al copiar elementos dentro de variables, pero el array en sí no es modificado.

Es sólo una manera más simple de escribir:

```js
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
```

### Ignorar elementos utilizando comas

Los elementos no deseados de un array también pueden ser descartados por medio de una coma extra:

```js
// segundo elemento no es necesario
let [firstName, , title] = ["Lucas", "Barbero", "Curso Javascript"];

alert(title); // Consul
```

En el código de arriba, el segundo elemento del array es omitido, el tercero es asignado a title, y el resto de los elementos del array también se omiten (debido a que no hay variables para ellos).

### El resto `…`

En general, si el array es mayor que la lista de la izquierda, los ítems extras son omitidos.

Por ejemplo, aquí solo dos items son tomados, el resto simplemente es ignorado:

```js
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// items posteriores no serán asignados a ningún lugar
```

si queremos también obtener todo lo que sigue, podemos agregarle un parámetro que obtiene “el resto” usando puntos suspensivos `…`:

```js
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

// `rest` es un array de ítems, comenzando en este caso por el tercero.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

El valor de `rest` es un array con los elementos restantes del array original.

Podemos usar cualquier otro nombre de variable en lugar de `rest`, sólo hay que asegurar que tenga tres puntos que lo antecedan y que esté último en la asignación desestructurante.

```js
let [name1, name2, ...titles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
// ahora titles = ["Consul", "of the Roman Republic"]
```

### Valores predeterminados

Si el array es más corto que la lista de variables a la izquierda, no habrá errores. Los valores ausentes son considerados `undefined`:

```js
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

Si queremos un valor “predeterminado” para reemplazar el valor faltante, podemos proporcionarlo utilizando =:

```js
// valores predeterminados
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name); // Julius (desde array)
alert(surname); // Anonymous (predeterminado utilizado)
```

## Desestructuración de objetos

La asignación desestructurante también funciona con objetos.

La sintaxis básica es:

```js
let {var1, var2} = {var1:…, var2:…}

let options = {
title: "Menu",
width: 100,
height: 200
};

let {title, width, height} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
```

Las propiedades options.title, options.width y options.height son asignadas a las variables correspondientes.

No importa el orden sino los nombres. Esto también funciona:

```js
// cambiado el orden en let {...}
let { height, width, title } = { title: "Menu", height: 200, width: 100 };
```

Si queremos asignar una propiedad a una variable con otro nombre, por ejemplo que options.width vaya en la variable llamada w, lo podemos establecer usando dos puntos:

```js
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

// { propiedadOrigen: variableObjetivo }
let { width: w, height: h, title } = options;

// width -> w
// height -> h
// title -> title

alert(title); // Menu
alert(w); // 100
alert(h); // 200
```

Los dos puntos muestran “qué : va dónde”. En el ejemplo de arriba la propiedad width va a w, height va a h, y title es asignado al mismo nombre.

Para propiedades potencialmente faltantes podemos establecer valores predeterminados utilizando "=", de esta manera:

```js
let options = {
  title: "Menu",
};

let { width = 100, height = 200, title } = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
```

### El patrón resto `…`

Podemos usar el patrón resto de la misma forma que lo usamos con arrays. Esto no es soportado en algunos navegadores antiguos, pero funciona en los navegadores modernos.

Se ve así:

```js
let options = {
  title: "Menu",
  height: 200,
  width: 100,
};

// title = propiedad llamada title
// rest = objeto con el resto de las propiedades
let { title, ...rest } = options;

// ahora title="Menu", rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100
```

## Desestructuración anidada

Si un objeto o array contiene objetos y arrays anidados, podemos utilizar patrones del lado izquierdo más complejos para extraer porciones más profundas.

En el código de abajo `options` tiene otro objeto en la propiedad `size` y un array en la propiedad `items`. El patrón en el lado izquierdo de la asignación tiene la misma estructura para extraer valores de ellos:

```js
let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// la asignación desestructurante fue dividida en varias líneas para mayor claridad
let {
  size: {
    // colocar tamaño aquí
    width,
    height,
  },
  items: [item1, item2], // asignar ítems aquí
  title = "Menu", // no se encuentra en el objeto (se utiliza valor predeterminado)
} = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200
alert(item1); // Cake
alert(item2); // Donut
```

## Resumen

- La asignación desestructurante permite mapear instantáneamente un objeto o array en varias variables.

- La sintaxis completa para objeto:

```js
let {prop : varName = default, ...rest} = object
```

Esto significa que la propiedad `prop` se asigna a la variable `varName`; pero si no existe tal propiedad, se usa el valor `default`.

- Las propiedades de objeto que no fueron mapeadas son copiadas al objeto `rest`.

- La sintaxis completa para array:

```js
let [item1 = default, item2, ...resto] = array
```

El primer item va a `item1`, el segundo a `item2`, todos los ítems restantes crean el array resto.

- Es posible extraer información desde arrays/objetos anidados, para esto el lado izquierdo debe tener la misma estructura que el lado derecho.

## Ejercicio

Tenemos un objeto:

```js
let user = {
  name: "John",
  years: 30,
};
```

Escriba la asignación desestructurante que asigne las propiedades:

- `name` en la variable `name`.
- years en la variable `age`.
- `isAdmin` en la variable `isAdmin` (false, si no existe tal propiedad)
  Este es un ejemplo de los valores después de su asignación:

```js
let user = { name: "John", years: 30 };

// tu código al lado izquierdo:
// ... = user

alert(name); // John
alert(age); // 30
alert(isAdmin); // false
```
