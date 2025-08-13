// Adiciona o container da grade de avaliações
const reviewsDiv = document.createElement('div');
reviewsDiv.className = 'sk-ww-google-reviews';
reviewsDiv.setAttribute('data-embed-id', '25587705');
document.body.appendChild(reviewsDiv); // ou escolha um container específico

// Adiciona dinamicamente o script SociableKIT
const script = document.createElement('script');
script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
script.defer = true;
document.body.appendChild(script);

