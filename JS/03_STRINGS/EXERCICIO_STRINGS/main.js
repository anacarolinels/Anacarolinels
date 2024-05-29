// Função para processar as frutas
function processFrutas() {
    // Lista de frutas
    let frutas = [
        " Maçã",
        "Banana",
        "Laranja",
        "Manga",
        "Abacaxi"
    ];

    // Processamento das frutas
    frutas = frutas.map(fruta => {
        // Limpar caracter em branco do início (trim)
        fruta = fruta.trim();

        // Retornar a quantidade de letras (length)
        const length = fruta.length;

        // Mostrar os 3 primeiros caracteres (substring)
        const primeirosTres = fruta.substring(0, 3);

        // Sobrepor o conteúdo em caixa baixa (toLowerCase)
        const frutaLowerCase = fruta.toLowerCase();

        // Exibir as informações processadas
        return {
            original: fruta,
            length: length,
            primeirosTres: primeirosTres,
            lowerCase: frutaLowerCase
        };
    });

    // Exibir a listagem de frutas recebidas em Template String
    frutas.forEach(fruta => {
        console.log(`Fruta: ${fruta.original}
Quantidade de Letras: ${fruta.length}
Primeiros 3 Caracteres: ${fruta.primeirosTres}
Caixa Baixa: ${fruta.lowerCase}\n`);
    });
}

// Chamar a função para processar as frutas
processFrutas();