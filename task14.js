console.log('EXERCISE 14:');

document.addEventListener('DOMContentLoaded',function () {

    const elemListClick = document.querySelectorAll('.moveBtn');
    console.log(elemListClick);
    const list1 = document.querySelector('.list1');
    const list2 = document.querySelector('.list2');

    for (let i = 0; i < elemListClick.length; i++) {
        elemListClick[i].addEventListener('click', function () {

            if (this.parentElement.parentElement === list1) {
                list2.appendChild(this.parentElement)
            }else{
                list1.appendChild(this.parentElement)
            }
        })
    }
});