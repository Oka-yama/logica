/*
monte um programa para ler um número
e mostrar a tabuada e multiplicação
deste número de 0 até 10
*/
let num = parseInt(prompt('Insira um número'));
for (let i=0; i<11; i++){
    document.write(num + ' x ' + i + ' = ' + num * i + '<br>');
}