let numCartas = prompt("Quantas cartas você deseja jogar?");  
let numJogadas=0; 
let pares=0; 

while(numCartas % 2 === 1 || numCartas<4 || numCartas>14) {  
    alert("Inválido, só são permitidos números pares, de 4 a 14!")
    numCartas = prompt("Quantas cartas você deseja jogar?"); 
}  
 
const gifs= ['imagens/bobrossparrot.gif','imagens/bobrossparrot.gif','imagens/explodyparrot.gif','imagens/explodyparrot.gif','imagens/fiestaparrot.gif','imagens/fiestaparrot.gif','imagens/metalparrot.gif','imagens/metalparrot.gif','imagens/revertitparrot.gif','imagens/revertitparrot.gif','imagens/tripletsparrot.gif','imagens/tripletsparrot.gif','imagens/ÍbisSC.png','imagens/ÍbisSC.png'];

let embaralha = gifs.slice(0, numCartas); 
embaralha.sort(comparador); 

function comparador() { 
    return Math.random() - 0.5; 
}  

 function baralho() { 
    let carteado= document.querySelector("ul"); 
    for(let i=0; i<embaralha.length; i++) { 
        carteado.innerHTML += 
        `<ul class="carta" onclick="viraCarta(this)"> 
            <li class="frente"> </li>  
            <li class="verso frente-verso"> <img  src="${embaralha[i]}"/> </li>
    </ul> `
    }  
 } 

 baralho();

 function viraCarta(elemento) { 
    console.log(elemento);
    const passaro = document.querySelector(".frenteEscolhida");   
    const figurasAnimadas = document.querySelector(".versoEscolhido");  
    elemento.querySelector(".frente").classList.add("frenteEscolhida"); 
    elemento.querySelector(".frente-verso").classList.add("versoEscolhido");

    if( figurasAnimadas !== null) { 
        if(elemento.querySelector(".frente-verso").innerHTML === figurasAnimadas.innerHTML) { 
            elemento.querySelector(".frente").classList.add("parFrente");  
            elemento.querySelector(".frente-verso").classList.add("parVerso");  
            figurasAnimadas.classList.add("parVerso");
            passaro.classList.add("parFrente");  
            pares++;
        }  

        setTimeout( function() {  
            elemento.querySelector(".frente").classList.remove("frenteEscolhida");
            elemento.querySelector(".frente-verso").classList.remove("versoEscolhido"); 
            document.querySelector(".versoEscolhido").classList.remove("versoEscolhido");
            document.querySelector(".frenteEscolhida").classList.remove("frenteEscolhida"); 
        } , 1000);
    } 
    
    numJogadas++; 

} 

let contador=0; 
let idInterval= setInterval(tempo, 1000);
function tempo() {  
    document.querySelector(".relogio").innerHTML = `${contador}s`; 
    if(pares === (numCartas/2)) { 
        clearInterval(idInterval,30); 
        alert(`Você ganhou em ${numJogadas} jogadas em ${contador}s`); 
        reiniciar();
    } 
    contador++;
} 

tempo(); 

function reiniciar() { 
    let reinicio = prompt("Gostaria de reiniciar a partida? É válido somente 'sim' ou 'não'"); 
    if(reinicio === "Sim" || reinicio === "sim") { 
        window.location.reload();
    } else { 
        alert("Fim de jogo");
    }
}
