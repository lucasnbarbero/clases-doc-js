# Módulos, introducción

A medida que nuestra aplicación crece, queremos dividirla en múltiples archivos, llamados “módulos”. Un módulo puede contener una clase o una biblioteca de funciones para un propósito específico.

Durante mucho tiempo, JavaScript existió sin una sintaxis de módulo a nivel de lenguaje. Esto no era un problema, porque inicialmente los scripts eran pequeños y simples.

Pero con el tiempo los scripts se volvieron cada vez más complejos, por lo que la comunidad inventó una variedad de formas de organizar el código en módulos, bibliotecas especiales para cargar módulos a pedido.

Para nombrar algunos (por razones históricas):

- AMD – uno de los sistemas de módulos más antiguos, implementado inicialmente por la biblioteca require.js.
- CommonJS – el sistema de módulos creado para el servidor Node.js.
- UMD – un sistema de módulos más, sugerido como universal, compatible con AMD y CommonJS.

Todo esto se va convirtiendo lentamente en parte de la historia, pero aún podemos encontrarlos en viejos scripts.

El sistema de módulos a nivel de lenguaje apareció en el estándar en 2015, evolucionó gradualmente desde entonces, y ahora es soportado por todos los navegadores importantes y por Node.js.

## Qué es un módulo?

Un módulo es simplemente un archivo. Un script es un módulo. Tan sencillo como eso.

Los módulos pueden cargarse entre sí y usar directivas especiales export e import para intercambiar funcionalidad, llamar a funciones de un módulo de otro:

La palabra clave export etiqueta las variables y funciones que necesitan ser accesibles desde fuera del módulo actual.
import permite importar funcionalidades desde otros módulos.

Por ejemplo, si tenemos un archivo `sayHi.js` que exporta una función:

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

…Luego, otro archivo puede importarlo y usarlo:

```js
// 📁 main.js
import { sayHi } from "./sayHi.js";

alert(sayHi); // function...
sayHi("John"); // Hello, John!
```

La directiva import carga el módulo por la ruta `./sayHi.js` relativa a la del archivo actual, y asigna la función exportada sayHi a la variable correspondiente.

Ejecutemos el ejemplo en el navegador.

Como los módulos admiten palabras clave y características especiales, debemos decirle al navegador que un script debe tratarse como un módulo, utilizando el atributo `<script type =" module ">`.

::: code-group

```js [say.js]
export function sayHi(user) {
  return `Hello, ${user}!`;
}
```

```html [index.html]
<script type="module">
  import { sayHi } from "./say.js";

  document.body.innerHTML = sayHi("John");
</script>
```

:::

:::warning Los módulos funcionan solo a través de HTTP(s), no localmente
Si intenta abrir una página web localmente a través del protocolo `file://`, encontrará que las directivas import y export no funcionan. Use un servidor web local, como static-server, o use la capacidad de “servidor vivo” de su editor, como VS Code Live Server Extension para probar los módulos.
:::

## Alcance a nivel de modulo

Cada módulo tiene su propio alcance de nivel superior. En otras palabras, las variables y funciones de nivel superior de un módulo no se ven en otros scripts.

En el siguiente ejemplo, se importan dos scripts y hello.js intenta usar la variable user declarada en user.js. Falla, porque es un módulo separado

::: code-group

```js
alert(user);
```

```js
let user = "John";
```

```html
<script type="module" src="user.js"></script>
<script type="module" src="hello.js"></script>
```

:::

Los módulos deben hacer export a lo que ellos quieren que esté accesible desde afuera, y hacer `import` de lo que necesiten.

- `user.js` debe exportar la variable user .
- `hello.js` debe importarla desde el módulo `user.js`.
  En otra palabras, con módulos usamos import/export en lugar de depender de variables globales.

::: code-group

```js
import { user } from "./user.js";

document.body.innerHTML = user; // John
```

```js
export let user = "John";
```

```html
<script type="module" src="hello.js"></script>
```

:::

## `Import` / `Export`

### Export antes de las sentencias

Podemos etiquetar cualquier sentencia como exportada colocando ‘export’ antes, ya sea una variable, función o clase.

Por ejemplo, aquí todas las exportaciones son válidas:

```js
// exportar un array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// exportar una constante
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// exportar una clase
export clase User {
  constructor(name) {
    this.name = name;
  }
}
```

### Export separado de la declaración

También podemos colocar export por separado.

Aquí primero declaramos y luego exportamos:

```js
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // una lista de variables exportadas
```

…O, técnicamente podemos colocar export arriba de las funciones también.

### Import

Generalmente, colocamos una lista de lo que queremos importar en llaves import {...}, de esta manera:

```js
// 📁 main.js
import { sayHi, sayBye } from "./say.js";

sayHi("John"); // Hello, John!
sayBye("John"); // Bye, John!
```

Pero si hay mucho para importar, podemos importar todo como un objeto utilizando `import \* as <obj>`, por ejemplo:

```js
// 📁 main.js
import \* as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

A primera vista, “importar todo” parece algo tan genial, corto de escribir, por qué deberíamos listar explícitamente lo que necesitamos importar?

Pues hay algunas razones.

- Listar explícitamente qué importar da nombres más cortos: sayHi() en lugar de say.sayHi().
- La lista explícita de importaciones ofrece una mejor visión general de la estructura del código: qué se usa y dónde. Facilita el soporte de código y la refactorización.

### Importar “as”

También podemos utilizar as para importar bajo nombres diferentes.

Por ejemplo, importemos `sayHi` en la variable local `hi` para brevedad, e importar `sayBye` como `bye`:

```js
// 📁 main.js
import { sayHi as hi, sayBye as bye } from "./say.js";

hi("John"); // Hello, John!
bye("John"); // Bye, John!
```

### Exportar “as”

Existe un sintaxis similar para export.

Exportemos funciones como hi y bye:

```js
// 📁 say.js
...
export {sayHi as hi, sayBye as bye};
```

Ahora hi y bye son los nombres oficiales para desconocidos, a ser utilizados en importaciones:

```js
// 📁 main.js
import \* as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!
```

### Export default

En la práctica, existen principalmente dos tipos de módulos.

- Módulos que contienen una librería, paquete de funciones, como `say.js` de arriba.
- Módulos que declaran una entidad simple, por ejemplo un módulo `user.js` exporta únicamente `class User`.

Principalmente, se prefiere el segundo enfoque, de modo que cada “cosa” reside en su propio módulo.

Naturalmente, eso requiere muchos archivos, ya que todo quiere su propio módulo, pero eso no es un problema en absoluto. En realidad, la navegación de código se vuelve más fácil si los archivos están bien nombrados y estructurados en carpetas.

Los módulos proporcionan una sintaxis especial `export default` (“la exportación predeterminada”) para que la forma de “una cosa por módulo” se vea mejor.

Poner export default antes de la entidad a exportar:

```js
// 📁 user.js
export default class User {
  // sólo agregar "default"
  constructor(name) {
    this.name = name;
  }
}
```

Sólo puede existir un sólo export default por archivo.

…Y luego importarlo sin llaves:

```js
// 📁 main.js
import User from "./user.js"; // no {User}, sólo User

new User("John");
```
