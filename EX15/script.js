/*Fazer um programa para ler a quantidade de glicose no sangue de uma
pessoa e depois mostrar na tela a classificação desta glicose de acordo
com a tabela de referência abaixo:
Classificação Glicose
Normal -> Até 100 mg/dl
Elevado -> Entre 100 e 140 mg/dl
Diabetes -> Maior que 140 mg/dl
Exemplo:
Digite a medida da glicose: 129.0
Classificação: Elevado*/

function glicose()
{
    var nivel = Number(document.getElementById('nivelGlic').value)
    var result = document.getElementById('resultado')

    switch(true)
    {
        case (nivel <= 100): 
            result.innerHTML = `Classificação: NORMAL`
            break
        case (nivel >= 100 && nivel <= 140):
            result.innerHTML = `Classificação: ELEVADO`
            break
        case (nivel > 140):
            result.innerHTML = `Classificação: DIABETES`
            break
    }
}