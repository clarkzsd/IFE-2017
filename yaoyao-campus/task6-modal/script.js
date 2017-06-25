class Modal {
  constructor(element) {
    this.element = element;
    this.isShown = null;
    this.body = document.querySelector('body');
  }

  toggle() {
    return this.isShown ? this.hide() : this.show();
  }

  hide() {
    this.element.style.display = 'none';
    this.body.classList.remove('modal-open');
    this.isShown = false;
  }

  show() {
    this.element.style.display = 'initial';
    this.body.classList.add('modal-open');
    this.isShown = true;
  }

  hideModal(trigger) {
    return Array.isArray(trigger) ?
      trigger.forEach((ele) => {
        this.registerHideTrigger(ele);
      })
      :
      this.registerHideTrigger(trigger);
  }

  registerHideTrigger(trigger) {
    return trigger.addEventListener('click', () => {
      this.hide();
    }, false);
  }
}

const button = document.querySelector('.toggleBtn');
const modalElement = document.querySelector('.modal-wrap');
const cancelBtn = modalElement.querySelector('button');
const fakeModal = document.querySelector('.fake-modal');
const modal = new Modal(modalElement);

button.addEventListener('click', () => {
  modal.toggle();
}, false);

modal.hideModal([cancelBtn, fakeModal]);
