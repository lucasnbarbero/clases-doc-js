# Herencia de clase

La herencia de clase es el modo para que una clase extienda a otra.

De esta manera podemos añadir nueva funcionalidad a la ya existente.

## La palabra clave `extends`

Digamos que tenemos la clase `Animal`:

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} corre a una velocidad de ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} se queda quieto.`);
  }
}

let animal = new Animal("Mi animal");
```

Y nos gustaría crear otra clase `Rabbit`.

Como los conejos son animales, la clase `Rabbit` debería basarse en `Animal` y así tener acceso a métodos animales, para que los conejos puedan hacer lo que los animales “genéricos” pueden hacer.

La sintaxis para extender otra clase es: `class Hijo extends Padre`.

Construyamos la clase `Rabbit` que herede de `Animal`:

```js
class Rabbit extends Animal {
  hide() {
    alert(`¡${this.name} se esconde!`);
  }
}

let rabbit = new Rabbit("Conejo Blanco");

rabbit.run(5); // Conejo Blanco corre a una velocidad de 5.
rabbit.hide(); // ¡Conejo Blanco se esconde!
```

Los objetos de la clase `Rabbit` tienen acceso a los métodos de `Rabbit`, como `rabbit.hide()`, y también a los métodos `Animal`, como `rabbit.run()`.

:::tip Cualquier expresión está permitida después de extends
La sintaxis de clase permite especificar no solo una clase, sino cualquier expresión después de extends.

Por ejemplo, una llamada a función que genera la clase padre:

```js
function f(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

class User extends f("Hola") {}

new User().sayHi(); // Hola
```

:::

Observa que `class User` hereda del resultado de `f("Hola")`.

Eso puede ser útil para patrones de programación avanzados cuando usamos funciones para generar clases dependiendo de muchas condiciones y podamos heredar de ellas.

## Sobreescribir un método

Ahora avancemos y sobrescribamos un método. Por defecto, todos los métodos que no están especificados en la clase `Rabbit` se toman directamente “tal cual” de la clase `Animal`.

Pero si especificamos nuestro propio método `stop()` en `Rabbit`, es el que se utilizará en su lugar:

```js
class Rabbit extends Animal {
  stop() {
    // ...esto se usará para rabbit.stop()
    // en lugar de stop() de la clase Animal
  }
}
```

Sin embargo, no siempre queremos reemplazar totalmente un método padre sino construir sobre él, modificarlo o ampliar su funcionalidad. Hacemos algo con nuestro método, pero queremos llamar al método padre antes, después o durante el proceso.

Las clases proporcionan la palabra clave `super` para eso.

Por ejemplo, hagamos que nuestro conejo se oculte automáticamente cuando se detenga:

```js {24-25}
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} corre a una velocidad de ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} se queda quieto.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`¡${this.name} se esconde!`);
  }

  stop() {
    super.stop(); // llama el stop padre
    this.hide(); // y luego hide
  }
}

let rabbit = new Rabbit("Conejo Blanco");

rabbit.run(5); // Conejo Blanco corre a una velocidad de 5.
rabbit.stop(); // Conejo Blanco se queda quieto. ¡Conejo Blanco se esconde!
```

Ahora `Rabbit` tiene el método `stop` que llama al padre `super.stop()` en el proceso.

## Sobrescribir un constructor

Con los constructores se pone un poco complicado.

Hasta ahora, `Rabbit` no tenía su propio `constructor`.

Si una clase extiende otra clase y no tiene `constructor`, se genera el siguiente `constructor` “vacío”:

```js
class Rabbit extends Animal {
  // es generado por extender la clase sin constructor propio
  constructor(...args) {
    super(...args);
  }
}
```

Como podemos ver, básicamente llama al `constructor` padre pasándole todos los argumentos. Esto sucede si no escribimos un constructor propio.

Ahora agreguemos un constructor personalizado a Rabbit. Especificará earLength además de name:

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// No funciona!
let rabbit = new Rabbit("Conejo Blanco", 10); // Error: this no está definido.
```

Tenemos un error. Ahora no podemos crear conejos. ¿Qué salió mal?

La respuesta corta es:

- **Los constructores en las clases heredadas deben llamar a `super(...)`, y (¡!) hacerlo antes de usar this.**

…¿Pero por qué? ¿Qué está pasando aquí? De hecho, el requisito parece extraño.

En JavaScript, hay una distinción entre una función constructora de una clase heredera (llamada “constructor derivado”) y otras funciones. Un constructor derivado tiene una propiedad interna especial `[[ConstructorKind]]:"derived"`. Esa es una etiqueta interna especial.

Esa etiqueta afecta su comportamiento con `new`.

- Cuando una función regular se ejecuta con `new`, crea un objeto vacío y lo asigna a `this`.
- Pero cuando se ejecuta un constructor derivado, no hace esto. Espera que el constructor padre haga este trabajo.

Entonces un constructor derivado debe llamar a `super` para ejecutar su constructor padre (base), de lo contrario no se creará el objeto para `this`. Y obtendremos un error.

Para que el constructor `Rabbit` funcione, necesita llamar a `super()` antes de usar `this`, como aquí:

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// todo bien ahora
let rabbit = new Rabbit("Conejo Blanco", 10);
alert(rabbit.name); // Conejo Blanco
alert(rabbit.earLength); // 10
```
