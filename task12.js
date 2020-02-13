console.log('EXERCISE 12:');

document.addEventListener('DOMContentLoaded', function f() {
    const btn3 = document.querySelector('button');
    console.log(btn3);

    btn3[11].addEventListener("click",function () {
        btn3.parentElement.removeChild(this);
        console.log(btn3[11]);
    })
});