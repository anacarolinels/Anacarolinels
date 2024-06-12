// Array de objetos funcionarios
let funcionarios = [
    { nome: "Alice", salario: 5500 },
    { nome: "Bob", salario: 6000 },
    { nome: "Charlie", salario: 4800 },
    { nome: "David", salario: 5200 },
    { nome: "Wally", salario: 4800 }
];

// Listar nome e salário de todos os funcionários utilizando forEach e template strings
console.log("Funcionários e seus respectivos salários:");
funcionarios.forEach(funcionario => {
    console.log(`${funcionario.nome}: ${funcionario.salario}`);
});

// Aplicar reajuste de 5% de dissídio a todos os funcionários utilizando map
funcionarios = funcionarios.map(funcionario => {
    return { nome: funcionario.nome, salario: funcionario.salario * 1.05 };
});

// Filtrar funcionários que recebem mais de 5000 utilizando filter
let funcionariosMaisDe5000 = funcionarios.filter(funcionario => funcionario.salario > 5000);

// Pesquisar se o funcionário Wally está presente no array utilizando find
let wally = funcionarios.find(funcionario => funcionario.nome === "Wally");

// Exibir mensagem correspondente no console
console.log("\nPesquisa sobre o funcionário Wally:");
if (wally) {
    console.log("Você o encontrou!");
} else {
    console.log("Wally não encontrado.");
}
