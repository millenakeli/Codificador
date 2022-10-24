let opcoes1 = document.querySelector("#opcoes");
let saida1 = document.getElementById("mensagemCod");
let numero1 = document.getElementById("numeros");
let alfabeto1 = "abcdefghijklmnopqrstuvwxyz";


opcoes1.addEventListener("change", function(){

  if(opcoes1.value == 'cifraDeCesar') {
      numero1.style.display = 'block';
  
  }else if (opcoes1.value == 'base64') {
      numero1.style.display = 'none';
  
  }else {
      alert('Tem que escolher entre uma opção!')
  }
  })

function codificar1(){
   if(opcoes1.value === "base64"){
      codificacaoBase64()
    }else if(opcoes1.value === "cifraDeCesar"){codificacaoCifraDeCesar()
    }else{ alert("Selecione uma!")
  }
}


function decodificar1(){
  if(opcoes1.value === "base64"){
      decodificacaoBase64()
  }else if(opcoes1.value === "cifraDeCesar"){
    decodificacaoCifraDeCesar()
  }else{ alert("Selecione uma!")
  }
}


  
//Cifra de cesar//

function codificacaoCifraDeCesar(){
    let mensagem = document.getElementById("mensagem-box").value;
    let msgMinuscula= mensagem.toLowerCase();
    let num = (Number(numero1.value) % 26);
    let resultado = '';
  
    for(var i = 0; i < msgMinuscula.length; i++){
       for(var j =0; j < alfabeto1.length; j++){
         if(msgMinuscula[i] == alfabeto1[j]){
            resultado += alfabeto1 [j + num]
           break;
       } else if (msgMinuscula[i] == ' ') {
        resultado += ' ';
           break;
       }
    }  
saida1.value =resultado;
}
}

function decodificacaoCifraDeCesar(){
    let mensagem = document.getElementById("mensagem-box").value;
    let msgMinuscula= mensagem.toLowerCase();
    let num = (Number(numero1.value) % 26);
    let resultado = '';
  
    for(var i = 0; i < msgMinuscula.length; i++){
       for(var j = alfabeto1.length - 1; j >= 0; j--){
         if(msgMinuscula[i] == alfabeto1[j]){
            resultado += alfabeto1 [j - num]
           break;
       } else if (msgMinuscula[i] == ' ') {
           resultado += ' ';
           break;
       }
      }
  }
  saida1.value = resultado;
}




//Base64//

function codificacaoBase64(){
  let msg = document.getElementById("mensagem-box").value;
  let resultado = btoa(msg);
  document.getElementById("mensagemCod").innerHTML = resultado;

}

function decodificacaoBase64(){
  let msg = document.getElementById("mensagem-box").value;
  let resultado = atob(msg);
  document.getElementById("mensagemCod").innerHTML = resultado;
}


