function discount(){
    let discounter = 0
    switch(color.value){
    case "verde":
        discounter = 0.1
        result1.innerHTML = `<b>O valor do produto com desconto é R$ ${Number(price.value) - (Number(price.value)*discounter)}</b>`
        break;
    case "amarelo":
        discounter = 0.2
        result1.innerHTML = `<b>O valor do produto com desconto é R$ ${Number(price.value) - (Number(price.value)*discounter)}</b>`
        break;
    case "azul":
        discounter = 0.3
        result1.innerHTML = `<b>O valor do produto com desconto é R$ ${Number(price.value) - (Number(price.value)*discounter)}</b>`
        break;
    case "vermelho":
        discounter = 0.4
        result1.innerHTML = `<b>O valor do produto com desconto é R$ ${Number(price.value) - (Number(price.value)*discounter)}</b>`
        break;
    default:
        result1.innerHTML = "Etiqueta Invalida, digite novamente a cor da etiqueta"
    
}
}
function pass(){
    if(Number(password.value) !== 1234){
        result2.innerHTML  = `Senha Inválida`
    }else{
        result2.innerHTML  = `Acesso Permitido`
    }
}
function mediaTurma(){
    let alunosQ = Number(prompt("digite a quantidade de alunos na sua sala: "))
    let aluno = []
    for(let i = 1; i <= alunosQ; i++){
        aluno[i-1] = Number(prompt(`Nota do aluno ${i}: `))
    }

    let mediaTotal = 0 

    aluno.forEach(element => {
        mediaTotal += Number(element)
    });

    result3.innerHTML = `A média da turma é de <b>${mediaTotal.toFixed(2)}</b>`
}
function vendas(){
    let i = 1
    let vendasDigitadas = ''
    let somaVendas = 0
    do{
        vendasDigitadas = prompt(`Digite o valor da venda ${i}, para finalizar digite '0'`)
        i++
        somaVendas += Number(vendasDigitadas)
    }while(vendasDigitadas !== "0")
    result4.innerHTML = `O valor vendido foi de <b>R$ ${somaVendas}</b>`
}
function faturamento(){

}