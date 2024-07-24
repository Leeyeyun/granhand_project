//header search 검색창 recommend 슬라이드 swipe
const swiper4 = new Swiper('.rec-slide',{
    effect:'',
    autoplay:{delay:4000},
    centeredSlides:true,
    slidesPerView:'1',
    loop:true,
    spaceBetween:36,
    pagination:{
        el:'.rec-slide .swiper-pagination',
        type:'bullets',
    },
    breakpoints : {
        501:{
            slidesPerView:'auto',
        },
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
    document.body.style.overflow = 'hidden';
})
close.addEventListener('click',(e)=>{
    e.preventDefault();
    search_container.style.transform = 'translateY(-100vh)'
    search_container.style.opacity = '0'
    document.body.style.overflow = 'visible';
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
const m_nav_bg = document.querySelector('.m_nav_bg')
/* document.body.style.overflowX = 'hidden'; */

m_nav_lnb.appendChild(nav_clone)

m_nav_wrap.style.display = 'none'


m_nav_bg.style.opacity = '0'
m_nav_bg.style.display = 'none'

all_nav.addEventListener('click',(e)=>{
    e.preventDefault();
    m_nav_wrap.style.display = 'block'
    all_nav.style.display = 'none'
    document.body.style.overflow = 'hidden';
    m_nav_bg.style.transition = 'opacity 0.5s display 0.5s'
    m_nav_bg.style.display = 'block'
    m_nav_bg.style.opacity = '1'
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
m_gnb_li_a[3].href = './wallpaper.html'

nav_close.addEventListener('click',(e)=>{
    e.preventDefault();
    m_nav_wrap.style.display = 'none'
    all_nav.style.display = 'block'
    m_nav_bg.style.display = 'none'
    m_nav_bg.style.opacity = '0'
    document.body.style.overflow = '';
})

//sub 초기값 : 처음 sub만 보이고 나머지 닫기
for(let i of m_nav_sub){
    i.style.height = '0';
    i.style.overflow = 'hidden'
    i.style.opacity = '0'
}
for(let i of m_gnb_li_a){
    i.addEventListener('click',()=>{
        console.log(i.nextElementSibling)
        for(let a of sub_close_arrow){
            a.style.transform = 'rotate(0)'
        }
        for(let j of m_nav_sub){
            j.style.transition = 'height 0.3s, overflow 0.3s, opacity 0.3s'
            j.style.height = '0'
            j.style.overflow = 'hidden'
            j.style.opacity = '0'

        }
        i.children[0].style.transition = 'transform 0.5s'
        i.children[0].style.transform = 'rotate(-180deg)'
        /* i.nextElementSibling.style.height = '100%' */
        i.nextElementSibling.style.overflow = 'visible'
        i.nextElementSibling.style.opacity = '1'
        if (i.nextElementSibling.children.length == 7){
            i.nextElementSibling.style.height = `calc(32px * ${i.nextElementSibling.children.length} + 16px)`
        }else {i.nextElementSibling.style.height = `calc(32px * ${i.nextElementSibling.children.length})`}
        console.log(i.nextElementSibling.children.length)
    })
}

//모바일 search btn 클릭 시 검색창 등장
const m_search = m_nav_lnb.children[0].children[0]
m_search.addEventListener('click',(e)=>{
    e.preventDefault();
    search_container.style.transform = 'translateY(0)'
    search_container.style.opacity = '1'
})
