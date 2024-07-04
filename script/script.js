const swiper1 = new Swiper('.shop-slide',{
    effect:'',
    /* autoplay:{}, */
    slidesPerView:3,
    /* spaceBetween:60, //위 slidesPerview 여백 */
    scrollbar: {
        el:'.swiper-scrollbar',
        draggable:true,
        hide:false,
    },
    breakpoints: { //반응형 조건 속성
    1200: {slidesPerView:3},
    },
});

const swiper2 = new Swiper('.store-slide',{
    effect:'',
    autoplay:{},
    loop:true,
    slidesPerView:1,
    navigation:{
        nextEl:'.store-slide .swiper-button-next',
        prevEl:'.store-slide .swiper-button-prev',
    },
});

const swiper3 = new Swiper('.journal-slide',{
    effect:'',
    autoplay:false,
    slidesPerView:2,
    spaceBetween:35,
    scrollbar: {
        el:'.swiper-scrollbar',
        draggable:true,
        hide:false,
    },
    /* spaceBetween:60, //위 slidesPerview 여백 */
});

// fullpage js 플러그인 연결 필수!
$('#fullpage').fullpage({
    scrollBar:true,
    scrollingSpeed:800,
    onLeave:function(index, nextIndex, direction){
        //현재 스크롤 위치 인식
        console.log(index, nextIndex, direction);
        // "down" 방향일 때 조건
        if (direction == 'down' && (index == 1 || index == 3 || index == 5)) {
            console.log(index);
            $('nav .gnb > li > a').css('color', '#282828');
            $('nav .gnb > li > a').addClass('active');
            $('header .lnb > a').addClass('invert');
            $('header .logo > a > img').addClass('invert');
        }
        // "up" 방향일 때 조건
        else if (direction == 'up' && (index == 7 || index == 5 || index == 4)) {
            console.log(index);
            $('nav .gnb > li > a').css('color', '#282828');
            $('nav .gnb > li > a').addClass('active');
            $('header .lnb > a').addClass('invert');
            $('header .logo > a > img').addClass('invert');
        }
        // 그 외의 경우
        else {
            console.log(index)
            $('nav .gnb > li > a').css('color', '#fff');
            $('nav .gnb > li > a').removeClass('active');
            $('header .lnb > a').removeClass('invert');
            $('header .logo > a > img').removeClass('invert');
        }
    },
})

//title mouseover 시 오른쪽에서 화살표 등장
const titles = document.querySelectorAll('.title');

titles.forEach(title => {
    title.addEventListener('mouseenter', (e)=>{
        e.preventDefault();
        title.classList.add('arrow');
    });

    title.addEventListener('mouseleave', (e)=>{
        e.preventDefault();
        title.classList.remove('arrow');
    });
});

//journal main 이미지 mouseover 시 view 등장
const j_main = document.querySelector('.journal_contents .j_main a')
const view = document.querySelector('.j_main .view')
console.log(j_main, view)
j_main.addEventListener('mouseenter',()=>{
    j_main.classList.add('display');
    view.classList.add('view_on');
})
j_main.addEventListener('mouseleave',()=>{
    j_main.classList.remove('display');
    view.classList.remove('view_on');
})


