//granhand & komfortabel 카테고리 별 매장 이름 나오기
const type = document.querySelectorAll('.store_type li .type')

type[0].addEventListener('click',(e)=>{
    e.preventDefault();
    type[0].style.borderBottom = '2px solid #000';
    type[0].style.color = '#000';
    type[0].nextElementSibling.style.display = 'block';
    type[1].style.borderBottom = '0';
    type[1].style.color = '#9d9d9d';
    type[1].nextElementSibling.style.display = 'none';
})
type[1].addEventListener('click',(e)=>{
    e.preventDefault();
    type[1].style.borderBottom = '2px solid #000';
    type[1].style.color = '#000';
    type[1].nextElementSibling.style.display = 'block';
    type[0].style.borderBottom = '0';
    type[0].style.color = '#9d9d9d';
    type[0].nextElementSibling.style.display = 'none';
})

//scroll trigger
//gsap.to('적용대상',{scrollTrigger:'뷰포트인식대상'})
gsap.to('.s2 img',{
    scrollTrigger:'.s2',
    duration:1,//1초
    delay:0.2,
    y:100,
    borderRadius:50,
    scale:0.8,
    opacity:1,
})