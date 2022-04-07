let numCartas = prompt("Quantas cartas você deseja jogar?"); 

while(numCartas % 2 === 1 || numCartas<4 || numCartas>14) {  
    alert("Inválido, só são permitidos números pares, de 4 a 14!")
    numCartas = prompt("Quantas cartas você deseja jogar?"); 
}  

