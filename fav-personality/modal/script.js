'use strict'

const modal = document.querySelectorAll('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelectorAll('.close-modal')
console.log(btnCloseModal)
const btnsOpenModal = document.querySelectorAll('.show-modal')
// // mine
// // --selecting sections
// const first = document.querySelector('.first');
// const second = document.querySelector('.second')
// const third = document.querySelector('.third');
// const fourth = document.querySelector('.fourth');

// // --selecting modals
// const firstModal = document.querySelector('.modal.person-first');
// const secondModal = document.querySelector('.person-second');
// const thirdModal = document.querySelector('.person-third');
// const fourthModal = document.querySelector('.person-fourth');
// //

// const openModal = function (modal) {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// function OpenHandler(elem,modal) {
//     elem.addEventListener('click', function(e) {
//         openModal(modal)
//     }, false);
// }
// function CloseHandler(elem,modal) {
//     elem.addEventListener('click', function(e) {
//         closeModal(modal)
//     }, false);
// }
// OpenHandler(first, firstModal);
// OpenHandler(second, secondModal);
// OpenHandler(third, thirdModal);
// OpenHandler(fourth, fourthModal);

// btnCloseModal.addEventListener('click', closeModal);
//mine
// --selecting sections
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')

// --selecting modals
const firstModal = document.querySelector('.person-first')
const secondModal = document.querySelector('.person-second')
const thirdModal = document.querySelector('.person-third')
const fourthModal = document.querySelector('.person-fourth')
//
// open
const openModal = function (modal) {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function (index) {
    console.log(modal[index])
    modal[index].classList.add('hidden')
    overlay.classList.add('hidden')
}

first.addEventListener('click', function () {
    openModal(firstModal)
})
second.addEventListener('click', function () {
    openModal(secondModal)
})
third.addEventListener('click', function () {
    openModal(thirdModal)
})
fourth.addEventListener('click', function () {
    openModal(fourthModal)
})
for (let i = 0; i < 5; i++) {
    btnCloseModal[i].addEventListener('click', function (e) {
        closeModal(i)
    })
}

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
})
