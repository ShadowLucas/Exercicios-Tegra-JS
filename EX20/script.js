/*Escreva um programa que exiba a soma de todos os números
compreendidos entre um intervalo dado pelo usuário.
Exemplo:
Número inicial: 5
Número final: 19
Resultado: 180*/

function soma()
{
    var inicio = Number(document.getElementById('inicial').value)
    var fim = Number(document.getElementById('final').value)
    var result = document.getElementById('resultado')

    var total = 0

    for(var i = inicio; i <= fim; i++)
    {
        total = total + i
    }
    result.innerHTML = `${total}`
}