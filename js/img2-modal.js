// Minimal modal for #myImg2 (self-contained)
// why: avoid bootstrap dependency + prevent previous onclick ReferenceError
(function () {
  function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    var img = document.getElementById('myImg2');
    var overlay = document.getElementById('img2Modal');
    var modalImg = document.getElementById('img2ModalImg');
    var caption = document.getElementById('img2ModalCaption');
    var closeBtn = document.getElementById('img2ModalClose');

    if (!img || !overlay || !modalImg || !caption || !closeBtn) return;

    // neutralize any previous inline handler
    try { img.onclick = null; } catch (e) {}

    var onKey = function (e) { if (e.key === 'Escape') close(); };

    function open() {
      modalImg.src = img.src;
      modalImg.alt = img.alt || '';
      caption.textContent = img.alt || '';
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.addEventListener('keydown', onKey);
    }
    function close() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.removeEventListener('keydown', onKey);
    }

    img.addEventListener('click', function (e) { e.preventDefault(); open(); });
    closeBtn.addEventListener('click', function () { close(); });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });
  });
})();
