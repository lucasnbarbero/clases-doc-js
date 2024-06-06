let miPromesa = new Promise((resolve, reject) => {
  // Simular una operación asíncrona
  setTimeout(() => {
    let exito = false;
    if (exito) {
      resolve("¡Operación exitosa!");
    } else {
      reject(new Error("¡Algo salió mal!"));
    }
  }, 2000);
});

const ejecutar = async () => {
  await miPromesa
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};

ejecutar();
