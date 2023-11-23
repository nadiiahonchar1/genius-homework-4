const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const togleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.forEach(i => i.addEventListener('click', togleModal));
modalBtnClose.addEventListener('click', togleModal);
