/*Fazer um programa para ler os três coeficientes de uma equação do
segundo grau. Usando a fórmula de Bhaskara, calcular e mostrar os valores
das raízes x1 e x2 da equação com quatro casas decimais, conforme
exemplos. Se a equação não possuir raízes reais, mostrar uma mensagem.
Exemplos:
Coeficiente a: 1
Coeficiente b: 0
Coeficiente c: -9
X1 = 3.0000
X2 = -3.0000
Coeficiente a: 2
Coeficiente b: -4.5
Coeficiente c: 1.7
X1 = 1.7697
X2 = 0.4803
Coeficiente a: 1
Coeficiente b: 3
Coeficiente c: 4
Esta equação não possui raízes reais*/

function bhaskara()
{
    var a = Number(document.getElementById('A').value)
    var b = Number(document.getElementById('B').value)
    var c = Number(document.getElementById('C').value)
    var result = document.getElementById('resultado')

    var delta = (Math.pow(b,2) -4*a*c)
    var bhaskX1 = ((-b + Math.sqrt(delta))/ (2 * a))
    var bhaskX2 = ((-b - Math.sqrt(delta))/ (2 * a))

    if(bhaskX1 != 0 && bhaskX2 != 0)
    {    
        result.innerHTML = `X1 = ${bhaskX1.toFixed(4)} <br> X2 = ${bhaskX2.toFixed(4)}`
    }
    else
    {
        result.innerHTML = `Esta equação não possui raízes reais`
    }

}
