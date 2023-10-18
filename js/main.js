
window.onload = function() {
    alert("Seja bem-vindo ao seu currículo!");
}
// script.js

// Função para validar o formulário de cadastro
function validateForm() {
    var password = document.querySelector('input[type="password"]');
    var confirmPassword = document.querySelector('input[type="password"][placeholder="Confirmação de Senha"]');
    
    if (password.value !== confirmPassword.value) {
        alert("A senha e a confirmação de senha não correspondem.");
        return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário se as senhas correspondem
}

// Adicionar um ouvinte de eventos ao formulário
var cadastroForm = document.querySelector('.cadastro-form');
cadastroForm.addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});
