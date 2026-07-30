// Shared plain-DOM error banner for plugins in this package (no Vuetify/mdi available here —
// each plugin is its own self-contained bundle, not a host-framework component). `message` should
// already be a complete sentence naming what failed; a "see the console" hint is appended on its
// own line below it.
export function showError(el, message) {
  el.innerHTML = '';
  const banner = document.createElement('div');
  banner.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; '
    + 'height: 100%; padding: 16px; text-align: center; color: #b00020; font: 14px/1.4 sans-serif;';

  const messageEl = document.createElement('div');
  messageEl.textContent = message;
  const hintEl = document.createElement('div');
  hintEl.style.cssText = 'margin-top: 12px;';
  hintEl.textContent = 'See the browser console for details.';

  banner.append(messageEl, hintEl);
  el.appendChild(banner);
}