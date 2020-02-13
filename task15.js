console.log('EXERCISE 15:');

document.addEventListener('DOMContentLoaded', function () {

    const btn = document.querySelectorAll('a');
    console.log(btn);
    // const btnList = document.querySelectorAll('deleteBtn');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',function () {
            console.log(this);

            const trElement = this.parentElement.parentElement;
            trElement.parentElement.removeChild(trElement);
        });
    }
});
