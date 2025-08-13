function loadReviewsWidget() {
  const footerEl = document.querySelector('footer'); // ajuste o seletor se necessário

  if (footerEl && !document.querySelector('.sk-ww-google-reviews')) {
    const reviewsDiv = document.createElement('div');
    reviewsDiv.className = 'sk-ww-google-reviews';
    reviewsDiv.setAttribute('data-embed-id', '25587705');

    footerEl.parentNode.insertBefore(reviewsDiv, footerEl); // coloca ANTES do rodapé

    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.defer = true;
    document.body.appendChild(script);
  }
}

function checkAndLoadWidget() {
  // Confirma que a rota do hash é exatamente #/checkout/2 ou começa com isso (ex: #/checkout/2/subrotas)
  if (window.location.hash.startsWith('#/checkout/2')) {
    loadReviewsWidget();
  } else {
    // Remove widget se sair dessa rota exata
    const existingWidget = document.querySelector('.sk-ww-google-reviews');
    if (existingWidget) existingWidget.remove();
  }
}

document.addEventListener('DOMContentLoaded', checkAndLoadWidget);
window.addEventListener('hashchange', checkAndLoadWidget);
