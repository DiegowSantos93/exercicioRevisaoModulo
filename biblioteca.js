const livros = [];

function inclusao(livro){
    livros.push(livro)
        console.log('Livro adicionado com sucesso!')
}

const listagem = () => {
    if (livros.length === 0){
        console.log('Não existem livros cadastrados.');
    } else {
        console.log(`Esses são os livros cadastrados:`)
        livros.forEach((livros,index) => {
        console.log(`${index + 1}. ${livros.nome} - ${livros.autor} - ${livros.paginas} - ${livros.genero}`)
        })
    }
}

const remocao = (index) => {
    if (livros.length >= 1){
        livros.splice(++index,1)
        console.log('Livro deletado com sucesso.')
    }
}

module.exports = {
    inclusao,
    listagem,
    remocao
}