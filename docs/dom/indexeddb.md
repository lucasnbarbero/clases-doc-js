# IndexedDB

IndexedDB es una base de datos construida dentro del navegador, mucho más potente que `localStorage`

- Almacena casi todo tipo de valores por claves, tipos de clave múltiple.
- Soporta transacciones para confiabilidad.
- Soporta consultas de rango por clave, e índices.
- Puede almacenar mucho mayor volumen de datos que `localStorage`.

Toda esta potencia es normalmente excesiva para las aplicaciones cliente-servidor tradicionales. IndexedDB está previsto para aplicaciones fuera de línea.

## Apertura de una base de datos, `open`

Para empezar a trabajar con IndexedDB, primero necesitamos conectarnos o “abrir” (open) una base de datos.

La sintaxis:

```js
let openRequest = indexedDB.open(name, version);
```

- `name` – un string, el nombre de la base de datos.
- `version` – un entero positivo, predeterminado en 1.

```js
let openRequest = indexedDB.open("store", 1);

openRequest.onupgradeneeded = function () {
  // se dispara si el cliente no tiene la base de datos
  // ...ejecuta la inicialización...
};

openRequest.onerror = function () {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
  let db = openRequest.result;
  // continúa trabajando con la base de datos usando el objeto db
};
```

## Almacén de objetos, `store`

Para almacenar algo en IndexedDB, necesitamos un “almacén de objetos” _object store_.

Un almacén de objetos es un concepto central de IndexedDB. Equivale a lo que en otras bases de datos se denominan “tablas” o “colecciones”. Es donde los datos son almacenados. Una base de datos puede tener múltiples almacenes: uno para usuarios, otro para bienes, etc.

A pesar de llamarse “almacén de objetos”, también puede almacenar tipos primitivos.

**Podemos almacenar casi cualquier valor, incluyendo objetos complejos.**

IndexedDB usa el algoritmo de serialización estándar para clonar-y-almacenar un objeto. Es como JSON.stringify; pero más poderoso, capaz de almacenar muchos tipos de datos más.

La sintaxis para crear un almacén de objetos u _object store_:

```js
db.createObjectStore(name[, keyOptions]);
```

Ten en cuenta que esta operación es sincrónica, no requiere await.

- `name` es el nombre del almacén, por ejemplo "books",
- `keyOptions` es un objeto opcional con una de estas dos propiedades:
  - `keyPath` – la ruta a una propiedad del objeto que IndexedDB usará como clave, por ejemplo id.
  - `autoIncrement` – si es true, la clave para el objeto nuevo que se almacene se generará automáticamente con un número autoincremental.

## Transacciones

El término transacción es genérico, usado por muchos tipos de bases de datos.

Una transacción es un grupo de operaciones cuyos resultados están vinculados: todas deben ser exitosas o todas fallar.

Por ejemplo, cuando una persona compra algo, necesitamos:

- Restar el dinero de su cuenta personal.
- Agregar el ítem a su inventario.

Sería muy malo que si se completara la primera operación y algo saliera mal (como un corte de luz), fallara la segunda. Ambas deberían ser exitosas (compra completa, ¡bien!) o ambas fallar (al menos la persona mantuvo su dinero y puede reintentar).

Las transacciones garantizan eso.

**Todas las operaciones deben ser hechas dentro de una transacción en IndexedDB.**

Para iniciar una transacción:

```js
db.transaction(store[, type]);
```

- `store` – el nombre de almacén al que la transacción va a acceder, por ejemplo "books". Puede ser un array de nombres de almacenes si vamos a acceder a múltiples almacenes.
- `type` – el tipo de transacción, uno de estos dos:
  - `readonly` – solo puede leer (es el predeterminado).
  - `readwrite` – puede leer o escribir datos (pero no crear/quitar/alterar almacenes de objetos).

Una vez que la transacción fue creada, podemos agregar un ítem al almacén:

```js{4,12}
let transaction = db.transaction("books", "readwrite"); // (1)

// obtiene un almacén de objetos para operar con él
let books = transaction.objectStore("books"); // (2)

let book = {
  id: "js",
  price: 10,
  created: new Date(),
};

let request = books.add(book); // (3)

request.onsuccess = function () {
  // (4)
  console.log("Libro agregado al almacén", request.result);
};

request.onerror = function () {
  console.log("Error", request.error);
};
```

Básicamente, hay cuatro pasos:

- Crea una transacción, mencionando todos los almacenes a los que irá a acceder, en (1).
- Obtiene el almacén usando transaction.objectStore(name), en (2).
- Ejecuta lo petición al almacén books.add(book), en (3).
- …Maneja el éxito o fracaso de la petición (4), a continuación podemos hacer otras peticiones si lo necesitamos, etc.
