let list = document.querySelector('#divList');
list.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON"){
        const clickedButton = event.target.textContent;
        console.log("Клікнуто на пункті: " + clickedButton);
    }
})