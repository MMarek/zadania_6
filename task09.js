console.log('EXERCISE 9:');

document.addEventListener('DOMContentLoaded', function () {

    const buttonList = document.querySelectorAll('.button');
    console.log(buttonList);

    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', function () {
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

            const parent = this.parentElement;

            if(parent) {
                parent.style.backgroundColor = randomColor;
            }
        });
    }
});