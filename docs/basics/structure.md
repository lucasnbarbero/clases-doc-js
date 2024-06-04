# Estructura del código

Lo primero que estudiaremos son los bloques de código.

## Sentencias

Las sentencias son contrucciones sintácticas y comandos que realizan acciones.

Ya vimos una sentencia, `alert("¡Hola, mundo!")`, que muestra el mensaje "¡Hola, mundo!".

Podemos tener tantas sentencias en nuestro código como queramos, las cuales se pueden separar con un punto y coma.

Por ejemplo, aquí separamos "Hola Mundo" en dos alerts:

```js
alert("Hola");
alert("Mundo");
```

## Punto y coma

Se puede omitir un punto y coma en la mayoría de los casos cuando existe un salto de línea.

Esto también funcionaría:

```js
alert("Hola")
alert("Mundo")
```

Aquí, JavaScript interpreta el salto de línea como un punto y coma “implícito”. Esto se denomina inserción automática de punto y coma.

En la mayoría de los casos, una nueva línea implica un punto y coma. Pero “en la mayoría de los casos” no significa “siempre”!

Hay casos en que una nueva línea no significa un punto y coma. Por ejemplo:

```js
alert(3 +
1
+ 2);
```

El código da como resultado 6 porque JavaScript no inserta punto y coma aquí. Es intuitivamente obvio que si la línea termina con un signo más "+", es una “expresión incompleta”, un punto y coma aquí sería incorrecto. Y en este caso eso funciona según lo previsto.

**Pero hay situaciones en las que JavaScript “falla” al asumir un punto y coma donde realmente se necesita.**

Los errores que ocurren en tales casos son bastante difíciles de encontrar y corregir.

:::warning
**Un ejemplo de error**
Veamos un ejemplo concreto de tal error, miremos este código:

```js
alert("Hello");

[1, 2].forEach(alert);
```
No nos detengamos en pensar el significado de `[]` y `forEach`, ésto lo veremos más adelante. Por ahora recordemos el resultado del código: muestra `Hola`, luego `1`, luego `2`.

Quitemos el punto y coma del alert: 

```js
alert("Hello")

[1, 2].forEach(alert);
```
La diferencia, comparando con el código anterior, es de solo un carácter: falta el punto y coma al final de la primera línea.

Esta vez, si ejecutamos el código, solo se ve el primer `Hola`(y un error pero necesitas abrir la consola para verlo). Los números no aparecen más.

Esto ocurre porque JavaScript no asume un punto y coma antes de los corchetes `[...]`, entonces el código del primer ejemplo se trata como una sola sentencia.

Así es como lo ve el motor:

```js
alert("Hello")[1, 2].forEach(alert);
```

Se ve extraño, ¿verdad? Tal unión en este caso es simplemente incorrecta. Necesitamos poner un punto y coma después del `alert` para que el código funcione bien.

Esto puede suceder en otras situaciones también.
:::

Recomendamos colocar puntos y coma entre las sentencias, incluso si están separadas por saltos de línea. Esta regla está ampliamente adoptada por la comunidad. Notemos una vez más que es posible omitir los puntos y coma la mayoría del tiempo. Pero es más seguro, especialmente para un principiante, usarlos.

## Comentarios

A medida que pasa el tiempo, los programas se vuelven cada vez más complejos. Se hace necesario agregar comentarios que describan lo que hace el código y por qué.

Los comentarios se pueden poner en cualquier lugar de un script. No afectan su ejecución porque el motor simplemente los ignora.

**Los comentarios de una línea comienzan con dos caracteres de barra diagonal `//`.**

El resto de la línea es un comentario. Puede ocupar una línea completa propia o seguir una sentencia.

Como aquí:

```js
// Este comentario ocupa una línea propia.
alert('Hello');

alert('World'); // Este comentario sigue a la sentencia.
```

**Los comentarios de varias líneas comienzan con una barra inclinada y un asterisco `/*` y terminan con un asterisco y una barra inclinada `*/`.**

Como aquí:

```js
/* Un ejemplo con dos mensajes.
Este es un comentario multilínea.
*/
alert('Hola');
alert('Mundo');
```
