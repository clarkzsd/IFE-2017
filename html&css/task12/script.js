const $ = (selector) => {
  return document.querySelector(selector);
};
const inputTarget = $('input');
const colorPlayer = $('#color-player');
const greenTab = $('.green-tab');
const greenBlueTab = $('.green-blue-tab');
const blueTab = $('.blue-tab');

function inputListener(e) {
  switch (e.type) {
    case 'focus':
      inputTarget.className = 'ani-target-widen';
      break;
    case 'blur':
      inputTarget.className = 'ani-target-narrow';
      break;
  }
}

inputTarget.addEventListener('focus', inputListener, false);
inputTarget.addEventListener('blur', inputListener, false);

greenTab.addEventListener('click',(e) => {
  colorPlayer.className = 'bg-green';
}, false);

greenBlueTab.addEventListener('click',(e) => {
  colorPlayer.style.animationPlayState = 'paused';
}, false);

blueTab.addEventListener('click',(e) => {
  colorPlayer.style.animationPlayState = 'running';
}, false);


