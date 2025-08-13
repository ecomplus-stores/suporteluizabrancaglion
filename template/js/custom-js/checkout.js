function loadReviewsWidget() {
  const checkoutContainer = document.querySelector('#checkout') || document.body;
  
  // Evita duplicar o widget
  if (!document.querySelector('.sk-ww-google-reviews')) {
    const reviewsDiv = document.createElement('div');
    reviewsDiv.className = 'sk-ww-google-reviews';
    reviewsDiv.setAttribute('data-embed-id', '25587705');
    checkoutContainer.appendChild(reviewsDiv);

    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.defer = true;
    document.body.appendChild(script);
  }
}

function checkAndLoadWidget() {
  if (window.location.hash.startsWith('#/checkout')) {
    loadReviewsWidget();
  } else {
    // Remove widget se sair da página checkout
    const existingWidget = document.querySelector('.sk-ww-google-reviews');
    if (existingWidget) existingWidget.remove();
  }
}

// Quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
  checkAndLoadWidget();
});

// Quando o hash da URL mudar (rota SPA)
window.addEventListener('hashchange', function () {
  checkAndLoadWidget();
});
