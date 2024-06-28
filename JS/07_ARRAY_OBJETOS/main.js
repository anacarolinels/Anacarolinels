// Array de objetos alunos
let alunos = [
    {
        nome: "João",
        notas: [8, 7, 9],
        endereco: {
            rua: "Rua das Flores",
            numero: 123,
            cidade: "Cidade São Paulo"
        }
    },
    {
        nome: "Maria",
        notas: [6, 7, 8],
        endereco: {
            rua: "Avenida Principal",
            numero: 456,
            cidade: "Cidade São Paulo"
        }
    },
    {
        nome: "Pedro",
        notas: [5, 6, 4],
        endereco: {
            rua: "Rua das Palmeiras",
            numero: 789,
            cidade: "Cidade São Paulo"
        }
    }
];

// Função para calcular a média das notas
function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

// Verifica se o aluno foi aprovado ou reprovado
function verificarStatus(media) {
    return media >= 7 ? "aprovado(a)" : "reprovado(a)";
}

// Exibindo informações dos alunos no console
console.log("Informações dos alunos:");
for (let aluno of alunos) {
    const media = calcularMedia(aluno.notas);
    const status = verificarStatus(media);
    console.log(`Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(", ")} mora na ${aluno.endereco.rua}, ${aluno.endereco.numero} - ${aluno.endereco.cidade} e teve a média ${media}, portanto foi ${status}.`);
}
