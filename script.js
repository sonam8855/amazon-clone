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

