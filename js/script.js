function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const nomeErro = document.getElementById("nome-erro");
  
    const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!nomeRegex.test(nome)) {
      nomeErro.style.display = 'block';
      return false;
    } else {
      nomeErro.style.display = 'none';
    }
  
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    mostrarPopup();
  
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
  
    return false;
  }
  
  const textarea = document.getElementById("mensagem");
  const contador = document.getElementById("contador");
  
  textarea.addEventListener("input", function() {
    const caracteres = textarea.value.length;
    contador.textContent = `${caracteres}/150`;
  });
  
  function mostrarPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function fecharPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  