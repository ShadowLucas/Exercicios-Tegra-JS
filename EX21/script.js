/*Leia um valor inteiro X. Em seguida mostre os pares de 1 até X, um valor por
linha, inclusive o X, se for o caso.
Exemplo:
Digite o valor de X: 8
2
4
6
8*/

function par()
{
    var final = Number(document.getElementById('x').value)
    var result = document.getElementById('resultado')

    var inicial 
    var atual
    var total

    for(inicial = 1; inicial <= final; inicial++)
    {
        atual = inicial
        if(atual % 2 == 0)
        {
            total = atual
            result.innerHTML += `${total}<br>`
        }
    }
}