const boy = document.querySelector('.boy');
const pipe = document.querySelector('.pipe');

const jump = () => {
  boy.classList.add('jump');

  setTimeout(() => {
    boy.classList.remove('jump')
  },500)
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const boyPosition = +window.getComputedStyle(boy).bottom.replace('px', '');

  if (pipePosition <= 88 && pipePosition > 0 && boyPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    boy.style.animation = 'none';
    boy.style.bottom = `${boyPosition}px`;

    boy.src = './images/boom.gif';
    boy.style.width = '150px'
    boy.style.marginLeft = '25px'

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump)