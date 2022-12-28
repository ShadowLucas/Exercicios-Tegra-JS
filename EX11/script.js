/*Fazer um programa para ler as duas notas que um aluno obteve no
primeiro e segundo semestres de uma disciplina anual. Em seguida,
mostrar a nota final que o aluno obteve (com uma casa decimal) no ano
juntamente com um texto explicativo. Caso a nota final do aluno seja
inferior a 60.00, mostrar a mensagem "REPROVADO", conforme exemplos.
Exemplo:
Digite a primeira nota: 34.0
Digite a segunda nota: 23.5
NOTA FINAL = 57.5
REPROVADO*/

function calculaFinal()
{
    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var result = document.getElementById('resultado')

    var media = (nota1 + nota2)

    if(media < 60)
    {
        result.innerHTML = `NOTAL FINAL = ${media.toFixed(1)} REPROVADO`
    }
    else
    {
        result.innerHTML = `NOTAL FINAL = ${media.toFixed(1)} APROVADO`
    }
}