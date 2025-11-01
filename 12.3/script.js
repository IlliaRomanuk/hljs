const list = document.querySelector("#list");
const form = document.querySelector("#form");
const delButton = document.querySelector('#delete')
form.addEventListener("submit", function(event){
    event.preventDefault();
    const newAct = document.createElement('li');
    newAct.textContent = act.value;
    const newButton = document.createElement('button');
    newButton.textContent = "Видалити";
    newAct.appendChild(newButton)
    list.append(newAct);
    act.value = ""; 
})
list.addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){
        event.target.parentElement.remove();
    }
})