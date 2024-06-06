# Propiedades y métodos estáticos

## Métodos `static`

Un método static es un método que pertenece a la clase en sí misma y no a las instancias de la clase. Esto significa que puedes llamar a un método static sin necesidad de crear una instancia de la clase.

#### ¿Para qué se usan los métodos `static`?

- **Utilidades y helpers:** Se utilizan comúnmente para definir funciones que no dependen del estado de una instancia específica. Por ejemplo, funciones de utilidad o de ayuda que realizan operaciones comunes relacionadas con la clase.

- **Funciones de fábrica:** Pueden ser usadas para crear instancias de la clase de maneras específicas, manteniendo la lógica de creación centralizada en la clase.

- **Acceso a propiedades estáticas:** Si tienes propiedades estáticas en tu clase, los métodos estáticos pueden acceder a ellas y manipularlas.

### ¿Cómo se definen los métodos `static`?

Para definir un método `static`, simplemente usas la palabra clave `static` antes del nombre del método en la clase. Aquí tienes un ejemplo sencillo:

```js
class Calculadora {
  // Método estático
  static sumar(a, b) {
    return a + b;
  }

  // Método no estático
  restar(a, b) {
    return a - b;
  }
}

// Llamando al método estático
console.log(Calculadora.sumar(5, 3)); // 8

// Intentando llamar al método estático desde una instancia - esto dará un error
const calc = new Calculadora();
console.log(calc.sumar(5, 3)); // Error: calc.sumar is not a function

// Llamando al método no estático desde una instancia
console.log(calc.restar(5, 3)); // 2
```

### Acceso a otros métodos estáticos

Los métodos `static` pueden llamar a otros métodos `static` dentro de la misma clase usando `this`. Aquí tienes un ejemplo:

```js
class Conversor {
  static aCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  static aFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  static mostrarConversion(celsius) {
    const fahrenheit = this.aFahrenheit(celsius);
    console.log(`${celsius}°C es igual a ${fahrenheit}°F`);
  }
}

// Llamando al método estático que utiliza otros métodos estáticos
Conversor.mostrarConversion(25); // "25°C es igual a 77°F"
```

### Consideraciones

- Herencia: Los métodos `static` también se heredan, lo que permite que las clases derivadas los utilicen o los sobrescriban.

## Propiedades `static`

Al igual que los métodos estáticos, las propiedades estáticas pertenecen a la clase en sí misma en lugar de a las instancias individuales de la clase. Esto significa que todas las instancias comparten la misma referencia a la propiedad estática, y cualquier modificación realizada en una instancia se reflejará en todas las demás.

### ¿Para qué se usan las propiedades estáticas?

- **Variables compartidas:** Son útiles para definir variables que deben ser compartidas entre todas las instancias de una clase.

- **Datos constantes:** Pueden utilizarse para definir constantes que no cambian durante toda la vida útil de la aplicación.

- **Contadores y seguimiento de estado:** A menudo se utilizan para realizar un seguimiento de estadísticas o contadores que son relevantes para toda la clase.

### ¿Cómo se definen las propiedades estáticas?

Para definir una propiedad estática, simplemente la declaras dentro de la clase y le precedes la palabra clave `static`. Aquí tienes un ejemplo:

```js
class Contador {
  static contador = 0;

  static incrementarContador() {
    this.contador++;
  }

  static obtenerContador() {
    return this.contador;
  }
}

// Accediendo y modificando la propiedad estática
Contador.incrementarContador();
console.log(Contador.obtenerContador()); // 1

Contador.incrementarContador();
console.log(Contador.obtenerContador()); // 2
```

### Acceso a las propiedades estáticas

Puedes acceder a las propiedades estáticas directamente desde la clase, sin necesidad de crear una instancia de la misma. Se accede a través del nombre de la clase seguido de un punto y el nombre de la propiedad estática.

```js
console.log(Contador.contador); // 2
```

### Herencia y propiedades estáticas

Las propiedades estáticas también se heredan, lo que significa que las subclases pueden acceder y modificar las propiedades estáticas definidas en la clase base.

```js
class SubContador extends Contador {
  static mostrarContador() {
    console.log(`El contador es: ${this.contador}`);
  }
}

SubContador.mostrarContador(); // "El contador es: 2"
```

### Consideraciones

- **Alcance y contexto:** Las propiedades estáticas se definen en el contexto de la clase en sí misma y no pueden ser accedidas desde las instancias de la clase.

- **Inicialización:** Puedes inicializar propiedades estáticas en la declaración o dentro de un método estático.

```js
class Ejemplo {
  static prop1 = "Hola";
  static prop2;

  static inicializar() {
    this.prop2 = "Mundo";
  }
}

console.log(Ejemplo.prop1); // "Hola"
console.log(Ejemplo.prop2); // undefined

Ejemplo.inicializar();

console.log(Ejemplo.prop2); // "Mundo"
```
