const prompt = require("prompt-sync")({ sigint: true });

const biblioteca = require("./biblioteca.js");

opcoes();

function opcoes(){
    let respostaMenu = biblioteca.menu();
    let generos = ['LITERÁRIO', ' TERROR',' FICÇÃO',' BIOGRAFIA',' ÉPICO'];

    switch (respostaMenu) {
        case 1:
            let nome = prompt('Digite o nome do livro: ');
                if (nome.length <= 3){
                    console.log('Nome do livro inválido, tente novamente.')
                    return opcoes();
                }
            let autor = prompt('Digite o autor do livro: ');
                if (autor.length <= 3){
                console.log('NNome do autor inválido, tente novamente.')
                return opcoes();
            }
            let paginas = prompt('Digite a quantidade de páginas do livro: ');
                paginas = parseInt(paginas)
            if (!isNaN(paginas)){
                if (paginas <= 10){
                    console.log('Número de páginas inválido, tente novamente.')
                    return opcoes();
                }
            } else {
                console.log('Não é um número, tente novamente.');
                return opcoes();
            }
            let genero = prompt(`Selecione o genero do livro ou digite : ${generos} ou digite um novo gênero: `).toUpperCase();
                if (genero !== 'LITERÁRIO' && genero !== 'TERROR' && genero !== 'FICÇÃO' && genero !== 'BIOGRAFIA' && genero !== 'ÉPICO'){
                    generos.push(genero)
                } 
            livros.push({nome, autor, paginas, genero})
            console.log('Livro adicionado com sucesso!')
            return opcoes();
        case 2:
            if (livros.length === 0){
                console.log('Não existem livros cadastrados.');
                return opcoes();
            } else {
                console.log(`Esses são os livros cadastrados:`)
                livros.forEach((livros,index) => {
                console.log(`${index + 1}. ${livros.nome} - ${livros.autor} - ${livros.paginas} - ${livros.genero}`)
                })
                return opcoes();
            }
        case 3:


        case 4:


        case 0:
            console.log('Saindo do cadastro de livros, até logo!');
            process.exit();
        default:
            break;
    }
}