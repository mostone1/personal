var typed = new Typed('.element', options);

let bar = document.querySelector('.bars'),
navItem = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItem.classList.toggle('active');
})

const multiTextElement = document.querySelector('.multiText');
const strings = ['Web Designer', 'Front-end Developer', 'Software Engineer'];
let currentStringIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let deletingDelay = 1000;


