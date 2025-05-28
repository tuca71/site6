// Menu mobile
document.getElementById("btnMenu").addEventListener("click", () => {
  document.querySelector("#menu ul").classList.toggle("active");
});

// Envio de formulário
document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Mensagem enviada com sucesso! Entraremos em contato.");
  this.reset();
});
