function edadVerficar (edad){
  if (edad == 18) {
    console.log("Es mayor de edad");
  } else if (edad > 18 && edad < 25) {
    console.log("Es un adulto Joven");
  } else if(edad >= 25){
    console.log("Es adulo mayor");
  }else{
    console.log("Es menor de edad");
  }
}

edadVerficar(39)

let pasos = 5;
for (let contador = 0; contador < pasos; contador++) {
  console.log("Estoy dando del paso"+ " " +contador);
}
console.log("Termina el for")


let numero = 5;
let contador = 0;

while (contador < numero) {
  contador++;
  console.log(contador);
}
console.log("fin while");

try {
  
  let a = 10;
  let b = v;
  let resultado = a/b;
  console.log(resultado);
} catch (error) {
  console.log("Ha ocurrido un error: " , error.message);
}finally{
  console.log("finaizo");
}