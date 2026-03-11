let num, soma = 0;
for (let i=0; i<5; i++){
    num = parseInt(prompt('Informe o número'));
    soma += num; // igual a soma = soma + num
}
document.write(soma);