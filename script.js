let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

let  etapaAtual = 0; //Variável que define o ídice 0 do array contido em etapas.js como a etapa inicial
let numero = '';//Variável que permite a inserção dos números digitados

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    //montando o laço de repetição da quantidade de números da etapa
    for (let i=0; i<etapa.numeros;i++){
        if (i === 0){
            numeroHtml += '<div class="num blink"></div>'
        }else{
            numeroHtml += '<div class="num"></div>';
        }
        
    }
    
    
    //removendo as informações visuais da tela
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}

function atualizaInterface(){

}

//Função que pega o número digitado e preenche nos quadrados correspondentes
function clicou(n){
    let elNumero = document.querySelector('.num.blink');
    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('blink');
        if(elNumero.nextElementSibling !==null){
            elNumero.nextElementSibling.classList.add('blink');
        }else{
            atualizaInterface();
        }
        
    }
}
function branco(){
    
}
function corrige(){
    
}
function confirma(){
    
}

comecarEtapa();