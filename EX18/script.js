/*Deseja-se converter uma medida de temperatura da escala Celsius para
Fahrenheit ou vice-versa. Para isso, você deve construir um programa que
leia a letra "C" ou "F" indicando em qual escala vai ser informada uma
temperatura. Em seguida, o programa deve mostrar a temperatura na
outra escala com duas casas decimais. Você deve pesquisar as fórmulas
para conversão de Fahrenheit->Celsius e de Celsius->Fahrenheit.
Exemplos:
Você vai digitar a temperatura em qual escala (C/F)? C
Digite a temperatura em Celsius: 28.15
Temperatura equivalente em Fahrenheit: 82.67
Você vai digitar a temperatura em qual escala (C/F)? F
Digite a temperatura em Fahrenheit: 75.00
Temperatura equivalente em Celsius: 23.89*/

function continuar()
{
    var temperatura = Number(document.getElementById('num').value)
    var result = document.getElementById('resultado')
    var tipo = document.getElementsByName('tipo')

    if(tipo[0].checked)
    {

        result.innerHTML = Tf(temperatura).toFixed(2);
    }
    else if(tipo[1].checked)
    {
        result.innerHTML = Tc(temperatura).toFixed(2);
    }

}


function Tf(c)
{
    var f = (c * (9/5)) + 32
    return f
}

function Tc(f)
{
    var c = (f - 32) * 5/9
    return c
}

