console.log('EXERCISE 8:');

document.addEventListener('DOMContentLoaded', function () {
    const spanList = document.querySelectorAll('span');

    function setSize() {
        spanList[8].innerText = window.innerWidth;
        spanList[9].innerText = window.innerHeight;
    }

    setSize();
    window.addEventListener('resize', function () {
        setSize();
    })
});