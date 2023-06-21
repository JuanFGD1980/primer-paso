// Importar las credenciales de Auth0
const auth0 = new auth0.WebAuth({
  domain: 'YOUR_AUTH0_DOMAIN',
  clientID: 'YOUR_AUTH0_CLIENT_ID',
});

// Función para realizar la autenticación
function login(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  auth0.login({
    realm: 'Username-Password-Authentication',
    username,
    password,
  }, function(err, authResult) {
    if (err) {
      document.getElementById('error-message').textContent = err.description;
    } else {
      // Se ha autenticado correctamente, redirigir a otra página
      window.location.href = 'dashboard.html';
    }
  });
}
