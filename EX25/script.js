/*Receber valores numéricos para o dia e o mês de nascimento de uma
pessoa; Exibir o signo da pessoa de acordo com os seguintes critérios:
Áries: de 21 de março a 20 de abril;
Touro: de 21 de abril a 20 de maio;
Gêmeos: de 21 de maio a 20 de junho;
Câncer: de 21 de junho a 22 de julho;
Leão: de 23 de julho a 22 de agosto;
Virgem: de 23 de agosto a 22 de setembro;
Libra: de 23 de setembro a 22 de outubro;
Escorpião: de 23 de outubro a 21 de novembro;
Sagitário: de 22 de novembro a 21 de dezembro;
Capricórnio: de 22 de dezembro a 20 de janeiro;
Aquário: de 21 de janeiro a 18 de fevereiro;
Peixes: de 19 de fevereiro a 20 de março;
Exemplo:
Data de Nascimento: 29/03
Signo: Áries*/

function horoscopo()
{
    var dia = Number(document.getElementById('day').value)
    var mes = Number(document.getElementById('month').value)
    var result = document.getElementById('resultado')

    switch(true)
    {
        //ARIES
        case ((mes == 3 && dia >= 21 && dia <= 30) || (mes == 4 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Áries`
            break
        //TOURO
        case ((mes == 4 && dia >= 21 && dia <= 30) || (mes == 5 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Touro`
            break
        //GEMEOS
        case ((mes == 5 && dia >= 21 && dia <= 30) || (mes == 6 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Gêmeos`
            break
        //CANCER
        case ((mes == 6 && dia >= 21 && dia <= 30) || (mes == 7 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Câncer`
            break
        //LEAO
        case ((mes == 7 && dia >= 23 && dia <= 30) || (mes == 8 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Leão`
            break
        //VIRGEM
        case ((mes == 8 && dia >= 23 && dia <= 30) || (mes == 9 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Virgem`           
            break
        //LIBRA
        case ((mes == 9 && dia >= 23 && dia <= 30) || (mes == 10 && dia >= 1 && dia <= 22)):
            result.innerHTML = `Libra`
            break
        //ESCOPIAO
        case ((mes == 10 && dia >= 23 && dia <= 30) || (mes == 11 && dia >= 1 && dia <= 21)):
            result.innerHTML = `Escorpião`
            break
        //SAGITARIO
        case ((mes == 11 && dia >= 22 && dia <= 30) || (mes == 12 && dia >= 1 && dia <= 21)):
            result.innerHTML = `Sagitário`
            break
        //CAPRICORNIO
        case ((mes == 12 && dia >= 22 && dia <= 30) || (mes == 1 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Capricórnio`
            break
        //AQUARIO
        case ((mes == 1 && dia >= 21 && dia <= 30) || (mes == 2 && dia >= 1 && dia <= 18)):
            result.innerHTML = `Aquário`
            break
        //PEIXES
        case ((mes == 2 && dia >= 19 && dia <= 30) || (mes == 3 && dia >= 1 && dia <= 20)):
            result.innerHTML = `Peixes`
            break
    }
}