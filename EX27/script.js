/*Fazer um programa para verificar se um número ou palavra é palíndroma;
Exibir como saída se o número ou palavra "é palíndroma" ou "não é
palíndroma". Um palíndromo é algo que pode ser lido em qualquer
sentido. Ex.: 110011, Reger, Osso.
Exemplos:
Palavra: Reger
Saída: É palíndroma.
Palavra: Casa
Saída: Não é palíndroma.*/

function palindroma()
{
    var texto = document.getElementById('string').value
    var result = document.getElementById('resultado')
    
    texto = texto.toLowerCase()
    var textoInvert = texto.split('').reverse().join('')

    if(textoInvert == texto)
    {   
        result.innerHTML = `É palíndroma`
    }
    else
    {
        result.innerHTML = `Não é palíndroma`
    }
}