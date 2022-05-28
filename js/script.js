let btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];

let nome = document.querySelectorAll('#wrap input')[0];
let quantidade = document.querySelectorAll('#wrap input')[1];
let preco = document.querySelectorAll('#wrap input')[2];
let fornecedor = document.querySelectorAll('#wrap input')[3];

let tabela = document.querySelector('#saida table');
let BD = [];

// Inserção do Produto
btnEnviar.onclick = function(){ // Fazendo o elemento 'btnEnviar', receber uma função quando clicado (evento onclick)
    let produto = new Object(); // Declarando a variável produto como Objeto
    produto.nome = nome.value; // Atribuindo o atributo nome do objeto produto ao valor da variável nome
    produto.quantidade = quantidade.value;  // Atribuindo o atributo quantidade do objeto produto ao valor da variável quantidade
    produto.preco = preco.value; // Atribuindo o atributo preço do objeto produto ao valor da variável preço
    produto.fornecedor = fornecedor.value // Atribuindo o atributo fonecedor do objeto produto ao valor da variável fonecedor
    produto.id = BD.length; // Atribuindo o atributo id do objeto produto ao tamanho do array 'BD'
  
    BD.push(produto); // Dando um push para fazer uma inserção do Objeto produto no Array 'BD'
    tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>R$ ${preco.value},00</td><td>${fornecedor.value}</td></tr>`; // Inserindo as tags que formam a linha do produto no elemento 'tabela'.
}




btnExcluir.onclick = function(){
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td><td>Fornecedor</td></tr>`;
            montarTabela();
        }
    }
}

function montarTabela(){
    for (let i = 0; i < BD.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].nome}</td><td>${BD[i].quantidade}</td><td>R$ ${BD[i].preco},00</td><td>${BD[i].fornecedor}</td></tr>`;
    }
}

// Edição do Produto
btnEditar.onclick = function(){ // Fazendo o elemento 'btnEditar', receber uma função quando clicado (evento onclick)
    for (let i = 0; i < BD.length; i++){ // Fazendo um For para percorrer o Array
        let elemento = document.querySelectorAll('#saida table tr td input')[i]; // puxando o elemento (checkbox) do HTML e arazenando em uma varável
        if (elemento.checked){ // confere se a check box do elemento está marcada
            BD[i].nome = nome.value; // pega do Array 'BD' na posição i o atributo nome e atribui o nome ao novo valor atualizado
            BD[i].quantidade = quantidade.value; // pega do Array 'BD' na posição i o atributo quantidade e atribui a quantidade ao novo valor atualizado
            BD[i].preco = preco.value; // pega do Array 'BD' na posição i o atributo preco e atribui o preco ao novo valor atualizado

             // Inserindo as tags que formam a linha do produto no elemento 'tabela'.
            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td><td>Fornecedor</td></tr>`;
            montarTabela(); // chamndo a função 'montarTabela'
        }
    }    
}

function verificar(id){
    let cont = 0;
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            nome.value = BD[i].nome;
            quantidade.value = BD[i].quantidade;
            preco.value = BD[i].preco;
            
            cont++;
            if (cont > 1){
                alert('Não é possível selecionar mais de 1 elemento.');
                elemento.checked = false;
                break;
            }
        }
    }
}


/* 
(D) Explique qual o objetivo do comando tabela.innerHtml no código e também qual o objetivo/funcionalidade dos comandos document.queryselector e document.queryselectorAll.

O objetivo do comando tabela.innerHTML, é alterar algo do elemento tabela (previamene puxado por um document.queryselector e atribuido a uma variável) diretamente no HTML, podendo seralterado texto, cor, estilo, etc.
Os comandos document.queryselector e document.queryselectorAll, tem o objetivo de captar um elemento do HTML, o document.queryselector, é realizado pela busca do id de um único elemento, já o document.queryselectorAll, é captado pela busca de um id e ele pega todos os elemntos compostos dentro do elemnto selecionado. 

*/