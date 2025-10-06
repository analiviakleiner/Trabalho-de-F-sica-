// script.js
function mostrarSecao(id) {
  const secoes = document.querySelectorAll('section');
  secoes.forEach(secao => secao.classList.remove('ativo'));
  document.getElementById(id).classList.add('ativo');

  // Animação suave ao trocar de seção
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Efeito de brilho transitório nos títulos
  const titulo = document.querySelector(`#${id} h2`);
  titulo.classList.add('highlight');
  setTimeout(() => titulo.classList.remove('highlight'), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Marca a primeira seção como ativa
  document.getElementById('introducao').classList.add('ativo');
});
