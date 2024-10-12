//導覽列
let ChangeIcon = function(icon){
    icon.classList.toggle('fa-xmark')
}

const header = document.querySelector('.header')
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click',() => {
    header.classList.toggle('show-nav');
})