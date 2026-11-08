const portada = document.getElementById('portada');
const invitacion = document.getElementById('invitacion');
const abrirBtn = document.getElementById('abrirBtn');
const musicaBtn = document.getElementById('musicaBtn');
const musicaFondo = document.getElementById('musicaFondo');

// Volumen inicial 40 %
musicaFondo.volume = 0.4;

abrirBtn.addEventListener('click', async () => {
  portada.classList.add('hidden');
  invitacion.classList.remove('hidden');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  try {
    await musicaFondo.play();
    musicaBtn.textContent = '🔊 MÚSICA ACTIVADA';
  } catch (error) {
    musicaBtn.textContent = '🎵 ACTIVAR MÚSICA';
  }
});

musicaBtn.addEventListener('click', async () => {
  if (musicaFondo.paused) {
    try {
      await musicaFondo.play();
      musicaBtn.textContent = '🔊 MÚSICA ACTIVADA';
    } catch (error) {
      musicaBtn.textContent = '🎵 ACTIVAR MÚSICA';
    }
  } else {
    musicaFondo.pause();
    musicaBtn.textContent = '🔇 MÚSICA SILENCIADA';
  }
});
