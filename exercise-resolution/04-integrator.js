function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function jugarAdivinanza() {
  const numeroSecreto = generarNumeroAleatorio();
  let intentosRestantes = 10;

  function adivinarNumero() {
    while (intentosRestantes > 0) {
      const intento = parseInt(
        prompt(
          `Adivina el número (tienes ${intentosRestantes} intentos restantes):`
        ),
        10
      );

      if (isNaN(intento)) {
        alert("Por favor, ingresa un número válido.");
        continue;
      }

      intentosRestantes--;

      if (intento === numeroSecreto) {
        alert(`¡Felicidades! Adivinaste el número secreto (${numeroSecreto}).`);
        return;
      } else if (intento < numeroSecreto) {
        alert("El número secreto es mayor.");
      } else {
        alert("El número secreto es menor.");
      }

      if (intentosRestantes === 0) {
        alert(
          `Lo siento, te quedaste sin intentos. El número secreto era ${numeroSecreto}.`
        );
      }
    }
  }

  adivinarNumero();
}

jugarAdivinanza();
