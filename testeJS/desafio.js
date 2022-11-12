var prompt = require('prompt-sync')(); 

const pessoas = [
    { name: "Fabiana Araujo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];

/* Agora que você manipulou os dados, precisamos que desenvolva uma função que 
retorna os dados de uma pessoa pelo nome passado via parâmetros. */

var nome = prompt('Digite um nome');

function dadosPessoa(nome) {
    for (i = 0; i < pessoas.length; i++) {
        if (nome === pessoas[i].name) {
            return pessoas[i];
        }    
    }
    return 'Pessoa não encontrada!'; 
}

console.log(dadosPessoa(nome));

/* E então, desenvolva uma função que retorna um vetor com os nomes das pessoas. 
Bônus: Retornar somente o primeiro nome. */

function vetorNome() {
    let vetor = [];
    for (i = 0; i < pessoas.length; i++) {
        vetor.push(pessoas[i].name.split(" ", 1));
    }
    return vetor;
}

console.log(vetorNome());

/* Desenvolva uma função que insira um id único para cada pessoa no vetor */

for(var i=0;i<pessoas.length;i++){
        {pessoas[i].id=i}
    
}

console.log(pessoas);

/* Desenvolva uma função que retorna os dados das pessoas 
para quem tem idade suficiente para tirar a primeira habilitação. */

function maiorIdade() {
    let maiorIdade = [];
    for (i = 0; i < pessoas.length; i++) {
        if (pessoas[i].age >= 18) {
            maiorIdade.push(pessoas[i]);
        }
    }
    return maiorIdade;
}

console.log(maiorIdade());

/* Cria uma função que retorne a média das idades das pessoas.  */

function mediaIdade() {
    var soma = 0;
    for (i = 0; i < pessoas.length; i++) {
        soma = soma + pessoas[i].age;
    }
    media = soma / pessoas.length;
    return media;
}

console.log("Média da idade das pessoas: " + mediaIdade());