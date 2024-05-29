var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target; //pegar o evento que foi clicado
    var paiDoAlvo = alvoEvento.parentNode; //pegar o pai do evento clicado
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function() { //irá fazer o código esperar um tempo para então ir para a função
        paiDoAlvo.remove();
    }, 500);
});
