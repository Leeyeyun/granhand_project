// 하단 버튼 눌렀을 시 다음창 넘어가기&이전으로 가기
const back = document.querySelector('.btn .back_btn')
const next = document.querySelector('.btn .join_btn')
const agreement = document.querySelector('main .agreement')
const user_info = document.querySelector('main .user_info')

back.addEventListener('click',()=>{

})

next.addEventListener('click',()=>{
    agreement.style.display = 'none';
    user_info.style.display = 'block';
})
