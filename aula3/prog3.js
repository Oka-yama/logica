let idade = Number(prompt('Informe a sua idade'));
if (idade >= 70){
    console.log('voto facultativo');
} else if (idade >= 18){
    console.log('voto obrigatório')
} else if (idade >= 16){
  console.log('voto facultativo')
} else {
    console.log('não pode votar')
}
/*
menor que 16 -> não pode votar
16 a 17 anos -> voto facultativo (pode votar se quiser).
18 a 69 anos -> voto obrigatório.
70 anos ou mais voto facultativo novamente.
*/