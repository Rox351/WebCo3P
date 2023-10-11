// Verificar informações de login no LocalStorage
var storedLogin = 'WebContinental';
var storedSenha = 'Infoar';

// Obter referência ao formulário de login
var form = document.getElementById('login-form');

// Adicionar um manipulador de eventos de envio ao formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obter valores dos campos de e-mail e senha
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  // Verificar se o e-mail e a senha coincidem
  if (login === storedLogin && senha === storedSenha) {
    // Autenticação bem-sucedida
    // Direcionar para a página inicial ou exibir uma mensagem de sucesso
    window.location.href = 'Menus.html';
  } else {
    // Autenticação falhada
    // Exibir uma mensagem de erro
    alert('E-mail ou senha inválidos. Tente novamente.');
  }
});
