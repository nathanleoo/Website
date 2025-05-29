
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".register-form");

  if (!form) return;

  const campos = {
    nome: form.querySelector('input[name="nome"]'),
    email: form.querySelector('input[name="email"]'),
    senha: form.querySelector('input[name="senha"]'),
    confirmarSenha: form.querySelector('input[name="confirmarSenha"]'),
  };

  const mensagensErro = {
    nome: form.querySelector('[data-error-for="nome"]'),
    email: form.querySelector('[data-error-for="email"]'),
    senha: form.querySelector('[data-error-for="senha"]'),
    confirmarSenha: form.querySelector('[data-error-for="confirmarSenha"]'),
  };

  const sucesso = form.querySelector(".success-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valido = true;

    // Limpa mensagens anteriores
    Object.values(mensagensErro).forEach((msg) => {
      msg.textContent = "";
      msg.classList.remove("show");
    });
    sucesso.classList.remove("show");

    // Valida nome
    if (campos.nome.value.trim().length < 3) {
      mensagensErro.nome.textContent = "Nome muito curto.";
      mensagensErro.nome.classList.add("show");
      valido = false;
    }

    // Valida email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email.value);
    if (!emailValido) {
      mensagensErro.email.textContent = "Email inválido.";
      mensagensErro.email.classList.add("show");
      valido = false;
    }

    // Valida senha
    if (campos.senha.value.length < 6) {
      mensagensErro.senha.textContent = "Senha deve ter ao menos 6 caracteres.";
      mensagensErro.senha.classList.add("show");
      valido = false;
    }

    // Valida confirmação
    if (campos.senha.value !== campos.confirmarSenha.value) {
      mensagensErro.confirmarSenha.textContent = "As senhas não coincidem.";
      mensagensErro.confirmarSenha.classList.add("show");
      valido = false;
    }

    if (valido) {
      sucesso.classList.add("show");
      form.reset();
    }
  });
});
