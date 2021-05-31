'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal[i].addEventListener('click', function () { // when modal button is clicked the hidden window is shows up
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// const closeOverlay = overlay.addEventListener('click', function () { // same here
//   modal.classList.add('hidden');  // before
//   overlay.classList.add('hidden');
// });

// const closeModal = function () {       // when close window is clicked the hidden window is disssappears
//   modal.classList.add('hidden');      // after
// };

// // calling closeModal Function

// btnCloseModal.addEventListener('click', closeModal);

// Refactoring the code

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  //   console.log('Button is clicked');
  btnOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboard events is global events they don't belong to any element and must be added to the whole page

document.addEventListener('keydown', function (e) {
  // this event will occur when we press any key on the keyboard
  //console.log(e.key); // it will display which key was closed

  // if Escape key is pressed and modal does not has a hidden class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
