// Classificação inicial dos filmes
const ratings = {
    eterno_brilho: 8.3,
    lugar_longe: 7.2,
    espetacular_homem_aranha_2: 6.9,
    ponyo: 7.6,
    um_dia: 7.0,
    xmen_primeira_classe: 7.7,
    cento_e_um_dalmatas: 5.7,
    questao_tempo: 7.8,
    capitao_america_guerra_civil: 7.8,
    resgate_soldado_ryan: 8.6
};

// Total de estrelas
const starsTotal = 10;

// Filme selecionado
let selectedFilm;

// Elementos do formulário
const filmSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

// Executa o método getRatings quando o DOM carregado no navegador
document.addEventListener('DOMContentLoaded', getRatings);

// Evento change para selecionar um filme
filmSelect.addEventListener('change', (e) => {
    selectedFilm = e.target.value;

    // Habilita o controle de classificação
    ratingControl.disabled = false;
    ratingControl.value = ratings[selectedFilm];
});

// Evento blur, quando o elemento perde o foco
ratingControl.addEventListener('blur', (e) => {
    let rating = parseFloat(e.target.value);

    // Garante que a classificação esteja entre 0 e 10
    if (rating < 0 || rating > 10 || isNaN(rating)) {
        alert('Por favor, classifique entre 0 - 10');
        return;
    }

    // Arredonda a classificação para uma casa decimal
    rating = Math.round(rating * 10) / 10;

    // Altera a classificação do filme
    ratings[selectedFilm] = rating;
    getRatings();
});

// Função para buscar as classificações dos filmes e preencher as estrelas
function getRatings() {
    for (let film in ratings) {
        // Calcula a largura do preenchimento das estrelas
        const starPercentage = (ratings[film] / starsTotal) * 100;

        // Define a largura do preenchimento das estrelas de acordo com a classificação
        document.querySelector(`.${film} .stars-inner`).style.width = `${starPercentage}%`;

        // Atualiza a nota exibida
        document.querySelector(`.${film} .number-rating`).innerHTML = ratings[film];
    }
}
    // Altera a classificação do filme
    ratings[selectedFilm] = rating;
    getRatings();

// Função para buscar as classificações dos filmes
function getRatings() {
    for (let film in ratings) {
        // Transforma a classificação em porcentagem
        const starPercentage = (ratings[film] / starsTotal) * 100;

        // Define a largura do preenchimento de acordo com a porcentagem
        document.querySelector(`.${film} .stars-inner`).style.width = `${starPercentage}%`;

        // Adiciona o valor da classificação para ser exibido na tela
        document.querySelector(`.${film} .number-rating`).innerHTML = ratings[film];
    }
}


