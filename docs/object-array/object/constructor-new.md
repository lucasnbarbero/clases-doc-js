# Constructor, operador `new`

El sintaxis habitual `{...}` nos permite crear un objeto. Pero a menudo necesitamos crear varios objetos similares, como múltiples usuarios, elementos de menú, etcétera.

Esto se puede realizar utilizando el constructor de funciones y el operador `new`.

## Función constructora

La función constructora es técnicamente una función normal. Aunque hay dos convenciones:

1. Son nombradas con la primera letra mayúscula.
2. Sólo deben ejecutarse con el operador `new`.

Por ejemplo:

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

Cuando una función es ejecutada con `new`, realiza los siguientes pasos:

1. Se crea un nuevo objeto vacío y se asigna a `this`.
2. Se ejecuta el cuerpo de la función. Normalmente se modifica `this` y se le agrega nuevas propiedades.
3. Se devuelve el valor de `this`.

En otras palabras, `new User(...)` realiza algo como:

```js
function User(name) {
  // this = {};  (implícitamente)

  // agrega propiedades a this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implícitamente)
}
```

Entonces `let user = new User("Jack")` da el mismo resultado que:

```js
let user = {
  name: "Jack",
  isAdmin: false,
};
```

Ahora si queremos crear otros usuarios, podemos llamar a `new User("Ann")`, `new User("Alice")`, etcétera. Mucho más corto que usar literales todo el tiempo y también fácil de leer.

Este es el principal propósito del constructor – implementar código de creación de objetos re-utilizables.

Técnicamente cualquier función (excepto las de flecha pues no tienen this) puede ser utilizada como constructor. Puede ser llamada con `new`, y ejecutará el algoritmo de arriba. La “primera letra mayúscula” es un acuerdo general, para dejar en claro que la función debe ser ejecutada con `new`.

## Métodos en constructor

Utilizar constructor de funciones para crear objetos nos da mucha flexibilidad. La función constructor puede tener argumentos que definan cómo construir el objeto y qué colocar dentro.

Por supuesto podemos agregar a `this` no sólo propiedades, sino también métodos.

Por ejemplo, `new User(name)` de abajo, crea un objeto con el `name` dado y el método `sayHi`:

```js
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("Mi nombre es: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // Mi nombre es: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

## Resumen

- Las funciones Constructoras o, más corto, constructores, son funciones normales, pero existe un común acuerdo para nombrarlas con la primera letra en mayúscula.
- Las funciones Constructoras sólo deben ser llamadas utilizando new. Tal llamado implica la creación de un this vacío al comienzo y devolver el this rellenado al final.

Podemos utilizar funciones constructoras para crear múltiples objetos similares.

## Ejercicios

### Crear nueva calculadora

Crear una función constructora `Calculator` que crea objetos con 3 métodos:

- `read()` pide dos valores usando prompt y los guarda en las propiedades del objeto con los nombres `a` y `b`.
- `sum()` devuelve la suma de estas propiedades.
- `mul()` devuelve el producto de la multiplicación de estas propiedades.

Por ejemplo:

```js
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
```

### Crear acumulador

Crear una función constructor `Accumulator(startingValue)`.

El objeto que crea debería:

- Almacene el “valor actual” en la propiedad `value`. El valor inicial se establece en el argumento del constructor `startingValue`.
- El método `read()` debe usar `prompt` para leer un nuevo número y agregarlo a `value`.

En otras palabras, la propiedad `value` es la suma de todos los valores ingresados por el usuario con el valor inicial `startingValue`.

Aquí está la demostración del código:

```js
let accumulator = new Accumulator(1); // valor inicial 1

accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario

alert(accumulator.value); // muestra la suma de estos valores
```
