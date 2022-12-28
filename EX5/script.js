/*Fazer um programa para ler o valor "r" do raio de um círculo, e depois
mostrar o valor da área do círculo com três casas decimais. A fórmula da
área do círculo é a seguinte: área = π. r². O valor de π corresponde a 3.14159.
Exemplo:
Digite o valor do raio do círculo: 2.0
ÁREA = 12.566*/

function areaCirculo()
{
    var numRaio = Number(document.getElementById('raio').value)
    var result = document.getElementById('resultado')
    
    var pi = 3.14159
    var area = (pi * Math.pow(numRaio, 2))

    result.innerHTML = `A área do círculo é igual a ${area.toFixed(3)}`
}