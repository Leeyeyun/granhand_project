// 하단 버튼 눌렀을 시 다음창 넘어가기&이전으로 가기
const back = document.querySelector('.btn .back_btn')
const next = document.querySelector('#agreement_frm .btn .join_btn')

back.addEventListener('click',()=>{
    window.location.href = 'index.html'
})
next.addEventListener('click',()=>{
    window.location.href = 'join.html'
})

//checkbox 전체동의 체크 시 모든 체크박스 활성화
const all_check = document.querySelector('#total_agree')
const checkbox = document.querySelectorAll('#agreement_frm .agree_check li label[for*=agree]')
all_check.addEventListener('click',()=>{
    for(let i of checkbox){
        i.classList.toggle('active');}
})

