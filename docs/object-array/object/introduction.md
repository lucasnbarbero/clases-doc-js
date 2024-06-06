# Objetos

Como aprendimos en el capítulo [Tipos de datos](../../basics/types.md), hay ocho tipos de datos en JavaScript. Siete de ellos se denominan “primitivos”, porque sus valores contienen solo un dato (sea un `string`, un número o lo que sea).

En contraste, los objetos son usados para almacenar colecciones de varios datos y entidades más complejas asociados con un nombre clave. En JavaScript, los objetos penetran casi todos los aspectos del lenguaje. Por lo tanto, debemos comprenderlos primero antes de profundizar en cualquier otro lugar.

Podemos crear un objeto usando las llaves `{…}` con una lista opcional de _propiedades_. Una propiedad es un par “key:value”, donde `key` es un string, y `value` puede ser cualquier cosa.

Se puede crear un objeto vacio utilizando estas dos sintaxis:

```js
let user = new Object(); // sintaxis de "constructor de objetos"
let user = {}; // sintaxis de "objeto literal"
```

Normalmente se utilizan las llaves {...}. Esa declaración se llama objeto literal.

## Literales y objetos

Podemos poner inmediatamente algunas propiedades dentro de `{...}` como pares “clave:valor”:

```js
let user = {
  // un objeto
  name: "John", // En la clave "name" se almacena el valor "John"
  age: 30, // En la clave "age" se almacena el valor 30
};
```

Una propiedad tiene una clave (también conocida como “nombre” o “identificador”) antes de los dos puntos ":" y un valor a la derecha.

En el objeto user hay dos propiedades:

La primera propiedad tiene la clave "name" y el valor "John".
La segunda tienen la clave "age" y el valor 30.

Podemos agregar, eliminar y leer archivos de él en cualquier momento.

Se puede acceder a los valores de las propiedades utilizando la notación de punto:

```js
// Obteniendo los valores de las propiedades del objeto:
alert(user.name); // John
alert(user.age); // 30
```

El valor puede ser de cualquier tipo. Agreguemos uno booleano:

```js
user.isAdmin = true;
```

Para eliminar una propiedad podemos usar el operador delete:

```js
delete user.age;
```

También podemos nombrar propiedades con más de una palabra. Pero, de ser así, debemos colocar la clave entre comillas `"..."`:

```js
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // Las claves con más de una palabra deben ir entre comillas
};
```

## Corchetes

La notación de punto no funciona para acceder a propiedades con claves de más de una palabra:

```js
// Esto nos daría un error de sintaxis
user.likes birds = true
```

JavaScript no entiende eso. Piensa que hemos accedido a user.likes y entonces nos da un error de sintaxis cuando aparece el inesperado birds.

El punto requiere que la clave sea un identificador de variable válido. Eso implica que: no contenga espacios, no comience con un dígito y no incluya caracteres especiales ($ y \_ sí se permiten).

Existe una “notación de corchetes” alternativa que funciona con cualquier string:

```js
let user = {};

// asignando
user["likes birds"] = true;

// obteniendo
alert(user["likes birds"]); // true

// eliminando
delete user["likes birds"];
```

Los corchetes también brindan una forma de obtener el nombre de la propiedad desde el resultado de una expresión (a diferencia de la cadena literal). Por ejemplo, a través de una variable:

```js
let key = "likes birds";

// Tal cual: user["likes birds"] = true;
user[key] = true;
```

Aquí la variable key puede calcularse en tiempo de ejecución o depender de la entrada del usuario y luego lo usamos para acceder a la propiedad. Eso nos da mucha flexibilidad.

Por ejemplo:

```js
let user = {
  name: "John",
  age: 30,
};

let key = prompt("¿Qué te gustaría saber acerca del usuario?", "name");

// acceso por medio de una variable
alert(user[key]); // John (si se ingresara "name")
```

La notación de punto no puede ser usada de manera similar:

```js
let user = {
  name: "John",
  age: 30,
};

let key = "name";
alert(user.key); // undefined
```

## Atajos para valores de propiedad

En el código real, a menudo usamos variables existentes como valores de los nombres de propiedades.

Por ejemplo:

```js
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...otras propiedades
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

En el ejemplo anterior las propiedades tienen los mismos nombres que las variables. El uso de variables para la creación de propiedades es tán común que existe un atajo para valores de propiedad especial para hacerla más corta.

En lugar de `name:name`, simplemente podemos escribir `name`, tal cual:

```js
function makeUser(name, age) {
  return {
    name, // igual que name:name
    age, // igual que age:age
    // ...
  };
}
```

Podemos usar ambos tipos de notación en un mismo objeto, la normal y el atajo:

```js
let user = {
  name, // igual que name:name
  age: 30,
};
```

## Limitaciones de nombres de propiedad

Como sabemos, una variable no puede tener un nombre igual a una de las palabras reservadas del lenguaje, como `for`, `let`, `return`, etc.

Pero para una propiedad de objeto no existe tal restricción:

```js
// Estas propiedades están bien
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6
```

En resumen, no hay limitaciones en los nombres de propiedades. Pueden ser cadenas o símbolos (un tipo especial para identificadores que se cubrirán más adelante).

Otros tipos se convierten automáticamente en cadenas.

Por ejemplo, un número 0 se convierte en cadena "0" cuando se usa como clave de propiedad:

```js
let obj = {
  0: "test", // igual que "0": "test"
};

// ambos alerts acceden a la misma propiedad (el número 0 se convierte a una cadena "0")
alert(obj["0"]); // test
alert(obj[0]); // test (la misma propiedad)
```

## Bucle `for...in`

Para recorrer todas las claves de un objeto existe una forma especial de bucle: `for..in`.

Sintaxis:

```js
for (key in object) {
  // se ejecuta el cuerpo para cada clave entre las propiedades del objeto
}
```

Por ejemplo, mostremos todas las propiedades de user:

```js
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // claves
  alert(key); // name, age, isAdmin
  // valores de las claves
  alert(user[key]); // John, 30, true
}
```

Nota que todas las construcciones “for” nos permiten declarar variables para bucle dentro del bucle, como `let key` aquí.

## Resumen

Los objetos son arreglos asociativos con varias características especiales.

Almacenan propiedades (pares de clave-valor), donde:

- Las claves de propiedad deben ser cadenas o símbolos (generalmente strings).
- Los valores pueden ser de cualquier tipo.

Para acceder a una propiedad, podemos usar:

- La notación de punto: `obj.property`.
- La notación de corchetes `obj["property"]`. Los corchetes permiten tomar la clave de una variable, como `obj[varWithKey]`.

Operadores adicionales:

- Para eliminar una propiedad: `delete obj.prop`.
- Para comprobar si existe una propiedad con la clave proporcionada: `"key" in obj`.
- Para crear bucles sobre un objeto: bucle `for (let key in obj)`.
