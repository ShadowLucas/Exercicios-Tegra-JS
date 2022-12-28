/*Fazer um programa para ler o nome e idade de duas pessoas. Ao final
mostrar uma mensagem com os nomes e a idade média entre essas
pessoas, com uma casa decimal, conforme exemplo.
Exemplo:
Nome1: Maria Silva
Idade1: 19
Nome2: Joao Melo
Idade2: 20
A idade média de Maria Silva e Joao Melo é de 19.5 anos*/

function mediaIdade()
{
    var name1 = document.getElementById('nome1').value
    var age1 = Number(document.getElementById('idade1').value)
    var name2 = document.getElementById('nome2').value
    var age2 = Number(document.getElementById('idade2').value)
    var result = document.getElementById('resultado')

    //MEDIA

    var calculaMedia = (age1 + age2)/2
    result.innerHTML = `A média da idade de ${name1} e ${name2} é igual a ${calculaMedia}`
}