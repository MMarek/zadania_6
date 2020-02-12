console.log('EXERCISE 3:');

document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('button');
    console.log(buttons);

    const span = document.querySelectorAll('span');
    console.log(span);

    buttons[1].addEventListener('click', function () {
        span[0].innerText++
    });

    buttons[2].addEventListener('click', function () {
        span[1].innerText++
    });

    buttons[3].addEventListener('click', function () {
        span[2].innerText++
    });
});