//회원 & 비회원 옵션 선택
const member_opt = document.querySelectorAll('.member_option > a')
const member = document.querySelector('#member_login_frm')
const nonmember = document.querySelector('#nonmember_login_frm')
member_opt[0].addEventListener('click',(e)=>{
    e.preventDefault();
    member.style.display = 'block';
    nonmember.style.display = 'none';
    member_opt[0].style.borderColor = '#000';
    member_opt[0].style.color ='#000';
    member_opt[1].style.borderColor = '#fff';
    member_opt[1].style.color ='#fff';
})
member_opt[1].addEventListener('click',(e)=>{
    e.preventDefault();
    member.style.display = 'none';
    nonmember.style.display = 'block';
    member_opt[1].style.borderColor = '#000';
    member_opt[1].style.color ='#000';
    member_opt[0].style.borderColor = '#fff';
    member_opt[0].style.color ='#fff';
})