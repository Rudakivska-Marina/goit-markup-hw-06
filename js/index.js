(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// Form elements
const subscriptionForm = document.querySelector('.modal-form');
const reviewForm = document.querySelector('.review-form');

subscriptionForm.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();
  console.log('Form name: ', event.target.name);
  console.log('Form field name: ', event.target.elements.user_name.value);
  console.log('Form field email: ', event.target.elements.user_email.value);

  event.target.reset();
}

// Check Privacy policy
const labelEl = document.querySelector('.review-form-agreement');
const reviewFormBtn = document.querySelector('.review-form-btn');
const inputEl = document.querySelector('#agreement-checkbox');

document.addEventListener('DOMContentLoaded', unlockBtn);
inputEl.addEventListener('change', unlockBtn);

function unlockBtn() {
  const isChecked = inputEl.checked;

  isChecked
    ? (reviewFormBtn.disabled = false)
    : (reviewFormBtn.disabled = true);
}