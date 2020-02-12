console.log('EXERCISE 4:');

document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('button');
    console.log(buttons);

    const counter = document.querySelector('p .counterMain');
    console.log(counter);

    for (let i = 4; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            counter.innerText = parseInt(counter.innerText) + 1;
        })
    }
});