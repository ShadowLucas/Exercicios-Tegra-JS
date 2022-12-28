/*Fazer um programa para ler três medidas A, B e C. Em seguida, calcular e
mostrar (imprimir os dados com quatro casas decimais):
a) a área do quadrado que tem lado A
b) a área do triângulo retângulo que base A e altura B
c) a área do trapézio que tem bases A e B, e altura C
Exemplo:
Digite a medida A: 4.0
Digite a medida B: 3.5
Digite a medida C: 5.2
ÁREA DO QUADRADO = 16.0000
ÁREA DO TRIÂNGULO = 7.0000
ÁREA DO TRAPÉZIO = 19.5000*/

function calculadorDeArea()
{
    var a = Number(document.getElementById('A').value)
    var b = Number(document.getElementById('B').value)
    var c = Number(document.getElementById('C').value)
    var result = document.getElementById('resultado')

    var areaQuad = (Math.pow(a,2))
    var areaTri = (a * b)/2
    var areaTrapz = ((a + b) * c)/2

    result.innerHTML = `ÁREA DO QUADRADO = ${areaQuad.toFixed(4)} <br> ÁREA DO TRIÂNGULO = ${areaTri.toFixed(4)} <br> ÁREA DO TRAPÉZIO = ${areaTrapz.toFixed(4)}`
}