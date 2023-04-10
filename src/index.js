const btn = document.querySelector('.js-button');

function onClick(e) {
    console.log('click', e.target);
}   

btn.addEventListener('click', onClick);