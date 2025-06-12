// Seleciona todos os botões que avançam os passos
const botoesAvancar = document.querySelectorAll('.btn-proximo');

botoesAvancar.forEach(botao => {
  botao.addEventListener('click', () => {
    const passoAtual = document.querySelector('.passo.ativo');
    const proximoId = 'passo-' + botao.getAttribute('data-proximo');
    const proximoPasso = document.getElementById(proximoId);

    if (passoAtual && proximoPasso) {
      passoAtual.classList.remove('ativo');
      proximoPasso.classList.add('ativo');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
