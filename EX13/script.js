/*Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá
direito a 100 minutos de telefone. Cada minuto que exceder a franquia de
100 minutos custa R$ 2.00. Fazer um programa para ler a quantidade de
minutos que uma pessoa consumiu, daí mostrar o valor a ser pago.
Exemplos:
Digite a quantidade de minutos: 22
Valor a pagar: R$ 50.00
Digite a quantidade de minutos: 103
Valor a pagar: R$ 56.00*/

function plano()
{
    var min = Number(document.getElementById('minutos').value)
    var result = document.getElementById('resultado')

    if(min < 100)
    {
        result.innerHTML = `Valor a pagar: R$ 50.00`
    }
    else
    {
        var total = ((min - 100) * 2) + 50
        result.innerHTML = `Valor a pagar: R$ ${total.toFixed(2)}`
    }
}