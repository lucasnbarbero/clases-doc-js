# Proyecto final: Control de gastos personales

El objetico de este proyecto es desarrollar una aplicación web que permita a los usuarios llevar un registro de sus gastos e ingresos. La aplicación deberá permitir agregar nuevas transacciones, ya sea como gastos o ingresos, y mostrar un resumen del balance actual. Además, se deberá implementar una función de alerta para notificar al usuario cuando su saldo esté por debajo de un umbral específico.

## Requisitos Funcionales:

1. **Interfaz de Usuario:**

   - La aplicación debe tener una interfaz de usuario intuitiva y fácil de usar.
   - Debe haber un formulario para agregar nuevas transacciones, que incluya campos para el nombre, monto, tipo (gasto o ingreso) y categoría de la transacción.
   - Debe haber una lista que muestre todas las transacciones registradas, con la opción de eliminar cada una de ellas.
   - Se debe mostrar el balance actual de todas las transacciones.

2. **Gestión de Transacciones:**

   - El usuario debe poder agregar nuevas transacciones, ya sea como gastos o ingresos.
   - Cada transacción debe incluir un nombre, monto, tipo (gasto o ingreso) y categoría.
   - El usuario debe poder eliminar transacciones individuales de la lista.

3. **Alerta de Saldo Bajo:**

   - La aplicación debe alertar al usuario cuando su saldo esté por debajo de un umbral específico.
   - El umbral debe ser configurable y puede establecerse en la inicialización de la aplicación.

## Requisitos Técnicos:

- Se debe utilizar IndexedDB para el almacenamiento de las transacciones.
- Deberá implementarse una clase para gestionar la base de datos (IndexedDB).
- Deberá implementarse una clase para gestionar las transacciones.

## Entrega (opcional)

Puedes hacer entrega del proyecto compartiendo la URL del repositorio (público) de GitHub.

## Solución

Aquí te dejo el link de una posible solución. [Repositorio](https://github.com/lucasnbarbero/clases-doc-js-practica2)
