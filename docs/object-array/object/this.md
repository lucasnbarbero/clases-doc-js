# Métodos del objeto, `this`

Los objetos son creados usualmente para representar entidades del mundo real, como usuarios, órdenes, etc.:

```js
let user = {
  name: "John",
  age: 30,
};
```

Y en el mundo real un usuario puede _actuar_: seleccionar algo del carrito de compras, hacer login, logout, etc.

Estas acciones se implementan asignando funciones a las propiedades del objeto.

## Ejemplos de métodos

Para empezar, enseñemos al usuario `user` a decir hola:

```js{6-8}
let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  alert("¡Hola!");
};

user.sayHi(); // ¡Hola!
```

Aquí simplemente usamos una expresión de función para crear la función y asignarla a la propiedad `user.sayHi` del objeto.

Entonces la llamamos con `user.sayHi()`. ¡El usuario ahora puede hablar!

Una función que es la propiedad de un objeto es denominada su método.

Así, aquí tenemos un método `sayHi` del objeto `user`.

:::tip Programación orientada a objetos
Cuando escribimos nuestro código usando objetos que representan entidades, eso es llamado Programación Orientada a Objetos, abreviado: “POO”.
:::

## Formas abreviadas para los métodos

Existe una sintaxis más corta para los métodos en objetos literales:

```js {10}
// estos objetos hacen lo mismo

user = {
  sayHi: function () {
    alert("Hello");
  },
};

user = {
  sayHi() {
    // igual que "sayHi: function(){...}"
    alert("Hello");
  },
};
```

Como se demostró, podemos omitir `function` y simplemente escribir `sayHi()`.

A decir verdad, las notaciones no son completamente idénticas. Hay diferencias sutiles relacionadas a la herencia de objetos que por ahora no son relevantes. En casi todos los casos la sintaxis abreviada es la preferida.

## `this` en métodos

Es común que un método de objeto necesite acceder a la información almacenada en el objeto para cumplir su tarea.

Por ejemplo, el código dentro de `user.sayHi()` puede necesitar el nombre del usuario `user`.

**Para acceder al objeto, un método puede usar la palabra clave `this`.**

El valor de `this` es el objeto “antes del punto”, el usado para llamar al método.

Por ejemplo:

```js{6-7}
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" es el "objeto actual"
    alert(this.name);
  },
};

user.sayHi(); // John
```

Aquí durante la ejecución de `user.sayHi()`, el valor de this será `user`.

Técnicamente, también es posible acceder al objeto sin `this`, haciendo referencia a él por medio de la variable externa:

```js{6}
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" en vez de "this"
  },
};
```

…Pero tal código no es confiable. Si decidimos copiar `user` a otra variable, por ejemplo `admin = user` y sobrescribir `user` con otra cosa, entonces accederá al objeto incorrecto.

```js{6,13}
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // lleva a un error
  },
};

let admin = user;
user = null; // sobrescribimos para hacer las cosas evidentes

admin.sayHi(); // TypeError: No se puede leer la propiedad 'name' de null
```

Si usamos `this.name` en vez de `user.name` dentro de `alert`, entonces el código funciona.

## Las funciones de flecha no tienen `this`

Las funciones de flecha son especiales: ellas no tienen su “propio” `this`. Si nosotros hacemos referencia a `this` desde tales funciones, esta será tomada desde afuera de la función “normal”.

Por ejemplo, aquí `arrow()` usa `this` desde fuera del método `user.sayHi()`:

```js
let user = {
  firstName: "Lucas",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Lucas
```

Esto es una característica especial de las funciones de flecha, útil cuando no queremos realmente un `this` separado sino tomarlo de un contexto externo.

## Ejercicio

#### Crea una calculadora

Crea un objeto `calculator` con tres métodos:

`read()` pide dos valores y los almacena como propiedades de objeto con nombres `a` y `b`.
`sum()` devuelve la suma de los valores almacenados.
`mul()` multiplica los valores almacenados y devuelve el resultado.

```js
let calculator = {
  // ... tu código ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
```
