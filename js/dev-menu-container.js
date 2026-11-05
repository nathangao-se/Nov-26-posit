/* Dev controls container: local-only gate, open/close, click-outside and Escape
 * for the #dev-controls-btn / #dev-controls-panel pair (see dev-menu-container.html.snippet). */
(function () {
  var root = document.getElementById('dev-controls');
  var btn = document.getElementById('dev-controls-btn');
  var panel = document.getElementById('dev-controls-panel');
  var close = document.getElementById('dev-controls-close');
  if (!btn || !panel) return;

  function isLocal() {
    if (location.protocol === 'file:') return true;
    var h = location.hostname;
    return h === 'localhost' || h === '127.0.0.1' || h === '::1' || h === '' ||
      /\.local$/.test(h) || /^192\.168\./.test(h) || /^10\./.test(h) ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(h);
  }
  if (root && root.hasAttribute('data-local-only')) {
    if (!isLocal()) { root.remove(); return; }
    root.setAttribute('data-local-ok', '');
  }

  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  }
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(panel.hidden);
  });
  if (close) close.addEventListener('click', function () { setOpen(false); });
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { setOpen(false); btn.focus(); }
  });
})();
