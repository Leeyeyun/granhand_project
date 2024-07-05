const swiper1 = new Swiper('.journal-slide',{
    effect:'',
    autoplay:{delay:3000},
    loop:true,
    slidesPerView:2,
    spaceBetween:32,
    pagination:{
        el:'.journal_pagination .swiper-pagination',
        type:'fraction',
    },
    navigation:{
        nextEl:'.journal_pagination .swipe_arrow .swiper-button-next',
        prevEl:'.journal_pagination .swipe_arrow .swiper-button-prev',
    },
});

//journal main 이미지 mouseover 시 view 등장
const j_contents = document.querySelectorAll('.journal-slide .j_contents')
const view = document.querySelector('.j_contents .view')
console.log(j_contents, view)
for(let i of j_contents)('mouseenter',()=>{
    i.classList.add('display');
    view.classList.add('view_on');
})
for(let i of j_contents)('mouseleave',()=>{
    i.classList.remove('display');
    view.classList.remove('view_on');
})
/* j_main.addEventListener('mouseenter',()=>{
    j_main.classList.add('display');
    view.classList.add('view_on');
})
j_main.addEventListener('mouseleave',()=>{
    j_main.classList.remove('display');
    view.classList.remove('view_on');
}) */
