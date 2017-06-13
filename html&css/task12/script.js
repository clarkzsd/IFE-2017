const $ = (selector) => {
  return document.querySelector(selector);
};
const inputTarget = $('input');

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
