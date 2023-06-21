// Expresión regular para validar el correo electrónico
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Obtener referencias a los elementos del formulario
const formulario = document.getElementById('formulario');
const correoInput = document.getElementById('correo');
const edadInput = document.getElementById('edad');
const tipoEmpleadoSelect = document.getElementById('tipo-empleado');
const camposVendedor = document.getElementById('campos-vendedor');
const cantidadVentasInput = document.getElementById('cantidad-ventas');
const montoVendidoInput = document.getElementById('monto-vendido');
const camposEncargado = document.getElementById('campos-encargado');
const empleadosCargoInput = document.getElementById('empleados-cargo');
const camposSupervisor = document.getElementById('campos-supervisor');
const localesAdminInput = document.getElementById('locales-administrados');
const descripcionDesempenoInput = document.getElementById('descripcion-desempeno');
const submitButton = document.getElementById('submit-button');
const tablaDatos = document.getElementById('tabla-datos');

// Asociar eventos para validar los inputs
correoInput.addEventListener('input', validarCorreo);
edadInput.addEventListener('input', validarEdad);
cantidadVentasInput.addEventListener('input', validarCantidadVentas);
montoVendidoInput.addEventListener('input', validarMontoVendido);
empleadosCargoInput.addEventListener('input', validarEmpleadosCargo);
localesAdminInput.addEventListener('input', validarLocalesAdmin);
descripcionDesempenoInput.addEventListener('input', validarDescripcionDesempeno);

// Función para validar el correo electrónico
function validarCorreo() {
    const correo = correoInput.value;
    const errorCorreo = document.getElementById('error-correo');

    if (emailRegex.test(correo)) {
        errorCorreo.textContent = '';
        correoInput.classList.remove('invalid');
    } else {
        errorCorreo.textContent = 'Correo inválido';
        correoInput.classList.add('invalid');
    }
    habilitarBotonSubmit();
}

// Función para validar la edad
function validarEdad() {
    const edad = parseInt(edadInput.value);
    const errorEdad = document.getElementById('error-edad');

    if (!isNaN(edad) && edad > 0) {
        errorEdad.textContent = '';
        edadInput.classList.remove('invalid');
    } else {
        errorEdad.textContent = 'Edad inválida';
        edadInput.classList.add('invalid');
    }
    habilitarBotonSubmit();
}

// Función para validar la cantidad de ventas
function validarCantidadVentas() {
    const cantidadVentas = parseInt(cantidadVentasInput.value);
    const errorCantidadVentas = document.getElementById('error-cantidad-ventas');

    if (!isNaN(cantidadVentas) && cantidadVentas > 0) {
        errorCantidadVentas.textContent = '';
        cantidadVentasInput.classList.remove('invalid');
    } else {
        errorCantidadVentas.textContent = 'Cantidad de ventas inválida';
        cantidadVentasInput.classList.add('invalid');
    }
    habilitarBotonSubmit();
}

// Función para validar el monto vendido
function validarMontoVendido() {
    const montoVendido = parseFloat(montoVendidoInput.value);
    const errorMontoVendido = document.getElementById('error-monto-vendido');

    if (!isNaN(montoVendido) && montoVendido > 0) {
        errorMontoVendido.textContent = '';
        montoVendidoInput.classList.remove('invalid');
    } else {
        errorMontoVendido.textContent = 'Monto vendido inválido';
        montoVendidoInput.classList.add('invalid');
    }
    habilitarBotonSubmit();
}

// Función para validar la cantidad de empleados a cargo
function validarEmpleadosCargo() {
    const empleadosCargo = parseInt(empleadosCargoInput.value);
    const errorEmpleadosCargo = document.getElementById('error-empleados-cargo');

    if (!isNaN(empleadosCargo) && empleadosCargo >= 5) {
        errorEmpleadosCargo.textContent = '';
        empleadosCargoInput.classList.remove('invalid');
    } else {
        errorEmpleadosCargo.textContent = 'Cantidad de empleados inválida';
        empleadosCargoInput.classList.add('invalid');
    }
    habilitarBotonSubmit();
}

// Función para validar la cantidad de locales administrados
function validarLocalesAdmin() {
    const localesAdmin = parseInt(localesAdminInput.value);
    const errorLocalesAdmin = document.getElementById('error-locales-administrados');

    if (!isNaN(localesAdmin) && localesAdmin >= 2) {
        errorLocalesAdmin.textContent = '';
        localesAdminInput.classList.remove('invalid');
    } else {
        errorLocalesAdmin.textContent = 'Cantidad de locales inválida';
        localesAdminInput.classList.add('invalid');
    }
    habilitarBotonSubmit();
}

// Función para validar la descripción del desempeño general
function validarDescripcionDesempeno() {
    const descripcionDesempeno = descripcionDesempenoInput.value.trim();
    const errorDescripcionDesempeno = document.getElementById('error-descripcion-desempeno');

    if (descripcionDesempeno.split(' ').length >= 5) {
        errorDescripcionDesempeno.textContent = '';
        descripcionDesempenoInput.classList.remove('invalid');
    } else {
        errorDescripcionDesempeno.textContent = 'Descripción inválida';
        descripcionDesempenoInput.classList.add('invalid');
    }
    habilitarBotonSubmit();
}

// Función para mostrar u ocultar los campos según el tipo de empleado seleccionado
function mostrarCampos() {
    const tipoEmpleado = tipoEmpleadoSelect.value;

    camposVendedor.style.display = 'none';
    camposEncargado.style.display = 'none';
    camposSupervisor.style.display = 'none';

    if (tipoEmpleado === 'vendedor') {
        camposVendedor.style.display = 'block';
    } else if (tipoEmpleado === 'encargado') {
        camposEncargado.style.display = 'block';
    } else if (tipoEmpleado === 'supervisor') {
        camposSupervisor.style.display = 'block';
    }
}

// Función para habilitar o deshabilitar el botón de submit
function habilitarBotonSubmit() {
    const inputsInvalidos = formulario.querySelectorAll('.invalid');

    if (inputsInvalidos.length === 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Función para agregar una fila a la tabla con la información del formulario
function agregarFila(event) {
    event.preventDefault();

    const correo = correoInput.value.trim();
    const edad = edadInput.value.trim();
    const tipoEmpleado = tipoEmpleadoSelect.value;
    const turno = document.querySelector('input[name="turno"]:checked').value;
    const colorFavorito = document.getElementById('color-favorito').value;

    const tabla = tablaDatos.getElementsByTagName('tbody')[0];
    const filas = tabla.getElementsByTagName('tr');

    for (const element of filas) {
        const celdaCorreo = element.getElementsByTagName('td')[0];
        if (celdaCorreo.textContent === correo) {
            element.getElementsByTagName('td')[1].textContent = edad;
            element.getElementsByTagName('td')[2].textContent = tipoEmpleado;
            element.getElementsByTagName('td')[3].textContent = turno;
            element.getElementsByTagName('td')[4].textContent = colorFavorito;
            limpiarFormulario();
            return;
        }
    }

    const fila = tabla.insertRow();

    const celdaCorreo = fila.insertCell();
    celdaCorreo.textContent = correo;
    celdaCorreo.setAttribute('contenteditable', 'true');

    const celdaEdad = fila.insertCell();
    celdaEdad.textContent = edad;

    const celdaTipoEmpleado = fila.insertCell();
    celdaTipoEmpleado.textContent = tipoEmpleado;

    const celdaTurno = fila.insertCell();
    celdaTurno.textContent = turno;

    const celdaColorFavorito = fila.insertCell();
    celdaColorFavorito.textContent = colorFavorito;

    limpiarFormulario();
}

// Función para limpiar el formulario después de agregar una fila
function limpiarFormulario() {
    formulario.reset();
    mostrarCampos();
    submitButton.disabled = true;
    const inputsInvalidos = formulario.querySelectorAll('.invalid');
    inputsInvalidos.forEach(input => input.classList.remove('invalid'));
    const errorMessages = formulario.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.textContent = '');
}

// Asociar evento al correo para verificar cambios al editarlo
correoInput.addEventListener('input', habilitarBotonSubmit);
