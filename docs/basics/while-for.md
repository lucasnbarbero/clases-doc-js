# Bucles: `while` y `for`

Los bucles son una característica fundamental en la mayoría de los lenguajes de programación, incluido JavaScript. Permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición específica.

## `while`

El bucle `while` (mientras), tiene la siguiente sintaxis:

```js
while (condition) {
  // código a ejecutar
}
```

Mientras la condición `condition` sea verdadera, el código del cuerpo del bucle será ejecutado.

Por ejemplo, el bucle debajo imprime `i` mientras se cumpla `i < 3`:

```js
var i = 0;
while (i < 3) {
  // muestra 0, luego 1, luego 2
  alert(i);
  i++;
}
```

Cada ejecución del cuerpo del bucle se llama iteración. El bucle en el ejemplo de arriba realiza 3 iteraciones.

Si faltara `i++` en el ejemplo de arriba, el bucle sería repetido (en teoría) eternamente. En la práctica, el navegador tiene maneras de detener tales bucles desmedidos.

## `do...while`

La comprobación de la condición puede ser movida _debajo_ del cuerpo del bucle usando la sintaxis `do..while`:

```js
do {
  // código a ejecutar
} while (condition);
```

El bucle primero ejecuta el cuerpo, luego comprueba la condición, y, mientras sea un valor verdadero, la ejecuta una y otra vez.

Por ejemplo:

```js
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);
```

Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado **al menos una vez** sin importar que la condición sea verdadera. Usualmente, se prefiere la otra forma: `while(…) {…}`.

## `for`

El bucle for es otra estructura de control de flujo que permite repetir un bloque de código un número específico de veces. La sintaxis del bucle for es la siguiente:

```js
for (inicio; condición; incremento) {
  // código a ejecutar
}
```

Veamos las partes de esta estructura:

- `inicio`: Se ejecuta una vez antes de que comience el bucle y generalmente se utiliza para inicializar variables.
- `condición`: Se evalúa antes de cada iteración del bucle. Si la condición es verdadera, el bucle continuará. Si es falsa, el bucle se detendrá.
- `incremento`: Se ejecuta al final de cada iteración del bucle y generalmente se utiliza para actualizar el estado de las variables.

```js
for (let i = 1; i <= 3; i++) {
  alert(i);
}
```

## Comparación

Ambos bucles, permiten ejecutar código repetidamente, pero se utilizan en diferentes situaciones. El bucle `while` se prefiere cuando no se sabe cuántas veces se repetirá el bloque de código, mientras que el bucle `for` es útil cuando se conoce de antemano el número de iteraciones.

## Ejercicio

Resolvamos los siguientes [ejercicios](../exercises/03-while-for.md)!
