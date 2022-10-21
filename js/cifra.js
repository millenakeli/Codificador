let opçoes1 = document.querySelector("#opçoes");
let saida = document.getElementById("mensagemCodificada");
let numero = document.getElementById("numeros");
let alfabeto = "abcdefghijklmnopqrstuvwxyz";


opçoes1.addEventListener("change", function(){

  if(opçoes1.value == 'cifraDeCesar') {
      numero.style.display = 'block';
  
  }else if (opçoes1.value == 'base64') {
      numero.style.display = 'none';
  
  }else {
      alert('Tem que escolher entre uma opção!')
  }
  })

function codificar1(){
   if(opçoes1.value === "base64"){
      codificacaoBase64()
    }else if(opçoes1.value === "cifraDeCesar"){codificaoCifraDeCesar()
    }else{ alert("Selecione uma!")
  }
}


function decodificar1(){
  if(opçoes1.value === "base64"){
      decodificacaoBase64()
  }else if(opçoes1.value === "cifraDeCesar"){
    decodificacaoCifraDeCesar()
  }else{ alert("Selecione uma!")
  }
}
  

//Base64//

function codificacaoBase64(){
  let msg = document.getElementById("mensagem-box").value;
  let cod = btoa(msg);
  document.getElementById("mensagemCod").innerHTML = cod;

}

function decodificacaoBase64(){
  let msg = document.getElementById("mensagem-box").value;
  let cod = atob(msg);
  document.getElementById("mensagemCod").innerHTML = cod;
}

//Cifra de César ainda está em andamento pois ainda não consegui entender, para não deixar de fazer o projeto, estou entregando o trabalho incompleto.