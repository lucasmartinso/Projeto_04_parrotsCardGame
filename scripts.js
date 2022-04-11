let numCartas = prompt("Quantas cartas você deseja jogar?");  
let numJogadas=0; 
let pares=0; 

while(numCartas % 2 === 1 || numCartas<4 || numCartas>14) {  
    alert("Inválido, só são permitidos números pares, de 4 a 14!")
    numCartas = prompt("Quantas cartas você deseja jogar?"); 
}  

const lista= document.querySelector("ul");  
const gifs= ['imagens/bobrossparrot.gif','imagens/explodyparrot.gif','imagens/fiestaparrot.gif','imagens/metalparrot.gif','imagens/revertitparrot.gif','imagens/tripletsparrot.gif','imagens/unicornparrot.gif'];

let embaralha = gifs.slice(0,numCartas); 
embaralha.sort(comparador); 

function comparador() { 
    return Math.random() - 0.5; 
} 

let carteado= document.querySelector("ul"); 

for(let i=0; i<numCartas; i++) { 
    lista.innerHTML += 
    `<ul class="carta" onclick="viraCarta(this)"> 
        <li class="frente"> </li>  
        <li class="verso ibagem frente-verso"> <img  src="${gifs[i]}"/> </li>
</ul> `
 } 

 function viraCarta(elemento) { 
    console.log(elemento);
    const passaro = document.querySelector(".frente");   
    elemento.querySelector(".frente").classList.add("frenteEscolhida");
    const figurasAnimadas = document.querySelector(".verso");  
    elemento.querySelector(".verso").classList.add("versoEscolhido");

    if( figurasAnimadas !== null) { 
        if(elemento.querySelector(".verso").innerHTML === versoEscolhido.innerHTML) { 
            elemento.querySelector(".verso").classList.add("par");  
            figurasAnimadas.classList.add("par");
            elemento.querySelector(".frente").classList.add("naoPar"); 
            passaro.classList.add("naoPar");  
            pares++;
        }  

        setTimeout( comparador(), { 
            elemento.querySelector(".verso").classList.add("par");
            elemento.querySelector(".frente").classList.add("naoPar");
            document.querySelector(".versoEscolhido").classList.remove("versoEscolhido");
            document.querySelector(".frenteEscolhida").classList.remove("frenteEscolhida");
        } , 1000);
    } 
    
    numJogadas++;

}