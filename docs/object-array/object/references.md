# Referencias de objetos y copia

Una de las diferencias fundamentales entre objetos y primitivos es que los objetos son almacenados y copiados “por referencia”, en cambio los primitivos: strings, number, boolean, etc.; son asignados y copiados “como un valor completo”.

Esto es fácil de entender si miramos un poco “bajo cubierta” de lo que pasa cuando copiamos por valor.

Empecemos por un primitivo como string.

Aquí ponemos una copia de `message` en `phrase`:

```js
let message = "Hello!";
let phrase = message;
```

Como resultado tenemos dos variables independientes, cada una almacenando la cadena "Hello!".

Los objetos no son así.

**Una variable no almacena el objeto mismo sino su “dirección en memoria”, en otras palabras “una referencia” a él.**

Veamos un ejemplo de tal variable:

```js
let user = {
  name: "John",
};
```

El objeto es almacenado en algún lugar de la memoria, mientras que la variable `user` tiene una “referencia” a él.

Cuando ejecutamos acciones con el objeto, por ejemplo tomar una propiedad `user.name`, el motor JavaScript busca aquella dirección y ejecuta la operación en el objeto mismo.

Ahora, por qué esto es importante.

**Cuando una variable de objeto es copiada, se copia solo la referencia. El objeto no es duplicado.**

Por ejemplo:

```js
let user = { name: "John" };

let admin = user; // copia la referencia
```

Ahora tenemos dos variables, cada una con una referencia al mismo objeto.

Podemos usar cualquiera de las variables para acceder al objeto y modificar su contenido:

```js
let user = { name: "John" };

let admin = user;

admin.name = "Pete"; // cambiado por la referencia "admin"

alert(user.name); // 'Pete', los cambios se ven desde la referencia "user"
```

Es como si tuviéramos un gabinete con dos llaves y usáramos una de ellas (`admin`) para acceder a él y hacer cambios. Si más tarde usamos la llave (`user`), estaríamos abriendo el mismo gabinete y accediendo al contenido cambiado.

## Clonacion y mezcla, `Object.assign`

Entonces copiar una variable de objeto crea una referencia adicional al mismo objeto.

Pero ¿y si necesitamos duplicar un objeto?

Podemos crear un nuevo objeto y replicar la estructura del existente iterando a través de sus propiedades y copiándolas en el nivel primitivo.

Como esto:

```js
let user = {
  name: "John",
  age: 30,
};

let clone = {}; // el nuevo objeto vacío

// copiemos todas las propiedades de user en él
for (let key in user) {
  clone[key] = user[key];
}

// ahora clone es un objeto totalmente independiente con el mismo contenido
clone.name = "Pete"; // cambiamos datos en él

alert(user.name); // John aún está en el objeto original
```

También podemos usar el método `Object.assign`.

La sintaxis es:

```js
Object.assign(dest, ...sources);
```

- El primer argumento `dest` es el objeto destinatario.
- Los argumentos que siguen son una lista de objetos fuentes.

Esto copia las propiedades de todos los objetos fuentes dentro del destino dest y lo devuelve como resultado

Por ejemplo, tenemos el objeto user, agreguemos un par de permisos:

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copia todas las propiedades desde permissions1 y permissions2 en user
Object.assign(user, permissions1, permissions2);

// ahora es user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
```

Si la propiedad por copiar ya existe, se sobrescribe:

```js
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // ahora user = { name: "Pete" }
```

También podemos usar `Object.assign` para hacer una clonación simple:

```js
let user = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30
```

Aquí, copia todas las propiedades de user en un objeto vacío y lo devuelve.

También hay otras formas de clonar un objeto, por ejemplo usando la sintaxis spread `clone = {...user}`
