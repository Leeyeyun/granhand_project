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
console.log(search_icn, search_container, close)
search_icn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(8)
    search_container.style.transform = 'translateY(0)'
    search_container.style.opacity = '1'
})
close.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(8)
    search_container.style.transform = 'translateY(-100vh)'
    search_container.style.opacity = '0'
})