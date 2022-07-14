const email = document.querySelector('#email');
const label = document.querySelector('#label');
const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const button = document.querySelector('button');


button.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === '' || !email.value.match(validEmail)) {
        label.classList.add('visible');
        email.style.outline = '1px solid red'
    }
    else {
        label.innerText = 'Thanks for signing up!'
        label.classList.add('visible');
        label.style.color = 'green'
        email.style.outline = '1px solid green'
        email.value = ''
    }
})