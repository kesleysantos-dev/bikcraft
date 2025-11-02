const formulario = document.querySelector("form");
function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1: padding: 1rem; border-radius:4px; background: #f7f7f7;'> <span style = 'color: #317A00'> Mensagem Enviada </span>, aguarde, logo entraremos em contato.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column:1/-1: padding: 1rem; border-radius:4px; background: #f7f7f7;'><span style = 'color: #E00000'> Erro no Envio</span>, você pode nos enviar diretamente via email </p>";
  }
}
function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";
  const data = new FormData(formulario);
  console.log(data);

  fetch("./enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}
formulario.addEventListener("submit", enviarFormulario);
