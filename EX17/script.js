/*Fazer um programa para ler dois números inteiros, e dizer se um número é
múltiplo do outro. Os números podem ser digitados em qualquer ordem.
Exemplo:
Digite dois números inteiros:
6
24
São múltiplos.*/

function multiplo()
{
    var divisor = Number(document.getElementById('divi').value)
    var numerador = Number(document.getElementById('num').value)
    var result = document.getElementById('resultado')

    if(numerador % divisor == 0)
    {
        result.innerHTML = `São Multiplos`
    }
    else
    {
        result.innerHTML = `Não são multiplos`
    }
}
