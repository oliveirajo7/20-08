const usuarios = [
    {nome: "augusto", idade: 19},
    {nome: "antonio", idade: 11},
    {nome: "juan", idade: 14},
    {nome: "carlos", idade: 15},
    {nome: "carol", idade: 19},
    {nome: "pedro", idade: 18}
]

const acharUsuario = usuarios.find(idad => idad.idade < 18)
console.log(acharUsuario)

const acharUsuarioIndex = usuarios.findIndex(ind => ind.idade < 18)
console.log("Index do usuario: " + acharUsuarioIndex) 

console.log("---------------------------------")






for (let i =0; i < usuarios.length; i++) {
    const usuario = usuarios[i]

    if(usuario.idade < 18) {
        console.log(usuario)
    }
}

console.log("Aqui estão todos:");
console.log(usuarios);