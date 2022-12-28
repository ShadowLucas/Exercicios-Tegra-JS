/*Fazer um programa para calcular o troco no processo de pagamento de
um produto de uma mercearia. O programa deve ler o preço unitário do
produto, a quantidade de unidades compradas deste produto, e o valor em
dinheiro dado pelo cliente (suponha que haja dinheiro suficiente). Seu
programa deve mostrar o valor do troco a ser devolvido ao cliente.
Exemplo:
Preço unitário do produto: 8.00
Quantidade comprada: 2
Dinheiro recebido: 20.00
TROCO = 4.00*/

function calculaTroco()
{
    var numPreco = Number(document.getElementById('preco').value)
    var numQtde = Number(document.getElementById('quantidade').value)
    var numDinero = Number(document.getElementById('dinheiro').value)
    var result = document.getElementById('resultado')

    var total = numQtde * numPreco


    if(numDinero >= total)
    {
        var troco = numDinero - total
        result.innerHTML = `Aqui está o troco R$ ${troco.toFixed(2)}`
    }
    else
    {
        result.innerHTML = `Dinheiro Insuficiente`
    }
}