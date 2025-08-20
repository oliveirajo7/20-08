export const PI = 3.14;
function ola(nome) {
    console.log(`Meu nome é ${nome}`)
}

function somar(a, b) {
    console.log(a + b )
}

let meuValor = "10"

let meuValorNumerico = parseInt(meuValor);
console.log(typeof(meuValorNumerico))
console.log(typeof(meuValor))
export {somar, ola}

let lista = [1,2,3,4,5,6,7,8,9,10]




let alunos = [
    {nome: "Maria", idade: 20},
    {nome: "Antonio", idade: 21},
    {nome: "Carlos", idade: 30}
]



for(let index = 0; index < alunos.length; index++) {
    
    const aluno = alunos[index]
    if(aluno.nome === "Carlos") {
        console.log(aluno)
        console.log(`achei, esta no index ${index}`)
        break;
    }

    console.log("ta aq")

}

const achar = alunos.find(num => {num.idade < 26 }) 
console.log(achar)