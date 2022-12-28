/*No arremesso de dardo, o atleta tem três chances para lançar o dardo à
maior distância que conseguir. Você deve criar um programa para, dadas
as medidas das três tentativas de lançamento, informar qual foi a maior.
Exemplo:
Digite as três distâncias:
83.21
79.53
89.15
MAIOR DISTÂNCIA = 89.15*/

function dardos()
{
    var tent1 = Number(document.getElementById('arremesso1').value)
    var tent2 = Number(document.getElementById('arremesso2').value)
    var tent3 = Number(document.getElementById('arremesso3').value)
    var result = document.getElementById('resultado')

    var tentativas = [tent1,tent2,tent3]
    var maior = tent1

    for(var i = 0; i < 3; i++)
    {
        if(tentativas[i] > maior)
        {
            maior = tentativas[i]
        }
    }

    result.innerHTML = `Maior: ${maior}`
}