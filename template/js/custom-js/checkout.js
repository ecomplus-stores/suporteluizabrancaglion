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

storefront.on('widget:@ecomplus/widget-tag-manager', function () {
  // espera o DOM do checkout
  var checkDomInterval = setInterval(function () {
    var checkoutBtn = document.querySelector('.cart__btn-checkout')

    if (checkoutBtn) {
      clearInterval(checkDomInterval)

      // esconde o botão até marcar o checkbox
      checkoutBtn.style.display = 'none'

      checkoutBtn.insertAdjacentHTML('beforebegin', `
        <div id="block-confirm" class="form-group">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" id="input-confirm-checkout" class="custom-control-input">
            <label for="input-confirm-checkout" class="custom-control-label">
              Ao finalizar a compra, confirmo que estou ciente e concordo que os pedidos realizados e aprovados 
              entre 20/12 e 04/01 serão processados a partir do dia 05/01/2026, 
              e o prazo de entrega passará a contar a partir dessa data.
            </label>
          </div>
        </div>
      `)

      var confirmInput = document.querySelector('#input-confirm-checkout')

      // quando marcar, mostra o botão e remove o bloco
      confirmInput.addEventListener('change', function () {
        if (confirmInput.checked) {
          document.querySelector('#block-confirm').remove()
          checkoutBtn.style.display = 'block'
        }
      })
    }
  }, 300)
})
