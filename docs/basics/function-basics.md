# Funciones

En JavaScript, las funciones son bloques de código diseñados para realizar una tarea específica. Son uno de los pilares fundamentales de la programación, ya que nos permiten escribir código modular y reutilizable.

Ya hemos visto ejemplos de funciones integradas, como `alert(message)`, `prompt(message, default)` y `confirm(question)`. Pero también podemos crear funciones propias.

## Declaración de funciones

Para declarar una función en JavaScript, utilizamos la palabra clave `function`, seguida del nombre de la función y paréntesis `()`, que pueden contener parámetros. Luego, definimos el cuerpo de la función entre llaves `{}`.

```js
function showMessage() {
  alert("¡Hola a todos!");
}
```

La palabra clave `function` va primero, luego va el nombre de función, luego una lista de parámetros entre paréntesis (separados por comas, vacía en el ejemplo anterior) y finalmente el código de la función entre llaves, también llamado “el cuerpo de la función”.

```js
function showMessage(message) {
  alert(message);
}
```

## Ejecución de una función

Una vez que hemos declarado una función, podemos ejecutarla llamándola por su nombre y pasando los valores de los parámetros necesarios, si los tiene.

```js
showMessage("¡Hola a todos!");
showMessage("¡Hasta la próxima!");
```

Este ejemplo demuestra claramente uno de los propósitos principales de las funciones: evitar la duplicación de código…

Si alguna vez necesitamos cambiar el mensaje o la forma en que se muestra, es suficiente modificar el código en un lugar: la función que lo genera.

## Parámetros

Los parámetros son variables que se utilizan para recibir valores al llamar a una función. Permiten que una función acepte datos o instrucciones específicas para realizar una tarea. Los parámetros se declaran entre paréntesis en la declaración de la función.

### Declaración de parámetros

Al declarar una función, podemos especificar los parámetros que espera recibir. Estos parámetros actúan como variables locales dentro de la función y pueden ser utilizados en su cuerpo para realizar operaciones.

```js
function saludar(nombre) {
  alert("¡Hola, " + nombre + "!");
}
```

En este ejemplo, la función `saludar` espera recibir un parámetro llamado `nombre`, que será utilizado para construir el mensaje de saludo.

### Paso de parámetros

Cuando llamamos a una función, podemos pasar valores específicos como argumentos para los parámetros que espera recibir. Estos valores se asignan a los parámetros correspondientes en el cuerpo de la función.

```js
saludar("Lucas"); // Salida: ¡Hola, Lucas!
```

### Múltiples parámetros

Una función puede aceptar múltiples parámetros separados por comas. Estos parámetros se declaran en la lista de parámetros de la función y se pasan como argumentos en el orden especificado al llamar a la función.

```js
function showMessage(from, text) {
  // parámetros: from, text
  alert(from + ": " + text);
}

showMessage("Ann", "¡Hola!"); // Ann: ¡Hola! (*)
showMessage("Ann", "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)
```

### Parámetros por defecto

Podemos asignar valores predeterminados a los parámetros de una función. Estos valores se utilizarán si no se proporcionan argumentos al llamar a la función.

```js
function saludar(nombre = "usuario") {
  alert("¡Hola, " + nombre + "!");
}

saludar(); // Salida: ¡Hola, usuario!
```

## Retorno de valores

Una función puede devolver un valor al código de llamada como resultado.

El ejemplo más simple sería una función que suma dos valores:

```js{2}
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3
```

La directiva `return` puede estar en cualquier lugar de la función. Cuando la ejecución lo alcanza, la función se detiene y el valor se devuelve al código de llamada (asignado al `result` anterior).

Puede haber muchos `return` en una sola función. Por ejemplo:

```js{3,5}
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("¿Tienes permiso de tus padres?");
  }
}

let age = prompt("¿Qué edad tienes?", 18);

if (checkAge(age)) {
  alert("Acceso otorgado");
} else {
  alert("Acceso denegado");
}
```

Es posible utilizar return sin ningún valor. Eso hace que la función salga o termine inmediatamente.

Por ejemplo:

```js{3}
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("Mostrándote la película"); // (*)
  // ...
}
```

En el código de arriba, si `checkAge(age)` devuelve `false`, entonces `showMovie` no mostrará la `alert`.

## Ejercicio

Pongamos a prueba lo que aprendimos con estos [ejercicios](../exercises/04-functions.md)


