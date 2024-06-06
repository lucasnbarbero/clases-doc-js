# Promesa

En el mundo del desarrollo web, las promesas son una herramienta fundamental para manejar operaciones asíncronas de manera más eficiente y legible. Las promesas son objetos que representan el resultado eventual de una operación asíncrona, permitiendo un flujo de control más claro y evitando el anidamiento excesivo de callbacks.

## ¿Qué son las promesas en JavaScript y cómo funcionan?

Imagina que tienes una tarea importante que requiere tiempo para completarse, como cargar datos de una API o leer un archivo grande. En JavaScript, estas tareas se realizan de forma asíncrona para evitar bloquear el hilo principal de ejecución. Aquí es donde entran en juego las promesas.

Las promesas son objetos que representan el resultado eventual de una operación asíncrona. Se pueden ver como una especie de "contenedor" para un valor futuro, que puede ser resuelto (con éxito) o rechazado (con un error).

Las promesas tienen tres estados posibles:

- Pendiente: Cuando se crea una promesa, inicialmente está en un estado pendiente, lo que significa que la operación asíncrona aún no se ha completado.

- Resuelta (Fulfillment): Cuando la operación asíncrona se completa con éxito, la promesa pasa al estado de resuelta. En este caso, la promesa contiene el valor resultante de la operación.

- Rechazada (Rejection): Si la operación asíncrona falla, la promesa pasa al estado de rechazada. En este caso, la promesa contiene un motivo (generalmente un objeto Error) que explica por qué la operación falló.

```js
let miPromesa = new Promise((resolve, reject) => {
  // Simular una operación asíncrona
  setTimeout(() => {
    let exito = true;
    if (exito) {
      resolve("¡Operación exitosa!");
    } else {
      reject(new Error("¡Algo salió mal!"));
    }
  }, 2000);
});
```

## `then` y `catch`

Las promesas tienen dos métodos principales que nos permiten interactuar con ellas:

- then(): Este método se utiliza para especificar qué hacer cuando una promesa se resuelve correctamente. Toma dos argumentos: una función de resolución (que maneja el valor resultante) y una función de rechazo (que maneja cualquier error).

- catch(): Este método se utiliza para manejar errores cuando una promesa es rechazada. Toma una función de rechazo como argumento, que se ejecutará si la promesa es rechazada.

Un ejemplo simple de cómo usar promesas sería:

```js
let miPromesa = new Promise((resolve, reject) => {
  // Simular una operación asíncrona
  setTimeout(() => {
    let exito = true;
    if (exito) {
      resolve("¡Operación exitosa!");
    } else {
      reject(new Error("¡Algo salió mal!"));
    }
  }, 2000);
});

miPromesa
  .then((resultado) => {
    console.log(resultado); // Imprime: ¡Operación exitosa!
  })
  .catch((error) => {
    console.error(error); // Imprime: Error: ¡Algo salió mal!
  });
```

En este ejemplo, creamos una promesa que simula una operación asíncrona (una función que se ejecutará después de 2 segundos). Luego, utilizamos los métodos then() y catch() para manejar tanto la resolución exitosa como los errores potenciales que pueden ocurrir durante la ejecución de la promesa.

## `finally`

Además de los métodos `then()` y `catch()`, las promesas también tienen el método `finally()`, que nos permite ejecutar una función de limpieza, independientemente de si la promesa se resuelve o se rechaza. Esto es útil para ejecutar código que debe realizarse después de que una operación asíncrona haya finalizado, independientemente de su resultado.

Un ejemplo de cómo usar `finally()` sería:

```js
let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let exito = true;
    if (exito) {
      resolve("¡Operación exitosa!");
    } else {
      reject(new Error("¡Algo salió mal!"));
    }
  }, 2000);
});

miPromesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("¡La operación ha finalizado!"); // Se ejecutará independientemente del resultado
  });
```
