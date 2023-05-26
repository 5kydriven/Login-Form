const boxes = document.querySelectorAll('.boxes');
// const right = document.querySelectorAll('.box-right');

window.addEventListener("scroll", checkBox);

checkBox();
//trigbottom 544
function checkBox(){
    const trigBottom = 630;
    const trigTop = 11;

    boxes.forEach(box =>{
        const boxBottom = box.getBoundingClientRect().bottom;
        const boxTop = box.getBoundingClientRect().top;

        if(boxBottom < trigBottom && boxTop > trigTop){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}