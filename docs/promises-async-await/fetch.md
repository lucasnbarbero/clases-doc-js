# Fetch

JavaScript puede enviar peticiones de red al servidor y cargar nueva información siempre que se necesite.

Por ejemplo, podemos utilizar una petición de red para:

- Crear una orden,
- Cargar información de usuario,
- Recibir las últimas actualizaciones desde un servidor,
- …etc.

Existen múltiples maneras de enviar peticiones de red y obtener información de un servidor.

Comenzaremos con el el método fetch() que es moderno y versátil. Este método no es soportado por navegadores antiguos (sin embargo se puede incluir un polyfill), pero es perfectamente soportado por los navegadores actuales y modernos.

La sintaxis básica es la siguiente:

```js
let promise = fetch(url, [options]);
u;
```

- `url` – representa la dirección URL a la que deseamos acceder.
- `options` – representa los parámetros opcionales, como puede ser un método o los encabezados de nuestra petición, etc.

Si no especificamos ningún options, se ejecutará una simple petición GET, la cual descargará el contenido de lo especificado en el `url`.

El navegador lanzará la petición de inmediato y devolverá una promesa (promise) que luego será utilizada por el código invocado para obtener el resultado.

Por lo general, obtener una respuesta es un proceso de dos pasos.

**Primero, la promesa promise, devuelta por fetch, resuelve la respuesta con un objeto de la clase incorporada Response tan pronto como el servidor responde con los encabezados de la petición.**

En este paso, podemos chequear el status HTTP para poder ver si nuestra petición ha sido exitosa o no, y chequear los encabezados, pero aún no disponemos del cuerpo de la misma.

La promesa es rechazada si el fetch no ha podido establecer la petición HTTP, por ejemplo, por problemas de red o si el sitio especificado en la petición no existe. Estados HTTP anormales, como el 404 o 500 no generan errores.

Podemos visualizar los estados HTTP en las propiedades de la respuesta:

- `status` – código de estado HTTP, por ejemplo: 200.
- `ok` – booleana, true si el código de estado HTTP es 200 a 299.

Ejemplo:

```js
let response = await fetch(url);

if (response.ok) {
  // si el HTTP-status es 200-299
  // obtener cuerpo de la respuesta (método debajo)
  let json = await response.json();
} else {
  alert("Error-HTTP: " + response.status);
}
```

**Segundo, para obtener el cuerpo de la respuesta, necesitamos utilizar un método adicional.**

Response provee múltiples métodos basados en promesas para acceder al cuerpo de la respuesta en distintos formatos:

- `response.text()` – lee y devuelve la respuesta en formato texto,
- `response.json()` – convierte la respuesta como un JSON,
- `response.formData()` – devuelve la respuesta como un objeto FormData (explicado en el siguiente capítulo),
- `response.blob()` – devuelve la respuesta como Blob (datos binarios tipados),
- `response.arrayBuffer()` – devuelve la respuesta como un objeto ArrayBuffer (representación binaria de datos de bajo nivel),

Adicionalmente, `response.body` es un objeto `ReadableStream`, el cual nos permite acceder al cuerpo como si fuera un stream y leerlo por partes. Veremos un ejemplo de esto más adelante.

Por ejemplo, si obtenemos un objeto de tipo JSON con los últimos commits de GitHub:

```js
let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
let response = await fetch(url);

let commits = await response.json(); // leer respuesta del cuerpo y devolver como JSON

alert(commits[0].author.login);
```

O también usando promesas, en lugar de await:

```js
fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
)
  .then((response) => response.json())
  .then((commits) => alert(commits[0].author.login));
```

Para obtener la respuesta como texto, await response.text() en lugar de .json():

```js
let response = await fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
);

let text = await response.text(); // leer cuerpo de la respuesta como texto

alert(text.slice(0, 80) + "...");
```

Como demostración de una lectura en formato binario, hagamos un fetch y mostremos una imagen del logotipo de “especificación fetch” (ver capítulo Blob para más detalles acerca de las operaciones con Blob):

```js
let response = await fetch("/article/fetch/logo-fetch.svg");

let blob = await response.blob(); // download as Blob object

// crear tag <img> para imagen
let img = document.createElement("img");
img.style = "position:fixed;top:10px;left:10px;width:100px";
document.body.append(img);

// mostrar
img.src = URL.createObjectURL(blob);

setTimeout(() => {
  // ocultar luego de tres segundos
  img.remove();
  URL.revokeObjectURL(img.src);
}, 3000);
```

## Encabezados de respuesta

Los encabezados de respuesta están disponibles como un objeto de tipo Map dentro del `response.headers`.

No es exactamente un Map, pero posee métodos similares para obtener de manera individual encabezados por nombre o si quisiéramos recorrerlos como un objeto:

```js
let response = await fetch(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"
);

// obtenemos un encabezado
alert(response.headers.get("Content-Type")); // application/json; charset=utf-8

// iteramos todos los encabezados
for (let [key, value] of response.headers) {
  alert(`${key} = ${value}`);
}
```

## Encabezados de petición

Para especificar un encabezado en nuestro fetch, podemos utilizar la opción headers. La misma posee un objeto con los encabezados salientes, como se muestra en el siguiente ejemplo:

```js
let response = fetch(protectedUrl, {
  headers: {
    Authentication: "secret",
  },
});
```

## Ejercicio

El programa debe hacer lo siguiente:

Crear una clase User con las siguientes propiedades:

- `id`
- `name`
- `username`
- `email`

Crear una clase UserManager que gestione una lista de usuarios. Esta clase debe tener los siguientes métodos:

- `fetchUsers()`: Debe obtener los usuarios de una API pública (https://jsonplaceholder.typicode.com/users) utilizando `fetch`, `async/await`, y manejar errores.

- `addUser(user)`: Agrega un nuevo usuario a la lista de usuarios.

- `removeUser(id)`: Elimina un usuario de la lista por su id.

- `getUser(id)`: Devuelve un usuario por su id.

Interactuar con el usuario mediante prompt y alert para realizar las siguientes acciones:

- Obtener y mostrar la lista de usuarios.
- Agregar un nuevo usuario.
- Eliminar un usuario.
- Buscar un usuario por id.
