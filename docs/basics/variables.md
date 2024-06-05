# Variables

La mayoría del tiempo, una aplicación de JavaScript necesita trabajar con información. Aquí hay 2 ejemplos:

- Una tienda en línea – La información puede incluir los bienes a la venta y un “carrito de compras”.
- Una aplicación de chat – La información puede incluir los usuarios, mensajes, y mucho más.

Utilizamos las variables para almacenar esta información.

## ¿Que es una variable?

Una variable es un "almacén con un nombre" para guardar datos. Podemos usar variables para almacenar golosinas, visitantes, y otros datos.

Para generar una variable en JavaScript, se usa la palabra clave `var`.

La siguiente declaración genera (en otras palabras: declara o define) una variable con el nombre “message”:

```js
var message;
```

Ahora podemos introducir datos en ella al utilizar el operador de asignación `=`:

```js{3}
var message;

message = 'Hola';
```

La cadena ahora está almacenada en el área de la memoria asociada con la variable. La podemos acceder utilizando el nombre de la variable:

```js{4}
var message;
message = "Hola!";

alert(message); // muestra el contenido de la variable
```

Para ser concisos, podemos combinar la declaración de la variable y su asignación en una sola línea:

```js
var message = "Hola!"; // define la variable y asigna un valor

alert(message); // Hola!
```

También podemos declarar variables múltiples en una sola línea:

```js
var user = "John",
  age = 25,
  message = "Hola";
```

Esto puede parecer más corto, pero no es lo recomendado. Por el bien de la legibilidad, por favor utiliza una línea por variable.

La versión de líneas múltiples es un poco más larga, pero se lee más fácil:

```js
var user = "John";
var age = 25;
var message = "Hola";
```

Técnicamente, todas estas variantes hacen lo mismo. Así que, es cuestión de gusto personal y preferencia estética.

## Nombramiento de variables

Existen dos limitaciones de nombre de variables en JavaScript:

- El nombre únicamente puede incluir letras, dígitos, o los símbolos `$` y `_`.
- El primer carácter no puede ser un dígito.

Ejemplos de nombres válidos:

```js
var userName;
var test123;
```

Cuando el nombre contiene varias palabras, se suele usar el estilo camelCase (capitalización en camello), donde las palabras van pegadas una detrás de otra, con cada inicial en mayúscula: `miNombreMuyLargo`.

Ejemplos de nombres incorrectos:

```js
var 1a; // no puede iniciar con un dígito

var my-name;  // los guiones '-' no son permitidos en nombres de variables
```

## Constantes

Para declarar una variable constante (inmutable) use `const` en vez de `var`:

```js
const myBirthday = "09.01.1995";
```

Las variables declaradas utilizando const se llaman “constantes”. No pueden ser alteradas. Al intentarlo causaría un error:

```js
const myBirthday = "09.01.1995";

myBirthday = "01.01.2001"; // ¡error, no se puede reasignar la constante!
```

