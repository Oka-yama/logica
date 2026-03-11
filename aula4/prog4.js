let nota1 = parseFloat(prompt('Informe a nota 1'));
let nota2 = parseFloat(prompt('Informe a nota 2'));
let result = ((nota1 + nota2)/2)>=6 ? 'aprov' : 'reprov' ;
document.write('O aluno está: '+ result);