
let inputEle = document.querySelector('#input');
let btnEle =document.querySelector('#btn');

btnEle.addEventListener('click', toggleBtn);

function toggleBtn (){
   if(btnEle.getAttribute('data') === "show"){
       btnEle.innerHTML = "Hide";
       btnEle.setAttribute('data', 'hide');
       inputEle.setAttribute('type', 'text');
   }else{
    btnEle.innerHTML = "Show";
    btnEle.setAttribute('data', 'show');
    inputEle.setAttribute('type', 'password');
   }
}

