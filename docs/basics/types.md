# Tipos de datos

Un valor en JavaScript siempre pertenece a un tipo de dato determinado. Por ejemplo, un string o un número.

Podemos almacenar un valor de cualquier tipo dentro de una variable. Por ejemplo, una variable puede contener en un momento un string y luego almacenar un número:

```js
// no hay error
let message = "hola";
message = 123456;
```

Los lenguajes de programación que permiten estas cosas, como JavaScript, se denominan “dinámicamente tipados”, lo que significa que allí hay tipos de datos, pero las variables no están vinculadas rígidamente a ninguno de ellos.

## Number

```js
let n = 123;
n = 12.345;
```

El tipo number representa tanto números enteros como de punto flotante.

Hay muchas operaciones para números. Por ejemplo, multiplicación `*`, división `/`, suma `+`, resta `-`, y demás.

## BigInt

En JavaScript, el tipo “number” no puede representar de forma segura valores enteros mayores que `(2^53-1)` (eso es 9007199254740991), o menor que `-(2^53-1)` para negativos.

Un valor `BigInt` se crea agregando `n` al final de un entero:

```js
// la "n" al final significa que es un BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

## String

Un string en JavaScript es una cadena de caracteres y debe colocarse entre comillas.

```js
let str = "Hola";
let str2 = "Las comillas simples también están bien";
let phrase = `se puede incrustar otro ${str}`;
```

En JavaScript, hay 3 tipos de comillas.

- Comillas dobles: " ".
- Comillas simples: ' '.
- Backticks (comillas invertidas): ``.

Las comillas dobles y simples son comillas “sencillas” (es decir, funcionan igual). No hay diferencia entre ellas en JavaScript.

Los backticks son comillas de “funcionalidad extendida”. Nos permiten incrustar variables y expresiones en una cadena de caracteres encerrándolas en ${...}, por ejemplo:

```js
let name = "John";

// incrustar una variable
alert(`Hola, ${name}!`); // Hola, John!

// incrustar una expresión
alert(`el resultado es ${1 + 2}`); //el resultado es 3
```

La expresión dentro de `${...}` se evalúa y el resultado pasa a formar parte de la cadena. Podemos poner cualquier cosa ahí dentro: una variable como `name`, una expresión aritmética como 1 + 2, o algo más complejo.

## Boolean

El tipo boolean tiene sólo dos valores posibles: `true` y `false`.

Este tipo se utiliza comúnmente para almacenar valores de sí/no: `true` significa “sí, correcto, verdadero”, y `false` significa “no, incorrecto, falso”.

Por ejemplo:

```js
let nameFieldChecked = true; // sí, el campo name está marcado
let ageFieldChecked = false; // no, el campo age no está marcado
```

Los valores booleanos también son el resultado de comparaciones:

```js
let isGreater = 4 > 1;

alert(isGreater); // verdadero (el resultado de la comparación es "sí")
```

## `Null`

El valor especial null no pertenece a ninguno de los tipos descritos anteriormente.

Forma un tipo propio separado que contiene sólo el valor null:

```js
let age = null;
```

En JavaScript, null no es una “referencia a un objeto inexistente” o un “puntero nulo” como en otros lenguajes.

Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.

El código anterior indica que el valor de age es desconocido o está vacío por alguna razón.

## `undefined`

El valor especial `undefined` también se distingue. Hace un tipo propio, igual que `null`.

El significado de `undefined` es “valor no asignado”.

Si una variable es declarada, pero no asignada, entonces su valor es `undefined`:

```js
let age;

alert(age); // muestra "undefined"
```

Técnicamente, es posible asignar undefined a cualquier variable:

```js
let age = 100;

// cambiando el valor a undefined
age = undefined;

alert(age); // "undefined"
```

Normalmente, usamos `null` para asignar un valor “vacío” o “desconocido” a una variable, mientras `undefined` es un valor inicial reservado para cosas que no han sido asignadas.

## Object y Symbol

El tipo `object` es especial.

Todos los demás tipos se llaman “primitivos” porque sus valores pueden contener una sola cosa (ya sea una cadena, un número, o lo que sea). Por el contrario, los objetos se utilizan para almacenar colecciones de datos y entidades más complejas.

El tipo `Symbol` se utiliza para crear identificadores únicos para los objetos.

## Operador `typeof`

El operador `typeof` devuelve el tipo de dato del operando. Es útil cuando queremos procesar valores de diferentes tipos de forma diferente o simplemente queremos hacer una comprobación rápida.

La llamada a `typeof x` devuelve una cadena con el nombre del tipo:

```js
typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"
```

## Resumen

Hay 8 tipos básicos en JavaScript.

Siete tipos de datos primitivos

- `number` para números de cualquier tipo: enteros o de punto flotante, los enteros están limitados por ±(2^53-1).
- `bigint` para números enteros de longitud arbitraria.
- `string` para cadenas. Una cadena puede tener cero o más caracteres, no hay un tipo especial para un único carácter.
- `boolean` para verdadero y falso: true/false.
- `null` para valores desconocidos – un tipo independiente que tiene un solo valor nulo.
- `undefined` para valores no asignados – un tipo independiente que tiene un único valor “indefinido”.
  symbol para identificadores únicos.

Y un tipo de dato no primitivo:

- `object` para estructuras de datos complejas.

El operador typeof nos permite ver qué tipo está almacenado en una variable.

Dos formas: `typeof x` o `typeof(x)`.
Devuelve una cadena con el nombre del tipo. Por ejemplo "string".
