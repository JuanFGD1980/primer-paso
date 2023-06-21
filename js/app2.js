const form = document.getElementById('myForm');
let alertEmail = document.getElementById('infoMail');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

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

function clearForm() {
  document.getElementById('infoMail').innerText="";
  document.getElementById('email').value = "";
  document.getElementById('infoName').innerText="";
  document.getElementById('name').value = "";
  document.getElementById('infoMensaje').innerText="";
  document.getElementById('msg').value = "";
  document.getElementById('infoIdentification').innerText="";
  document.getElementById('identification').value = "";
}

function alertaMail(){
  document.getElementById('infoMail').innerText="* Email no valido *";
}

function alertName(){
  document.getElementById('infoName').innerText="* nombre con minimo 3 caracteres *";
}

function alertMensaje(){
  document.getElementById('infoMensaje').innerText="* Sin mensaje *";
}

function alertIdentification(){
  document.getElementById('infoIdentification').innerText="*Ingrese una identificacion con minimo 8 caracteres *";
}


function deleteAlertaMail(){
  document.getElementById('infoMail').innerText="";
}

function deleteAlertaName(){
  document.getElementById('infoName').innerText="";
}

function deleteAlertaMensajel(){
  document.getElementById('infoMensaje').innerText="";
}

function deleteAlertaIdentification(){
  document.getElementById('infoIdentification').innerText="";
}

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
function validateForm() {
  const emailInput = document.getElementById('email');
  const nameInput = document.getElementById('name');
  const mensajeInput = document.getElementById('msg');
  const identificationInput = document.getElementById('identification');
  const email = emailInput.value;
  const name = nameInput.value;
  const mensaje = mensajeInput.value;
  const identificacion = identificationInput.value;

  let validated = 0;

  if (!validateEmail(email)) {
    alertaMail();    
  } else {
    deleteAlertaMail();
    validated++;
  }

  if (name == "") {
    alertName();
  } else {
    deleteAlertaName();
    validated++;
  }

  if (document.getElementById('name').value.length < 3) {
    alertName();
  } else {
    deleteAlertaName();
    validated++;
  }

  if (identificacion == "") {
    alertIdentification();
  } else {
    deleteAlertaIdentification();
    validated++;
  }

  if (document.getElementById('identification').value.length < 8) {
    alertIdentification();
  } else {
    deleteAlertaIdentification();
    validated++;
  }

  if (mensaje == "") {
    alertMensaje();
  } else {
    deleteAlertaMensajel()
    validated++;
  }

  if (validated == 6) {
    alert("Formulario enviado");
    clearForm();
  } else {
    alert("Faltan  datos");
    
  }
}



