console.log('EXERCISE 12:');

document.addEventListener('DOMContentLoaded', function f() {
    const btn3 = document.querySelector('.remove');
    console.log(btn3);

    btn3.addEventListener("click",function () {
        btn3.parentElement.removeChild(this);
    })
});