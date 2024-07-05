const type = document.querySelectorAll('.store_type li .type')
console.log(type);
console.log(type[1].nextElementSibling);
/* for(let i of type){
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        i.style.borderBottom = '2px solid #000';
        i.style.color = '#000';
    })
} */
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