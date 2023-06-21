let resultado;


function soloNumeros(e) {
  let key = e.keyCode || e.which,
  tecla = String.fromCharCode(key).toLowerCase(),
  letras = " 0123456789",
  especiales = [8, 37, 39, 46],
  tecla_especial = false;

  for (let i in especiales) {
  if (key == especiales[i]) {
      tecla_especial = true;
      break;
      }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
  return false;
  }
}

const operationsAdition = () => {
  let date1 = parseInt(document.getElementById('inputId').value);
  let date2 = parseInt(document.getElementById('inputId2').value);

  resultado = date1 + date2;
  document.getElementById('result').innerHTML = "de la suma es : " +resultado;
  console.log(typeof resultado);
  console.log("de la suma es : " +resultado);
}

const operationsSubtraction = () => {
  let date1 = parseInt(document.getElementById('inputId').value);
  let date2 = parseInt(document.getElementById('inputId2').value);

  resultado = date1 - date2;
  document.getElementById('result').innerHTML = "de la resta es : " +resultado;
  console.log(typeof resultado);
  console.log("de la resta es : " +resultado);
  
}

const operationsMultiplication = () => {
  let date1 = parseInt(document.getElementById('inputId').value);
  let date2 = parseInt(document.getElementById('inputId2').value);

  resultado = date1 * date2;
  document.getElementById('result').innerHTML = "de la multiplicacion es : " +resultado;
  console.log(typeof resultado);
  console.log("de la multiplicacion es : " +resultado);
  
}

const operationsDivision = () => {
  let date1 = parseInt(document.getElementById('inputId').value);
  let date2 = parseInt(document.getElementById('inputId2').value);

  resultado = date1 / date2;
  document.getElementById('result').innerHTML = "de la division es : " +resultado;
  console.log(typeof resultado);
  console.log("de la division es : " +resultado);
  
}
