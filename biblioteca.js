const livros = [];

function incluir(livro){
    livros.push(livro)
        console.log('Livro adicionado com sucesso!')
}

const listar = () => {
    if (livros.length === 0){
        console.log('Não existem livros cadastrados.');
    } else {
        console.log(`Esses são os livros cadastrados:`)
        livros.forEach((livros,index) => {
        console.log(`${index + 1}. ${livros.nome} - ${livros.autor} - ${livros.paginas} - ${livros.genero}`)
        })
    }
}

const remover = (index) => {
    if (livros.length >= 1){
        livros.splice(++index,1)
        console.log('Livro deletado com sucesso.')
    }
}

const atualizar = (livro,index) => {
    if (index <= livros.lenght){
        livros.splice(++index,1);
    }
    
    livros[index] = livro;    
    console.log('Livro atualizado com sucesso.')
}

module.exports = {
    incluir,
    listar,
    remover,
    atualizar
}