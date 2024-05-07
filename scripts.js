const movies = [
    "Comece por Aqui",
    "O que é ser Trader",
    "Corretoras e Plataformas",
    "Mentalidade e Emocional",
    "Análise Gráfica e Técnica",
    "Estratégias",
    
];

const movieList = document.querySelector('.movie-list');

movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.textContent = movie;
    movieList.appendChild(movieElement);
});
