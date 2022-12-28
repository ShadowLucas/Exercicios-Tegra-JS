/*Fazer um programa para ler as medidas da base e altura de um retângulo.
Em seguida, mostrar o valor da área, perímetro e diagonal deste retângulo,
com quatro casas decimais, conforme exemplo.
Exemplo:
Base do retângulo: 4.0
Altura do retângulo: 5.0
ÁREA = 20.0000
PERÍMETRO = 18.0000
DIAGONAL = 6.4031*/

function areaRetang()
{
    var base = Number(document.getElementById('numBase').value)
    var altura = Number(document.getElementById('numAltura').value)
    var resultArea = document.getElementById('AREA')
    var resultPer = document.getElementById('PERIMETRO')
    var resultDiag = document.getElementById('DIAGONAL')

    //CALCULA 

    var area = base * altura
    resultArea.innerHTML = `Area é igual a: ${area.toFixed(4)}`

    
    var perimetro = 2*(base + altura)
    resultPer.innerHTML = `O perimetro é igual a: ${perimetro.toFixed(4)}`


    var diagonal = Math.sqrt( (Math.pow(base, 2)) + (Math.pow(altura, 2)) )
    resultDiag.innerHTML = `A diagonal é igual a: ${diagonal.toFixed(4)}`
}