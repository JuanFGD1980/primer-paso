let personas = [
  {
    nombre : "Juan",
    edad : 43,
    ciudad : "Medellin"
  },
  {
    nombre : "Alejandra",
    edad : 39,
    ciudad : "Bello"
  },
  {
    nombre : "Pedro",
    edad : 28,
    ciudad : "Rionegro"
  },
]

function crearMensajesDePresentacion(personas) {
  const mensajes = [];
  

  for (const element of personas) {
    const mensaje = `Mi nombre es ${element.nombre}, tengo ${element.edad} años y vivo en ${element.ciudad}.`
    mensajes.push(mensaje);
  }
  return mensajes;
}

const mensajesDePresentacion = crearMensajesDePresentacion(personas);
console.log(mensajesDePresentacion[0]);



for (let index = 0; index < mensajesDePresentacion.length; index++) {
  const element = mensajesDePresentacion[index];
    document.getElementById('target'+index+'').textContent = element;
  
}




