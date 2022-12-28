/*Fazer um programa para ler as medidas da largura e comprimento de um
terreno retangular com uma casa decimal, bem como o valor do metro
quadrado do terreno com duas casas decimais. Em seguida, o programa
deve mostrar o valor da área do terreno, bem como o valor do preço do
terreno, ambos com duas casas decimais, conforme exemplo.

Largura do terreno: 10.0
Comprimento do terreno: 30.0
Valor do metro quadrado: 200.00
Área do terreno = 300.00
Preço do terreno = 60000.00*/

function calculaAreaeValor()
{
    var numLarg = document.getElementById('numLargura')
    var numCompri = document.getElementById('numComprimento')
    var valorMetro = document.getElementById('numMetroQuad')
    var areaResult = document.getElementById('Area')
    var precoResult = document.getElementById('ValorTotal')
    
    //CALCULA AREA

    var comprimento = Number(numCompri.value)
    var largura = Number(numLarg.value)

    var area = comprimento * largura
    areaResult.innerHTML = `A area total é de ${area.toFixed(2)}m²`

    //CALCULA O PRECO

    var preco = Number(valorMetro.value)
    var total = area * preco
    precoResult.innerHTML = `O valor total é de R$ ${total.toFixed(2)}`
}






