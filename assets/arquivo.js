var campoNumCartao = document.getElementById("campoNumCartao");
var campoObrigatorioNumCartao = document.getElementById("campoObrigatorioNumCartao");
var campoMes = document.getElementById("campoMes");
var campoAno = document.getElementById("campoAno");
var campoObrigatorioVencimento = document.getElementById("campoObrigatorioVencimento");
var campoCvc = document.getElementById("campoCvc");
var campoObrigatorioCvc = document.getElementById("campoObrigatorioCvc");


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
    if (campoCvc.value == ''){
        campoObrigatorioCvc.classList.remove('hide');
        campoCvc.classList.add('error');
        campoObrigatorioCvc.innerHTML="Can't be blank";

    }else{
        campoObrigatorioCvc.classList.add('hide');
        campoCvc.classList.remove('error');
        campoObrigatorioCvc.innerHTML="";
    }
    
    if (campoMes.value == ''){
        campoObrigatorioVencimento.classList.remove('hide');
        campoMes.classList.add('error');
        campoObrigatorioVencimento.innerHTML="Can't be blank";
    } else{
        campoMes.classList.remove('error');
    }
    
    if(campoAno.value == ''){
        campoObrigatorioVencimento.classList.remove('hide');
        campoAno.classList.add('error');
        campoObrigatorioVencimento.innerHTML="Can't be blank"; 
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
        
    } else{
        campoNumCartao.classList.remove('error');
    }

    if(campoNumCartao.value != ''){
        campoObrigatorioNumCartao.innerHTML=""; 
    }

}



