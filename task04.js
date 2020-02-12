console.log('EXERCISE 4:');

document.addEventListener('DOMContentLoaded', function () {

    const buttonsList = document.querySelectorAll('button');
    console.log(buttonsList);

    // const span1 = document.querySelector('span');
    // console.log(span1);

    for (let i = 0; i < buttonsList.length; i++) {
        buttonsList[i].addEventListener('click', function () {
            const id = this.id;
            const span = document.querySelector('span');
            span.innerText = parseInt(span.innerText) + 1;
        })
    }
});


// buttons.addEventListener('click', function () {
//     span.innerText++
// });