import login from './lib/login.js';
import register from './lib/register.js';
import feed from './lib/feed.js';

const main = document.querySelector('.main');
const screens = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#':
      main.appendChild(login());
      break;
    case '#register':
      main.innerHTML = '';
      main.appendChild(register());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    default: main.appendChild(login());
  }
};

// chama sempre a função screens quando muda a hash
window.addEventListener('hashchange', () => {
  screens();
});

// chama a função screens quando carrega a pag
window.addEventListener('load', () => {
  screens();
});
