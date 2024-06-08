# ES6

ES6 trae muchos cambios significativos al lenguaje. Veamos algunos de ellos:

## Función Arrow

```js
// ES5
// Imaginemos una variable data que incluye un array de objectos
var data = [{...}, {...}, {...}, ...];
data.forEach(function(elem){
	// Tratamos el elemento
    console.log(elem)
});
```

Con la función arrow => de ES6, el código anterior se sustituiría por:

```js
//ES6
var data = [{...}, {...}, {...}, ...];
data.forEach(elem => {
	console.log(elem);
});
```

## Clases

Ahora JavaScript tendrá clases, muy parecidas las funciones constructoras de objectos que realizabamos en el estándar anterior, pero ahora bajo el paradigma de clases, con todo lo que eso conlleva, como por ejemplo, herencia. Aunque no deja de ser un azúcar sintáctico (_Sugar Syntax_) porque en JavaScript no tenemos clases, tenemos prototipos.

```js
class LibroTecnico extends Libro {
  constructor(tematica, paginas) {
    super(tematica, paginas);
    this.capitulos = [];
    this.precio = "";
    // ...
  }
  metodo() {
    // ...
  }
}
```

## This

La variable this muchas veces se vuelve un dolor de cabeza. antíguamente teníamos que cachearlo en otra variable ya que solo hace referencia al contexto en el que nos encontremos. Por ejemplo, en el siguiente código si no hacemos `var that = this` dentro de la función `document.addEventListener`, this haría referencia a la función que pasamos por Callback y no podríamos llamar a `foo()`

```js
//ES3
var obj = {
	foo : function() {...},
    bar : function() {
    	var that = this;
        document.addEventListener("click", function(e) {
        	that.foo();
        });
    }
}
```

Ahora con ES6 y la función _Arrow_ => la cosa es todavía más visual y sencilla.

```js
//ES6
var obj = {
	foo : function() {...},
    bar : function() {
    	document.addEventListener("click", (e) => this.foo());
    }
}
```

## let y const

Ahora podemos declarar variables con let en lugar de var si no queremos que sean accesibles más allá de un ámbito. Por ejemplo:

```js
//ES5
(function () {
  console.log(x); // x no está definida aún.
  if (true) {
    var x = "hola mundo";
  }
  console.log(x);
  // Imprime "hola mundo", porque "var" hace que sea global
  // a la función;
})();

//ES6
(function () {
  if (true) {
    let x = "hola mundo";
  }
  console.log(x);
  //Da error, porque "x" ha sido definida dentro del "if"
})();
```

Ahora con const podemos crear constantes que sólo se puedan leer y no modificar a lo largo del código. Veamos un ejemplo

```js
(function() {
	const PI;
    PI = 3.15;
    // ERROR, porque ha de asignarse un valor en la
    // declaración
})();

(function() {
	const PI = 3.15;
    PI = 3.14159;
    // ERROR de nuevo, porque es sólo-lectura
})();
```

## Template string

Las plantillas de cadena, mejor conocidas como **template strings,** son una forma más fácil de crear:

- Cadenas con variables dentro (interpolación).
- Generar cadenas multilínea.
- Ejecutar expresiones, funciones y etiquetados.

```js
let saludo = `Hola soy un Template String`;
console.log(saludo); //Imprime Hola soy un Template String

//strings multilínea
let mensaje = `No es quien seas en el interior,
tus actos son los que te definen...
Batman`;
console.log(mensaje);
/*
Imprime
No es quien seas en el interior,
tus actos son los que te definen...
Batman
*/

//variables en strings (interpolación)
let nombre = "Jonathan";
console.log(`Hola ${nombre}`); //Imprime Hola Jonathan

//ejecutar expresiones
console.log(`Hola ${nombre}, tienes ${30 + 2} años`); //Imprime Hola Jonathan, tienes 32 años

//ejecutar funciones
let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  ol = `<ol>
    ${estaciones
      .map(function (estacion) {
        return `<li>${estacion}</li>`;
      })
      .join("")}
  </ol>`;

console.log(ol); //Imprime <ol><li>Primavera</li><li>Verano</li><li>Otoño</li><li>Invierno</li></ol>

//función de etiquetado
const etiqueta = function (cadena, variable) {
  console.log(cadena); //Imprime ["Hola ", "", raw: Array[2]]
  console.log(variable); //Imprime Ulises
  console.log(cadena[0] + variable); //Imprime Hola Ulises
};

let otroNombre = "Ulises";

etiqueta`Hola ${otroNombre}`;
```
