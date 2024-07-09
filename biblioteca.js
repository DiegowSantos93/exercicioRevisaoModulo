const prompt = require("prompt-sync")({ sigint: true });

const livros = [];

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

module.exports = {
    menu
}