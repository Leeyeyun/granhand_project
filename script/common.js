//header search 검색창 recommend 슬라이드 swipe
const swiper4 = new Swiper('.rec-slide',{
    effect:'',
    autoplay:{delay:4000},
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,
    spaceBetween:36,
    pagination:{
        el:'.rec-slide .swiper-pagination',
        type:'bullets',
    },
});

//search icn 클릭 시 검색창 등장
const search_icn = document.querySelector('header .lnb > .search')
const search_container = document.querySelector('header .search_container')
const close = document.querySelector('header .search_container .close')

/* 검색창 초기값 */
search_container.style.transform = 'translateY(-100vh)'
search_icn.addEventListener('click',(e)=>{
    e.preventDefault();
    search_container.style.transform = 'translateY(0)'
    search_container.style.opacity = '1'
})
close.addEventListener('click',(e)=>{
    e.preventDefault();
    search_container.style.transform = 'translateY(-100vh)'
    search_container.style.opacity = '0'
})

//lang icn 클릭 시 옵션 등장
const lang = document.querySelector('.lnb .lang')
const lang_opt = document.querySelector('.lang_opt')
lang.addEventListener('click',(e)=>{
    e.preventDefault();
    lang_opt.classList.toggle('on')
})

//m_nav 모바일 전용 메뉴
const nav = document.querySelector('nav')
const nav_clone = nav.cloneNode(true) //nav 복제 변수
const m_nav = document.querySelector('.m_nav')
const m_nav_wrap = document.querySelector('.m_nav_wrap')
const m_nav_lnb = document.querySelector('.m_nav_lnb')
const all_nav = document.querySelector('.all_nav')

m_nav_lnb.appendChild(nav_clone)

m_nav_wrap.style.display = 'none'
all_nav.addEventListener('click',(e)=>{
    e.preventDefault();
    m_nav_wrap.style.display = 'block'
    all_nav.style.display = 'none'
})

//m_nav close 버튼 클릭 시 m_nav 닫기
const nav_close = m_nav_wrap.querySelector('.close')
const m_gnb_li_a = m_nav_lnb.querySelectorAll('nav .gnb > li > a')
const m_nav_sub = m_nav_lnb.querySelectorAll('nav .gnb > li .sub')
const sub_close_arrow = m_nav_lnb.querySelectorAll('nav .gnb > li > a > img')

//링크 #으로 없애기
for(let i of m_gnb_li_a){
    i.href = '#'
}

nav_close.addEventListener('click',(e)=>{
    e.preventDefault();
    m_nav_wrap.style.display = 'none'
    all_nav.style.display = 'block'
})

//sub 초기값 : 처음 sub만 보이고 나머지 닫기
for(let i of m_nav_sub){
    i.style.height = '0';
}
m_nav_sub[0].style.height = '100%' //처음 sub만 보이기
sub_close_arrow[0].style.transform = 'rotate(180deg)'
for(let i of m_gnb_li_a){
    i.addEventListener('click',()=>{
        console.log(i.nextElementSibling)
        
    })
}

