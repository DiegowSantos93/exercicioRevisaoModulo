const prompt = require("prompt-sync")({ sigint: true });

const biblioteca = require("./biblioteca.js");

let generos = ['LITERÁRIO','TERROR','FICÇÃO','BIOGRAFIA','ÉPICO'];

function menu(){

while (true) {
    console.log(`
===== Bem vindo ao cadastro de livros! Essas são as opções: ===== 
    1. Adicionar uma novo livro
    2. Listar livros cadastrados
    3. Atualizar um livro
    4. Deletar um livro cadastrado 
    0. Sair`)
        
    let respostaMenu = prompt (`Escolha uma opção: `)
    respostaMenu = parseInt(respostaMenu);
    return respostaMenu;
    }
}

function opcoes(){
    let resposta = menu();
    
    switch (resposta) {
        case 1:
            let nome = prompt('Digite o nome do livro: ');
                if (nome.length <= 3){
                    console.log('Nome do livro inválido, tente novamente.')
                    return opcoes();
                }
            let autor = prompt('Digite o autor do livro: ');
                if (autor.length <= 3){
                console.log('Nome do autor inválido, tente novamente.')
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
            let genero = prompt(`Selecione o genero do livro ou digite: ${generos.join(', ')} ou digite um novo gênero: `).toUpperCase();
                if (!generos.includes(genero)){
                    generos.push(genero)
                } 
            biblioteca.inclusao({nome,autor,paginas,genero});
            return opcoes();
        case 2:
            biblioteca.listagem();
            return opcoes();
        case 3:


        case 4:
            biblioteca.listagem();
            let index = prompt('Digite o número do livro que deseja excluir: ');
            biblioteca.remocao();
            return opcoes();
        case 0:
            console.log('Saindo do cadastro de livros, até logo!');
            process.exit();
        default:
            console.log('Opção inválida, tente novamente.');
            return opcoes();
    }
}

opcoes();