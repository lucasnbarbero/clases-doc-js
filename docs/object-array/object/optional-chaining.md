# Encadenamiento opcional '?.'

El encadenamiento opcional `?.` es una forma a prueba de errores para acceder a las propiedades anidadas de los objetos, incluso si no existe una propiedad intermedia.

## El problema de la propiedad que no existe

Digamos que tenemos objetos `user` que contienen información de nuestros usuarios.

La mayoría de nuestros usuarios tienen la dirección en la propiedad `user.address`, con la calle en `user.address.street`, pero algunos no la proporcionaron.

En tal caso, cuando intentamos obtener user.address.streeten un usuario sin dirección obtendremos un error:

```js
let user = {}; // usuario sin propiedad "address"

alert(user.address.street); // Error!
```

Este es el resultado esperado. JavaScript funciona así, como `user.address` es `undefined`, el intento de obtener `user.address.street` falla dando un error.

En muchos casos prácticos preferiríamos obtener `undefined` en lugar del error (dando a entender “sin calle”)

… y otro ejemplo. En desarrollo web, podemos obtener un objeto que corresponde a un elemento de página web usando el llamado a un método especial como `document.querySelector('.elem')`, que devuelve `null` cuando no existe tal elemento.

```js
// Error si el resultado de querySelector (...) es null
let html = document.querySelector(".my-element").innerHTML;
```

Una vez más, si el elemento no existe, obtendremos un error al intentar acceder a la propiedad `.innerHTML` de `null`. Y en algunos casos, cuando la ausencia del elemento es normal, quisiéramos evitar el error y simplemente aceptar `html = null` como resultado.

#### ¿Cómo podemos hacer esto?

La solución obvia sería chequear el valor usando `if` o el operador condicional `?` antes de usar la propiedad:

```js
let user = {};

alert(user.address ? user.address.street : undefined);
```

Esto funciona, no hay error… Pero es bastante poco elegante. Como puedes ver, "user.address" aparece dos veces en el código.

:::tip Operadores ternarios
Un operador ternario en JavaScript es una forma concisa de escribir una declaración `if-else`. La sintaxis es `condición ? expresiónSiVerdadero : expresiónSiFalso`. Evalúa la condición; si es verdadera, ejecuta la primera expresión, de lo contrario, ejecuta la segunda.
:::

Hay una mejor manera de escribirlo, usando el operador `&&`:

```js
let user = {}; // usuario sin dirección

alert(user.address && user.address.street && user.address.street.name); // undefined (sin error)
```

Poniendo `AND` en el camino completo a la propiedad asegura que todos los componentes existen (si no, la evaluación se detiene), pero no es lo ideal.

Como puedes ver, los nombres de propiedad aún están duplicados en el código. Por ejemplo en el código de arriba `user.address` aparece tres veces.

Es por ello que el encadenamiento opcional `?.` fue agregado al lenguaje.

## Encadenamiento opcional

El encadenamiento opcional `?.` detiene la evaluación y devuelve `undefined` si el valor antes del `?.` es `undefined` o `null`.

**De aquí en adelante en este artículo, por brevedad, diremos que algo “existe” si no es `null` o `undefined`.**

En otras palabras, `value?.prop`:

- funciona como `value.prop` si value existe,
- de otro modo (cuando value es `undefined/null`) devuelve `undefined`.

Aquí está la forma segura de acceder a `user.address.street` usando `?.`:

```js
let user = {}; // El usuario no tiene dirección

alert(user?.address?.street); // undefined (no hay error)
```

El código es corto y claro, no hay duplicación en absoluto.

## Short-circuiting (Cortocircuitos)

Como se dijo antes, el `?.` detiene inmediatamente (“cortocircuito”) la evaluación si la parte izquierda no existe.

Entonces, si a la derecha de `?.` hay funciones u operaciones adicionales, estas no se ejecutarán:

Por ejemplo:

```js
let user = null;
let x = 0;

user?.sayHi(x++); // no hay "user", por lo que la ejecución no alcanza a sayHi ni a x++

alert(x); // 0, el valor no se incrementa
```

## Otros casos: ?.(), ?.[]

El encadenamiento opcional `?.` no es un operador, es una construcción de sintaxis especial que también funciona con funciones y corchetes.

Por ejemplo, `?.()` se usa para llamar a una función que puede no existir.

En el siguiente código, algunos de nuestros usuarios tienen el método `admin`, y otros no:

```js
let userAdmin = {
  admin() {
    alert("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // no pasa nada (no existe tal método)
```

Aquí, en ambas líneas, primero usamos el punto (`userAdmin.admin`) para obtener la propiedad `admin`, porque asumimos que el objeto user existe y es seguro leerlo.

Entonces `?.()` comprueba la parte izquierda: si la función `admin` existe, entonces se ejecuta (para `userAdmin`). De lo contrario (para `userGuest`) la evaluación se detiene sin errores.

La sintaxis `?.[]` también funciona si quisiéramos usar corchetes `[]` para acceder a las propiedades en lugar de punto `.`. Al igual que en casos anteriores, permite leer de forma segura una propiedad de un objeto que puede no existir.

```js
let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined
```

También podemos usar ?. con delete:

```js
delete user?.name; // Eliminar user.name si el usuario existe
```

## Resumen

La sintaxis de encadenamiento opcional ?. tiene tres formas:

- `obj?.prop` – devuelve `obj.prop` si `obj` existe, si no, `undefined`.
- `obj?.[prop]` – devuelve `obj[prop]` si `obj` existe, si no, `undefined`.
- `obj.method?.()` – llama a `obj.method()` si `obj.method` existe, si no devuelve `undefined`.

Como podemos ver, todos ellos son sencillos y fáciles de usar. El `?.` comprueba si la parte izquierda es `null/undefined` y permite que la evaluación continúe si no es así.

Una cadena de `?.` permite acceder de forma segura a las propiedades anidadas.

Aún así, debemos aplicar `?.` con cuidado, solamente donde sea aceptable que, de acuerdo con nuestra lógica, la parte izquierda no exista. Esto es para que no nos oculte errores de programación, si ocurren.
