# Objetos

En JavaScript, un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. Los objetos pueden contener cualquier tipo de datos, incluyendo otros objetos. En pocas palabras, los objetos en JavaScript son entidades con propiedades que definen sus características y métodos que definen sus comportamientos.

Los objetos son uno de los tipos de datos más fundamentales en JavaScript y se utilizan para representar entidades del mundo real con características y comportamientos.

## Creación de objetos

Hay varias formas de crear objetos en JavaScript, pero las dos más comunes son mediante el uso de **literales de objeto** y **constructores de objetos**.

### Literales de objeto

Un literal de objeto es la forma más sencilla y directa de crear un objeto. Se define utilizando llaves `{}` y especificando las propiedades dentro de las llaves.

```js
// Creación de un objeto utilizando un literal de objeto
const persona = {
  nombre: "Lucas",
  edad: 30,
  profesion: "Desarrollador",
};

console.log(persona); // { nombre: 'Lucas', edad: 30, profesion: 'Desarrollador' }
```

Hemos creado un objeto `persona` con tres propiedades: `nombre`, `edad` y `profesion`.

### Constructores de Objetos

Otra forma de crear objetos es utilizando una función constructora. Una función constructora es una función que se utiliza con el operador `new` para crear instancias de un objeto.

```js
// Definición de una función constructora
function Persona(nombre, edad, profesion) {
  this.nombre = nombre;
  this.edad = edad;
  this.profesion = profesion;
}

// Creación de un objeto utilizando una función constructora
const persona1 = new Persona("Lucas", 30, "Desarrollador");
const persona2 = new Persona("María", 25, "Diseñadora");

console.log(persona1); // Persona { nombre: 'Lucas', edad: 30, profesion: 'Desarrollador' }
console.log(persona2); // Persona { nombre: 'María', edad: 25, profesion: 'Diseñadora' }
```

En el ejemplo anterior, la función `Persona` actúa como una plantilla para crear nuevos objetos `persona` con las propiedades `nombre`, `edad` y `profesion`.

## Propiedades y Métodos

Las propiedades de un objeto son los datos asociados al objeto, mientras que los métodos son funciones que operan sobre estos datos. Podemos acceder a las propiedades y métodos de un objeto utilizando la notación de punto (`.`) o la notación de corchetes (`[]`).

```js
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2021,
  arrancar: function () {
    console.log("El coche ha arrancado");
  },
};

// Acceder a propiedades utilizando la notación de punto
console.log(coche.marca); // Toyota
console.log(coche["modelo"]); // Corolla

// Llamar a un método
coche.arrancar(); // El coche ha arrancado
```

### Modificación de Propiedades

Podemos modificar las propiedades de un objeto en cualquier momento asignándoles nuevos valores.

```js
coche.año = 2022;
console.log(coche.año); // 2022
```

### Añadir y eliminar propiedades

Podemos añadir nuevas propiedades a un objeto o eliminar propiedades existentes utilizando las siguientes técnicas:

```js
// Añadir una nueva propiedad
coche.color = "Rojo";
console.log(coche.color); // Rojo

// Eliminar una propiedad
delete coche.color;
console.log(coche.color); // undefined
```

## Uso de `this`

Dentro de un método, la palabra clave `this` se refiere al objeto que contiene el método. Esto es útil para acceder a otras propiedades del mismo objeto.

```js
const libro = {
  titulo: "El Principito",
  autor: "Antoine de Saint-Exupéry",
  descripcion: function () {
    return `${this.titulo} es un libro escrito por ${this.autor}.`;
  },
};

console.log(libro.descripcion()); // El Principito es un libro escrito por Antoine de Saint-Exupéry.
```

## Iteración sobre propiedades

Podemos iterar sobre las propiedades de un objeto utilizando el bucle `for...in`.

```js
const estudiante = {
  nombre: "Ana",
  edad: 22,
  carrera: "Ingeniería",
};

for (let clave in estudiante) {
  console.log(`${clave}: ${estudiante[clave]}`);
}
// nombre: Ana
// edad: 22
// carrera: Ingeniería
```

## Métodos útiles de Object

JavaScript proporciona varios métodos incorporados para trabajar con objetos de manera más efectiva.

### Object.keys()

Devuelve un array con los nombres de las propiedades enumerables de un objeto.

```js
const keys = Object.keys(persona);
console.log(keys); // ["nombre", "edad", "nacionalidad"]
```

### Object.values()

Devuelve un array con los valores de las propiedades enumerables de un objeto.

```js
const values = Object.values(persona);
console.log(values); // ["Lucas", 30, "Argentina"]
```

### Object.entries()

Devuelve un array de arrays, donde cada subarray contiene un par clave-valor de las propiedades enumerables de un objeto.

```js
const entries = Object.entries(persona);
console.log(entries); // [["nombre", "Lucas"], ["edad", 30], ["nacionalidad", "Argentina"]]
```
