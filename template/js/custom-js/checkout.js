// Grid de avaliações no checkout
document.addEventListener('DOMContentLoaded', function () {
  const checkoutContainer = document.querySelector('#checkout') || document.body;

  // Cria o div do widget
  const reviewsDiv = document.createElement('div');
  reviewsDiv.className = 'sk-ww-google-reviews';
  reviewsDiv.setAttribute('data-embed-id', '25587705');

  // Insere o widget no checkout
  checkoutContainer.appendChild(reviewsDiv);

  // Adiciona o script JS do widget
  const script = document.createElement('script');
  script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
  script.defer = true;
  document.body.appendChild(script);
});
