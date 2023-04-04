/*
let opcao = parseInt (prompt(" Digite um numero de 1 a 3 "))

switch(opcao){
    case 1:
        document.write("Primeira opção")
        break;
    case 2:
        document.write("Segunda opção")
        break;
    case 3:
        document.write("Terceira opção")
        break;
    default:
        document.write("Nenhuma das opções válidas")
        break;

}
*/

let valor = 7
console.log(valor);
valor = valor + 1
console.log(valor);
valor++
console.log(valor);

let valor1 = 5
console.log(valor1);
valor *= 4
console.log(valor1);
valor /= 8
console.log(valor1);

for(let i = 0; i <= 10; i++){
    console.log("Agora i vale" + i);
}

/* let carros= ["Gol", "Fusca", "Hb20", "Corsa"]

for(let i=0; i <br carros.length; i++){
    console.log(carros[i])
} */ 

let valor2 = 7
document.write(valor2)
document.write("<br> </br>")
valor = valor += 4;
valor ++
document.write(valor2)
document.write("<br> </br>")


let valor3 = 10
document.write(valor3)
document.write("<br> </br>")

valor3 = valor3 -= 2
document.write(valor3)
document.write("<br> </br>")

// usando o for
for (let i = 0; i < 10; i++){
    document.write("O valor é ",i)
    document.write("<br> </br>")

}

//usando for com array
let carros= ["Gol", "Fusca", "Audi", "Corsa"]
for (let i = 0; i < carros.length; i++){
    document.write(carros[i]);
    document.write("<br> </br>")
}
