# Async / Await

Existe una sintaxis especial para trabajar con promesas de una forma más confortable, llamada “async/await”.

## Async

Comencemos con la palabra clave `async`. Puede ser ubicada delante de una función como aquí:

```js
async function f() {
  return 1;
}
```

La palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa. Otros valores serán envueltos y resueltos en una promesa automáticamente.

Por ejemplo, esta función devuelve una promesa resuelta con el resultado de 1:

```js
async function f() {
  return 1;
}

f().then(alert); // 1
```

…Podríamos explícitamente devolver una promesa, lo cual sería lo mismo:

```js
async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1
```

Entonces, async se asegura de que la función devuelva una promesa, o envuelve las no promesas y las transforma en una.

## Await

La sintaxis:

```js
// funciona solamente dentro de funciones async
let value = await promise;
```

`await` hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.

Aquí hay un ejemplo con una promesa que resuelve en 1 segundo:

```js
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Hecho!"), 1000);
  });

  let result = await promise; // espera hasta que la promesa se resuelva (*)

  alert(result); // "¡Hecho!"
}

f();
```

La ejecución de la función es pausada en la línea (\*) y se reanuda cuando la promesa responde, con result volviéndose su resultado. Entonces el código arriba muestra “¡Hecho!” en un segundo.

Enfaticemos: await literalmente suspende la ejecución de la función hasta que se establezca la promesa, y luego la reanuda con el resultado de la promesa. Eso no cuesta ningún recurso de CPU, porque el motor de JavaScript puede hacer otros trabajos mientras tanto: ejecutar otros scripts, manejar eventos, etc.

Es simplemente una sintaxis más elegante para tener el resultado de una promesa que promise.then, es más fácil de leer y de escribir.

## Ejemplo real

Aqui tenemos un ejemplo de como usamos `async` y `await` en la realidad

```js
async function showAvatar() {
  // leer nuestro JSON
  let response = await fetch("/article/promise-chaining/user.json");
  let user = await response.json();

  // leer usuario github
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // muestra el avatar
  let img = document.createElement("img");
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // espera 3 segundos
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
```
