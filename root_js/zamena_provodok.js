let id = 1;
let slideShow;
let start = document.getElementById("slide1");

slideShow = setInterval(startSlideShow,3000);
setTimeout(startSlideShow,-3000);
//start slideshow
function startSlideShow(){

    let current_slide = document.getElementById("slide" + id);
    current_slide.style.display = "none";
    if(id == 7){
        id = 0;
    }    

    let next_slide = document.getElementById("slide" + (id + 1));
    next_slide.style.display = "block";
    id++;
}

function reverseSlideShow(){
    let current_slide = document.getElementById("slide" + id);
    current_slide.style.display = "none";
    if(id == 1){
        id = 8;    
    }

    let next_slide = document.getElementById("slide" + (id - 1));
    next_slide.style.display = "block";
    id--;
}
    //next
document.getElementById("next").addEventListener("click",() => {
    clearInterval(slideShow);
    startSlideShow();
    slideShow = setInterval(startSlideShow,3000);
})
    //previous
document.getElementById("previous").addEventListener("click",() => {
    clearInterval(slideShow);
    reverseSlideShow();
    slideShow = setInterval(startSlideShow,3000);
})