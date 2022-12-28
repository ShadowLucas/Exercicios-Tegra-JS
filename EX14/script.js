/*Fazer um programa para calcular o troco no processo de pagamento de
um produto de uma mercearia. O programa deve ler o preço unitário do
produto, a quantidade de unidades compradas deste produto, e o valor em
dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a
ser devolvido ao cliente. Se o dinheiro dado pelo cliente não for suficiente,
mostrar uma mensagem informando o valor restante conforme exemplo.
Exemplos:
Preço unitário do produto: 8.00
Quantidade comprada: 2
Dinheiro recebido: 20.00
TROCO = 4.00
Preço unitário do produto: 30.00
Quantidade comprada: 3
Dinheiro recebido: 70.00
DINHEIRO INSUFICIENTE. FALTAM 20.00 REAIS*/

function troco()
{
    var preco = Number(document.getElementById('preco').value)
    var qtde = Number(document.getElementById('quantidade').value)
    var dinero = Number(document.getElementById('dinheiro').value)
    var result = document.getElementById('resultado')

    var total = qtde * preco
    var troco = dinero - total

    if(troco < 0)
    {
        var insufnte = (troco * -1)
        result.innerHTML = `DINHEIRO INSUFICIENTE. FALTAM R$ ${insufnte.toFixed(2)}`
    }
    else
    {
        result.innerHTML = `TROCO = R$ ${troco.toFixed(2)}`
    }
}