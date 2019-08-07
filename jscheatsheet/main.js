/*

// Single Element Selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple Element Selector
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

// Iterate item with querySelector
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
// ul.remove();

// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';

ul.children[1].innerText = 'taco';

ul.lastElementChild.innerHTML = '<h1>TEST</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';

*/
/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');
    // console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>TACO</h1>'
});

*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput === ''){
        // alert('Complete the Form');
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter all Fields'
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        
        //Clear Filds
        nameInput.value = ''
        emailInput.value = ''
    }
}

