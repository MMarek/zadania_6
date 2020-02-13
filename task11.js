console.log('EXERCISE 10:');

document.addEventListener('DOMContentLoaded', function () {

    const btn2 = document.querySelector('.add2');
    console.log(btn2);
    const input = document.querySelectorAll('input');
    console.log(input);
    const table = document.querySelector('table');
    console.log(table);

    btn2.addEventListener('click', function () {
        console.log('click');
        input[0].value;
        input[1].value;
        input[2].value;
        console.log(input[0].value);

        const tr = document.createElement('tr');
        table.appendChild(tr);

        // let row = '';
        // row += '<td>' + input[0].value + '</td>';
        // row += '<td>' + input[1].value + '</td>';
        // row += '<td>' + input[2].value + '</td>';
        //
        // newTr.innerHTML = row;
        // input[0].value = '';
        // input[1].value = '';
        // input[2].value = '';

        let row = '';
        for (let i = 0; i < input.length; i++) {
            row += '<td>' + input[i].value + '</td>';
            input[i].value = '';
        }
        tr.innerHTML = row;
    });

});