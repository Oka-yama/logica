let salario = parseFloat(prompt('Informe o salário'));
let vt , inss;
vt = salario * 0.06;
if (salario >= 2500){
    inss = salario * 0.11;
} else {
    inss = salario * 0.08
}
alert('Salário é: ' + salario '\ninss: '+ inss
+ '\nvale transporte: ' + vt)