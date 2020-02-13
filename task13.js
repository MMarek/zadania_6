console.log('EXERCISE 13:');

document.addEventListener("DOMContentLoaded",function () {

    const btn = document.querySelector('.remove3');
    console.log(btn);
    const li = document.querySelectorAll('li');
    console.log(li);
    const ul = document.querySelector('.list');
    console.log(ul);

    btn.addEventListener('click',function () {
        console.log(btn);
        ul.removeChild(ul.firstElementChild);
    })

});