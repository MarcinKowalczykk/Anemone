(() => {
  const RefsContact = {
    openModalBtns: document.querySelectorAll('[data-modal-open1]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close1]'),
    modal: document.querySelector('[data-modal1]'),
  };
  for (let i = 0; i < RefsContact.openModalBtns.length; i++) {
    RefsContact.openModalBtns[i].addEventListener('click', toggleModal);
  }
  for (let i = 0; i < RefsContact.closeModalBtn.length; i++) {
    RefsContact.closeModalBtn[i].addEventListener('click', toggleModal);
  }
  function toggleModal() {
    RefsContact.modal.classList.toggle('is-hidden');
  }
})();
