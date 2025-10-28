let table = document.querySelector('#table');
for(i = 1; i <= 10; i++){
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for(j = 1; j <=10; j++){
        let multiplication = i * j;
        let td = document.createElement('td');
        td.textContent =  multiplication;
        tr.appendChild(td);
    }
}