console.log('EXERCISE 10:');

document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelector('.add1');
    console.log(btn);

    btn.addEventListener('click', function () {
        console.log(this);

        const ul = document.querySelector('ul');
        const newLi = document.createElement('li');
        ul.appendChild(newLi);

        const len = ul.children.length;
        newLi.innerText = 'Element ' + (len +1) + ' - w chwili dodania było ' + len + ' elementów';

    })

});