/*Fazer um programa para ler o nome de um(a) funcionário(a), o valor que
ele(a) recebe por hora, e a quantidade de horas trabalhadas por ele(a). Ao
final, mostrar o valor do pagamento do funcionário com uma mensagem
explicativa, conforme exemplo.
Exemplo:
Nome: João Silva
Valor por hora: 50.00
Horas trabalhadas: 60
O pagamento para João Silva deve ser 3000.00*/

function calculaSalario()
{
    var name = document.getElementById('nome').value
    var valoHora = Number(document.getElementById('valorHora').value)
    var qtadeHora = Number(document.getElementById('quantidadeHora').value)
    var result = document.getElementById('resultado')

    var total = qtadeHora * valoHora

    result.innerHTML = `O pagamento para ${name} deve ser R$${total.toFixed(2)}`
}