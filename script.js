document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value;

    document.getElementById("resposta").innerHTML =
    `🌸 Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    this.reset();
});
