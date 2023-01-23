let selectButton = document.querySelector('#selectButtons');





let button = document.querySelector('#button');
let form = document.querySelectorAll('form')
let radios = document.querySelector ('.radios')
let submit = document.querySelectorAll('submit')
let nav = document.querySelectorAll('nav')




//  base64: codifica e descodifica
const codificaBase64 = (texto) => btoa (texto)

const decodificaBase64 = (texto) => atob (texto)


$('#selectButtons').on('change', () => {
    console.log($('#selectButtons option:selected').text());

})
$('#rangeCifra').on('mousemove',()=>{
     $('#labelRange').text($('#rangeCifra').val())

})


// Função que codifica Cifra de Cesar //
const codificaCifra = (texto,chave) => {
     let frase = ''
     for(let i = 0; i < texto.length; i ++){
          let fraseAscii= texto.charCodeAt(i)
         

          if( fraseAscii >= 65 && fraseAscii <= 90){
               fraseAscii += chave
               if(fraseAscii > 90){
                    fraseAscii = fraseAscii - 90 + 64
               
               }
          }

          if( fraseAscii >= 97 && fraseAscii <= 122){
               fraseAscii += chave
               if(fraseAscii > 122){
                    fraseAscii = fraseAscii - 122 + 96
              
               }
          }
          frase += String.fromCharCode(fraseAscii)
     }
     return frase
}

// Função que decodifica Cifra de Cesar //
const decodificaCifra = (texto,chave) => {
     let frase = ''
     for(let i = 0; i < texto.length; i ++){
          let fraseAscii= texto.charCodeAt(i)
         

          if( fraseAscii >= 65 && fraseAscii <= 90){
               fraseAscii -= chave
               if(fraseAscii < 65){
                    fraseAscii =  91 - (65 - fraseAscii)
               }
          }

          if( fraseAscii >= 97 && fraseAscii <= 122){
               fraseAscii -= chave
               if(fraseAscii < 97){
                    fraseAscii = 123 - (97- fraseAscii)
               }
          }
          frase += String.fromCharCode(fraseAscii)
     }
     return frase
}

$('input[name=entrada]').on('change', () =>{
     let entrada = $('input[name=entrada]:checked').val()
     button.innerHTML=entrada

})

button.addEventListener('click', (e) =>{
     e.preventDefault()
   
     let resultado = $('#selectButtons option:selected').text();
     let entrada = $('input[name=entrada]:checked').val()
     let mensagem = document.querySelector('#mensagem').value;
     let incremento = document.querySelector('#rangeCifra').value;
     let outPut = document.querySelector('#outPut');
     if(entrada === 'Codificar'){
   
          if(resultado === 'Base64'){
          outPut.innerHTML=codificaBase64(mensagem)
         
              
         
          }else if(resultado ==='Cifra de Cesar'){
               outPut.innerHTML=codificaCifra(mensagem,10)        
          }
     
     }else if(entrada ==='Decodificar'){
          if(resultado === 'Base64'){
               outPut.innerHTML=decodificaBase64(mensagem)

          }else if(resultado ==='Cifra de Cesar'){
               outPut.innerHTML=decodificaCifra(mensagem,10)
               
          }

     }
     
});


// ======== Função para ocultar a range ========//
// A range só  fica visivel quando aciona o btn decodificar //

let btn1 = document.querySelector('#radio2');
let range = document.querySelector('.range');

btn1.addEventListener('click', function(){

     if(range.style.display === 'block'){
          range.style.display = 'none';
     }else{
          range.style.display = 'block';
     }
});






















