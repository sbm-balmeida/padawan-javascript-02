var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    //pegando o form do arquivo HTML
    var form = document.querySelector("#form-adiciona");

    //extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form); 

    var erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
        
    adicionaPacienteNaTabela(paciente);

    //limpar o formulario
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    //criando a tr e a td do paciente
    var pacienteTr = montaTr(paciente);
    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach( function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    } 
    
    if (paciente.nome.length == 0) {
        erros.push("O campo 'Nome' não pode está em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("O campo 'Gordura' não pode está branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O campo 'Peso' não pode está em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("O campo 'Altura' não pode está em branco");
    }

    return erros;
}
