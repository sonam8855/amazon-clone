document.getElementById("mySelect").addEventListener("change", function() {
    console.log("Selected Value:", this.value);
});



// slider

const imgs = document.querySelectorAll('.slider ul img');
const prev_btn = document.querySelector('.previous');
const next_btn = document.querySelector('.next');

let n =0;

function slide(){
    for (let i=0; i<imgs.length; i++){
        imgs[i].style.display ='none';
    }
    imgs[n].style.display= 'block';
}
slide();

prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }
    else{
        n = imgs.length -1;
    }
    slide();
})
next_btn.addEventListener('click', (e)=>{
    if(n< imgs.length -1){
        n++;
    }
    else{
        n = 0;
    }
    slide();
})

// automatic slide

let slideIndex = 0;
showslide();

function showslide(){
    let i;
    let slides= document.getElementsByClassName("slider-img");
    for(i = 0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if (slideIndex>=slides.length) {
        slideIndex =1
    }

    slides[slideIndex -1].style.display ="block";
    setTimeout(showslide, 2000)

}
