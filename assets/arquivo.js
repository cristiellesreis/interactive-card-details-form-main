var campoNumCartao = document.getElementById("campoNumCartao");
var campoObrigatorioNumCartao = document.getElementById("campoObrigatorioNumCartao");
var campoMes = document.getElementById("campoMes");
var campoAno = document.getElementById("campoAno");
var campoObrigatorioVencimento = document.getElementById("campoObrigatorioVencimento");
var campoCvc = document.getElementById("campoCvc");
var campoObrigatorioCvc = document.getElementById("campoObrigatorioCvc");
var campoNomeCartao = document.getElementById("campoNomeCartao");
var numeroCartao = document.getElementById("numeroCartao");
var nomeCartao = document.getElementById("nomeCartao");
var vencimentoCartao = document.getElementById("vencimentoCartao");
var cvcCartao = document.getElementById("cvcCartao");
var mensagemSucesso = document.getElementById("mensagemSucesso");
var containerFormulario = document.getElementById("containerFormulario");

//expressões regulares para os campos de texto e numeros
const regexNumeros = /^[0-9]+$/;
const regexLetras = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

//função para limitar caracteres nos inputs
function maximo(campo, tamanhoMaximo) {
    if(campo.value.length == tamanhoMaximo) {
        return false;
    }
    return true;
}

//função para validar se os campos estão preenchidos corretamente

function confirmar(){
    var valido = true;

    if (campoCvc.value == ''){
        campoObrigatorioCvc.classList.remove('hide');
        campoCvc.classList.add('error');
        campoObrigatorioCvc.innerHTML="Can't be blank";
        valido = false;
    }else{
        campoObrigatorioCvc.classList.add('hide');
        campoCvc.classList.remove('error');
        campoObrigatorioCvc.innerHTML="";
    }
    
    if (campoMes.value == ''){
        campoObrigatorioVencimento.classList.remove('hide');
        campoMes.classList.add('error');
        campoObrigatorioVencimento.innerHTML="Can't be blank";
        valido = false;
    } else{
        campoMes.classList.remove('error');
    }
    
    if(campoAno.value == ''){
        campoObrigatorioVencimento.classList.remove('hide');
        campoAno.classList.add('error');
        campoObrigatorioVencimento.innerHTML="Can't be blank"; 
        valido = false;
    } else{
        campoAno.classList.remove('error');
    }
    
    if(campoAno.value != '' && campoMes.value != '' ){
        campoObrigatorioVencimento.innerHTML=""; 
    }


    if (!regexNumeros.test(campoNumCartao.value)){
        campoObrigatorioNumCartao.classList.remove('hide');
        campoNumCartao.classList.add('error');
        campoObrigatorioNumCartao.innerHTML="Wrong format, numbers only";
        valido = false;
    }

    if(campoNumCartao.value == ''){
        campoNumCartao.classList.add('error');
        campoObrigatorioNumCartao.innerHTML="Can't be blank"; 
        valido = false;
    } else if(regexNumeros.test(campoNumCartao.value)){
        campoNumCartao.classList.remove('error');
        campoObrigatorioNumCartao.innerHTML="";
    }

    if (valido) {
        mensagemSucesso.classList.remove('hide');
        containerFormulario.classList.add('hide');
    }
}

// Preenchem o cartao enquanto o usuario digita

function preencherNomeCartao(input){
    nomeCartao.innerHTML= input.value;
}

function preencherNumeroCartao(input){

    // Remove qualquer espaço existente
    let cleaned = input.value.replace(/\s+/g, '');
    
    // Adiciona os espaços a cada quatro dígitos
    let formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');

    numeroCartao.innerHTML = formatted.trim();
}

function preencherMesVencimentoCartao(input){
    if (input.value.length == 1) {
        vencimentoCartao.innerHTML = '0' + input.value + vencimentoCartao.innerHTML.substring(2,5)
    } else if (input.value.length == 2) {
        vencimentoCartao.innerHTML = input.value + vencimentoCartao.innerHTML.substring(2,5)
    }
}

function preencherAnoVencimentoCartao(input){
    if (input.value.length == 1) {
        vencimentoCartao.innerHTML = vencimentoCartao.innerHTML.substring(0,3) + '0' + input.value;
    } else if (input.value.length == 2) {
        vencimentoCartao.innerHTML = vencimentoCartao.innerHTML.substring(0,3) + input.value;
    }
}

function preencherCvcCartao(input){
    cvcCartao.innerHTML= input.value;
}






