/*Escreva um programa que receba um valor numérico de até dois
algarismos e transcreva esse valor por extenso.
Exemplos:
Número: 13
Saída: Treze.
Número: 45
Saída: Quarenta e Cinco.
Número: 30
Saída: Trinta.*/

function numeros()
{
    var num = String(document.getElementById('valor').value) 
    var result = document.getElementById('resultado')

    var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
    var especiais=["Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
    var dezenas=["Dez"," Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];

    //NÚMERO ÚNICO
    if(num.length === 1)
    {
        for(var i = 0; i <= 9; i++)
        {
            if(i == num)
            {
                result.innerHTML = `${unidades[i]}`
            }
        }
    }

    //2 ALGARISMOS
    else if(num.length === 2)
    {
        //DE 11 A 19
        if(num[0] == 1 && num[1] != 0)
        {
            for(var i = 0; i <= 9; i++)
            {
                if(i == num[1])
                {
                    result.innerHTML = `${especiais[i-1]}`
                }
            }
        }

        //DEZENAS
        else if(num[0] >= 1 && num[0] <= 9)
        {
            for(var i = 0; i <= 9; i++)
            {
                if(num[0] == i)
                {
                    //PROCURA 10
                    if(num[0] == 1 && num[1] == 0)
                    {
                        result.innerHTML = `${dezenas[0]}`
                    }

                    //DE 20 PRA FRENTE
                    else
                    {
                        //ACHOU A DEZENA
                        result.innerHTML = `${dezenas[i-1]}`
                        
                        //ACHOU A UNIDADE SEGUIDA
                        for(var i = 0; i <= 9; i++)
                        {
                            if(i == num[1] && i != 0)
                            {
                                result.innerHTML += ` e ${unidades[i]}`
                            }
                        }
                    }   
                }
            }
        }
    }
}