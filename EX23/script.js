/*Leia dois valores inteiros X e Y. A seguir, calcule e mostre a soma dos
números ímpares entre eles.
Exemplo:
Digite dois números:
2
9
SOMA DOS ÍMPARES = 15*/

function soma()
{
    var x = Number(document.getElementById('inicial').value)
    var y = Number(document.getElementById('final').value)
    var result = document.getElementById('resultado')

    var total = 0

    for(x; x < y; x++)
    {
        if(x % 2 != 0)
        {
            total += x
        }
    }
    result.innerHTML = `SOMA DOS ÍMPARES = ${total}`
}