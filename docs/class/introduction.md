# Clases

En la práctica a menudo necesitamos crear muchos objetos del mismo tipo: usuarios, bienes, lo que sea.

Como ya sabemos del capítulo Constructor, operador `new`, `new function` puede ayudar con eso.

Pero en JavaScript moderno hay un constructor más avanzado, “class”, que introduce características nuevas muy útiles para la programación orientada a objetos.

## Sintaxis de `class`

La sintáxis básica es:

```js
class MyClass {
  // métodos de clase
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Entonces usamos `new MyClass()` para crear un objeto nuevo con todos los métodos listados.

El método `constructor()` es llamado automáticamente por `new`, así podemos inicializar el objeto allí.

Por ejemplo:

```js
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

// Uso:
let user = new User("John");
user.sayHi();
```

Cuando se llama a `new User("John")`:

1. Un objeto nuevo es creado.
2. El `constructor` se ejecuta con el argumento dado y lo asigna a `this.name`.

…Entonces podemos llamar a sus métodos, como `user.sayHi()`.

## Expresión de clases

Al igual que las funciones, las clases pueden ser definidas dentro de otra expresión, pasadas, devueltas, asignadas, etc.

Aquí hay un ejemplo de una expresión de clase:

```js
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

Al igual que las expresiones de función, las expresiones de clase pueden tener un nombre.

Si una expresión de clase tiene un nombre, este es visible solamente dentro de la clase.

```js
// Expresiones de clase con nombre
// ("Named Class Expression" no figura así en la especificación, pero es equivalente a "Named Function Expression")
let User = class MyClass {
  sayHi() {
    alert(MyClass); // El nombre de MyClass solo es visible dentro de la clase
  }
};

new User().sayHi(); // Funciona, muestra la definición de MyClass

alert(MyClass); // error, el nombre de MyClass no es visible fuera de la clase
```

## Getters/Setters

Aquí hay un ejemplo de `user.name`, implementado usando `get/set`:

```js
class User {
  constructor(name) {
    // invoca el setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Nombre demasiado corto.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Nombre demasiado corto.
```

## Campos de clase

Hasta ahora, nuestras clases solamente tenían métodos.

“Campos de clase” es una sintaxis que nos permite agregar una propiedad cualquiera.

Por ejemplo, agreguemos la propiedad name a la clase User:

```js
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
```

Así, simplemente escribimos " = " en la declaración, y eso es todo.

También podemos asignar valores usando expresiones más complejas y llamados a función:

```js
class User {
  name = prompt("Name, please?", "John");
}

let user = new User();
alert(user.name); // John
```
