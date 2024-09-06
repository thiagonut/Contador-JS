let contador = 0;

document.getElementById('btn-adicionar').addEventListener('click', () => {
  contador++;
  atualizarContador();
});

document.getElementById('btn-diminuir').addEventListener('click', () => {
  if (contador > 0) {
    contador--;
  }
  atualizarContador();
});

document.getElementById('btn-resetar').addEventListener('click', () => {
  contador = 0;
  atualizarContador();
});

function atualizarContador() {
  document.getElementById('contador').innerText = contador;
}
