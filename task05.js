console.log('EXERCISE 5:');

document.addEventListener('DOMContentLoaded', function () {
    const div = document.querySelectorAll('div');
    // const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    for (let i = 0; i < div.length; i++) {

        div[i].addEventListener('click',function () {
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor
        });
    }

});