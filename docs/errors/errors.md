# Manejo de errores

No importa lo buenos que seamos en la programación, a veces nuestros scripts tienen errores. Pueden ocurrir debido a nuestros descuidos, una entrada inesperada del usuario, una respuesta errónea del servidor y por otras razones más.

Por lo general, un script “muere” (se detiene inmediatamente) en caso de error, imprimiéndolo en la consola.

Pero hay una construcción sintáctica `try...catch` que nos permite “atrapar” errores para que el script pueda, en lugar de morir, hacer algo más razonable.

## La sintaxis “try…catch”

La construcción `try...catch` tiene dos bloques principales: `try`, y luego `catch`:

```js
try {
  // código...
} catch (err) {
  // manipulación de error
}
```

Funciona así:

1. Primero, se ejecuta el código en `try {...}`.
2. Si no hubo errores, se ignora `catch (err)`: la ejecución llega al final de `try` y continúa, omitiendo `catch`.
3. Si se produce un error, la ejecución de `try` se detiene y el control fluye al comienzo de `catch (err)`. La variable `err` (podemos usar cualquier nombre para ella) contendrá un objeto de error con detalles sobre lo que sucedió.

Entonces, un error dentro del bloque `try {...}` no mata el script; tenemos la oportunidad de manejarlo en `catch`.

Veamos algunos ejemplos.

- Un ejemplo sin errores: muestra `alert ` `(1)` y `(2)`:

```js
try {
  alert("Inicio de intentos de prueba"); // (1) <--

  // ...no hay errores aquí

  alert("Fin de las ejecuciones de try"); // (2) <--
} catch (err) {
  alert("Se ignora catch porque no hay errores"); // (3)
}
```

- Un ejemplo con un error: muestra (1) y (3):

```js
try {
  alert("Inicio de ejecuciones try"); // (1) <--

  lalala; // error, variable no está definida!

  alert("Fin de try (nunca alcanzado)"); // (2)
} catch (err) {
  alert(`¡Un error ha ocurrido!`); // (3) <--
}
```

::: warning `try...catch` solo funciona para errores de tiempo de ejecución
Para que `try..catch` funcione, el código debe ser ejecutable. En otras palabras, debería ser JavaScript válido.

No funcionará si el código es sintácticamente incorrecto, por ejemplo, si hay llaves sin cerrar:

```js
try {
  {{{{{{{{{{{{
} catch(err) {
  alert("El motor no puede entender este código, no es válido.");
}
```

El motor de JavaScript primero lee el código y luego lo ejecuta. Los errores que ocurren en la fase de lectura se denominan errores de “tiempo de análisis” y son irrecuperables (desde dentro de ese código). Eso es porque el motor no puede entender el código.

Entonces, `try...catch` solo puede manejar errores que ocurren en un código válido. Dichos errores se denominan “errores de tiempo de ejecución” o, a veces, “excepciones”.
:::

:::warning `try...catch` trabaja sincrónicamente
Si ocurre una excepción en el código “programado”, como en setTimeout, entonces try..catch no lo detectará:

```js
try {
  setTimeout(function () {
    noSuchVariable; // el script morirá aquí
  }, 1000);
} catch (err) {
  alert("no funcionará");
}
```

Esto se debe a que la función en sí misma se ejecuta más tarde, cuando el motor ya ha abandonado la construcción try...catch.

Para detectar una excepción dentro de una función programada, try...catch debe estar dentro de esa función:

```js
setTimeout(function () {
  try {
    noSuchVariable; // try...catch maneja el error!
  } catch {
    alert("El error se detecta aquí!");
  }
}, 1000);
```

:::

## Objeto `Error`

Cuando se produce un error, JavaScript genera un objeto que contiene los detalles al respecto. El objeto se pasa como argumento para `catch`:

```js
try {
  // ...
} catch (err) {
  // <-- el "objeto error", podría usar otra palabra en lugar de err
  // ...
}
```

Para todos los errores integrados, el objeto error tiene dos propiedades principales:

`name`: Nombre de error. Por ejemplo, para una variable indefinida que es `ReferenceError`.
`message`: Mensaje de texto sobre detalles del error.

Hay otras propiedades no estándar disponibles en la mayoría de los entornos. Uno de los más utilizados y compatibles es:

`stack`

Pila de llamadas actual: una cadena con información sobre la secuencia de llamadas anidadas que condujeron al error. Utilizado para fines de depuración.

Por ejemplo:

```js
function funcionC() {
  throw new Error("¡Error en función C!");
}

function funcionB() {
  funcionC();
}

function funcionA() {
  funcionB();
}

try {
  funcionA();
} catch (error) {
  console.error(error.stack);
}
```

En este código, tenemos tres funciones anidadas: `funcionA`, `funcionB` y `funcionC`. La función `funcionC` lanza un error usando throw, y esta función se llama desde `funcionB`, que a su vez se llama desde `funcionA`.

Cuando ejecutamos este código y se produce el error en funcionC, el bloque catch captura el error y lo maneja. Y si imprimimos `error.stack`, obtendremos una cadena de texto que muestra la secuencia de llamadas de funciones que llevaron al error:

```
Error: ¡Error en función C!
    at funcionC (<anonymous>:2:11)
    at funcionB (<anonymous>:6:5)
    at funcionA (<anonymous>:10:5)
    at <anonymous>:14:5
```

Esta salida nos dice que el error se produjo en la línea 2 de la función `funcionC`. Además, muestra que `funcionC` fue llamada desde funcionB, que a su vez fue llamada desde `funcionA`, y finalmente, `funcionA` fue llamada desde el contexto global (línea 14). Esto nos da una idea clara de cómo se llegó al error y qué funciones estaban involucradas.

## Usando “try…catch”

JavaScript admite el método `JSON.parse(str)` para leer valores codificados con JSON.

Por lo general, se utiliza para decodificar datos recibidos a través de la red, desde el servidor u otra fuente.

Lo recibimos y llamamos a `JSON.parse` así:

```js
let json = '{"name":"John", "age": 30}'; // datos del servidor

let user = JSON.parse(json); // convierte la representación de texto a objeto JS

// ahora user es un objeto con propiedades de la cadena
alert(user.name); // John
alert(user.age); // 30
```

Si `json` está mal formado, `JSON.parse` genera un error, por lo que el script “muere”.

De esta manera, si algo anda mal con los datos, el visitante nunca lo sabrá (a menos que abra la consola del desarrollador). Y a la gente realmente no le gusta cuando algo “simplemente muere” sin ningún mensaje de error.

Usemos `try...catch` para manejar el error:

```js
let json = "{ json malo }";

try {
  let user = JSON.parse(json); // <-- cuando ocurre un error ...
  alert(user.name); // no funciona
} catch (err) {
  // ...la ejecución salta aquí
  alert(
    "Nuestras disculpas, los datos tienen errores, intentaremos solicitarlos una vez más."
  );
  alert(err.name);
  alert(err.message);
}
```

Aquí usamos el bloque `catch` solo para mostrar el mensaje, pero podemos hacer mucho más: enviar una nueva solicitud de red, sugerir una alternativa al visitante, enviar información sobre el error a una instalación de registro.

## Lanzando nuestros propios errores

¿Qué sucede si json es sintácticamente correcto, pero no tiene una propiedad requerida de name?

Como este:

```js
let json = '{ "age": 30 }'; // dato incompleto

try {
  let user = JSON.parse(json); // <-- sin errores
  alert(user.name); // sin nombre!
} catch (err) {
  alert("no se ejecuta");
}
```

Aquí `JSON.parse` se ejecuta normalmente, pero la ausencia de `name` es en realidad un error nuestro.

Para unificar el manejo de errores, usaremos el operador `throw`.

### El operador `throw`

El operador throw genera un error.

La sintaxis es:

```js
throw <error object>
```

Técnicamente, podemos usar cualquier cosa como un objeto error. Eso puede ser incluso un primitivo, como un número o una cadena, pero es mejor usar objetos, preferiblemente con propiedades `name` y `message` (para mantenerse algo compatible con los errores incorporados).

## `try…catch…finally`

La construcción `try...catch` puede tener una cláusula de código más: `finally`.

Si existe, se ejecuta en todos los casos:

- después de `try`, si no hubo errores,
- después de `catch`, si hubo errores.

La sintaxis extendida se ve así:

```js
try {
... intenta ejecutar el código ...
} catch (err) {
... manejar errores ...
} finally {
... ejecutar siempre ...
}
```
