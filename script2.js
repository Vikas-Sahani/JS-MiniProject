document.querySelector('#rocky').addEventListener('click',() =>{
    document.querySelector('.content1').style.zIndex='0';
    document.querySelector('.content2').style.zIndex='3';
    document.querySelector('.content3').style.zIndex='0';
});

var indexValue = 1;
showImg2(indexValue);
function side_slide2(e){showImg2(indexValue=e);}
function btm_slide2(e){showImg2(indexValue=e);}

function showImg2(e){
    const img = document.querySelectorAll('.images2 img');
    const sliders = document.querySelectorAll('.btm-sliders2 span');
    if(e>img.length){indexValue = 1}
    if(e<1){indexValue = img.length}
    for(let i=0; i<img.length; i++){
        img[i].style.display = 'none';
    }
    for(let i=0; i<sliders.length; i++){
        sliders[i].style.background = 'rgba(0, 0, 0, 0.3)';
    }
    img[indexValue-1].style.display = "block";
    sliders[indexValue-1].style.background = "white";
}
