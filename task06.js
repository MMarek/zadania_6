console.log('EXERCISE 6:');

document.addEventListener('DOMContentLoaded', function () {
    const span = document.querySelectorAll('.global');
    const div = document.querySelector('.box_big');
    div.addEventListener('mousemove',function (e) {
        console.log(e);

        span[0].innerText = e.clientX;
        span[1].innerText = e.clientY;
        span[2].innerText = e.clientX;
        span[3].innerText = e.clientY;
    })
});