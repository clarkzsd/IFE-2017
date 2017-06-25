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
    this.element.classList.remove('active');
    this.element.classList.add('hidden');
    this.body.classList.remove('modal-open');
    this.isShown = false;
  }

  show() {
    this.element.classList.remove('hidden');
    this.element.classList.add('active');
    this.body.classList.add('modal-open');
    this.isShown = true;
  }

  hideModal(trigger) {
    if (Array.isArray(trigger)) {
      trigger.forEach((ele) => {
        ele.addEventListener('click', () => {
          this.hide();
        }, false);
      });
    } else {
      trigger.addEventListener('click', () => {
        this.hide();
      }, false);
    }
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
