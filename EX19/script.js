/*Uma empresa vai conceder um aumento percentual de salário aos seus
funcionários dependendo de quanto cada pessoa ganha, conforme tabela
ao lado. Fazer um programa para ler o salário de uma pessoa, daí mostrar
qual o novo salário dessa pessoa depois do aumento, quanto foi o aumento
e qual foi a porcentagem de aumento.
Salário atual Aumento
Até R$ 999.00 -> 20%
Entre R$ 1000.00 e R$ 2999.00 -> 15%
Entre R$ 3000.00 e R$ 7999.00 -> 10%
Acima de R$ 8000.00 -> 05%
Exemplo:
Digite o salario da pessoa: 2500.00
Novo salário = R$ 2875.00
Aumento = R$ 375.00
Porcentagem = 15 %*/

function aumento()
{
    var salar = Number(document.getElementById('salario').value)
    var result = document.getElementById('resultado')

    var aumento

    switch(true)
    {
        case (salar <= 999.00):
            aumento = ((salar * 20)/100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 20%`
           break
        case (salar >= 1000.00 && salar <= 2999.00):
            aumento = ((salar * 15)/100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 15%`
            break
        case (salar >= 3000.00 && salar <= 7999.00):
            aumento = ((salar * 10)/100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 10%`
            break
        case (salar > 8000.00):
            aumento = ((salar * 5)/100) + salar
            result.innerHTML = `Aumento = R$${aumento.toFixed(2)}<br>Porcentagem = 5%`
            break                   
    }       
}   