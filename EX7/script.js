/*Fazer um programa para ler a distância total (em km) percorrida por um
carro, bem como o total de combustível gasto por este carro ao percorrer
tal distância. Seu programa deve mostrar o consumo médio do carro, com
três casas decimais.
Exemplo:
Distância percorrida: 500
Combustível gasto: 38.5
Consumo médio = 12.987*/

function calculaKm()
{
    var numKm = Number(document.getElementById('km').value)
    var numCombust = Number(document.getElementById('combustivel').value)
    var result = document.getElementById('resultado')

    var total = (numKm / numCombust)
    result.innerHTML =`Comsumo médio = ${total.toFixed(3)}`
}