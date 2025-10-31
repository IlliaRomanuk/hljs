let buttonUrl = document.querySelector("#enter");
let buttonFollow = document.querySelector("#follow");
let aUrl = document.querySelector("#url");
let resultUrl = "";
buttonUrl.addEventListener('click', function(){
    let url = prompt('enter url');
    resultUrl += url;
})
buttonFollow.addEventListener('click', function(){
    url.setAttribute('href', resultUrl);
})