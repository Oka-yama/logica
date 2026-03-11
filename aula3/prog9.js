let produto = parseInt(prompt('Informe o número do produto'));
switch (produto) {
    case 1:
        alert('café R$ 5,00')
    case 2:
        alert('leite R$ 4,00')
    case 3:
        alert('pão R$ 2,50')
    case 4:
        alert('bolo R$ 7,00')
    default:
        alert('Produto não cadastrado')
}