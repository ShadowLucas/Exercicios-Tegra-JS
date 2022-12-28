/*Fazer um programa para ler três números inteiros. Em seguida, mostrar
qual o menor dentre os três números lidos. Em caso de empate, mostrar
apenas uma vez.
Exemplo:
Primeiro valor: 7
Segundo valor: 3
Terceiro valor: 8
MENOR = 3*/

function descobreMenor()
{
    var num1 = Number(document.getElementById('n1').value)
    var num2 = Number(document.getElementById('n2').value)
    var num3 = Number(document.getElementById('n3').value)

    var array = [num1, num2, num3]
    var result = document.getElementById('resultado')

    var menor

    var menor = array[0]
    for(var i = 0; i < 3; i++)
    {
        atual = array[i]
        if(atual < menor)
        {
            menor = array[i]
        }
    }

    result.innerHTML = `MENOR = ${menor}`
}