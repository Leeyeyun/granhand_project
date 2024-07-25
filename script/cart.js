//checkbox 전체동의 체크 시 모든 체크박스 활성화
const all_check = document.querySelector('#all_select')
const checkbox = document.querySelectorAll('main .cart > .cart_list input[name*=select]')

all_check.addEventListener('click',()=>{
    for(let i of checkbox){
        i.classList.toggle('active');
    }
})