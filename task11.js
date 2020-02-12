console.log('EXERCISE 10:');

document.addEventListener('DOMContentLoaded', function () {

    const button = document.querySelector('button');
    console.log(button);
    const input = document.querySelector('input');
    console.log(input);
    const table = document.querySelector('table');
    console.log(table);

    button.addEventListener('click', function () {
        console.log('click');
        input[0].value;
        input[1].value;
        input[2].value;
        console.log(input[0].value);

        const tr = document.createElement('tr');
        table.appendChild(tr);

        let row = '';
        for (let i = 0; i < input.length; i++) {
            row += '<td>' + input[i].value + '</td>';
            input[i].value = '';
        }
        tr.innerHTML = row;
    });

});