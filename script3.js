document.querySelector('#tony').addEventListener('click',() =>{
    document.querySelector('.content1').style.zIndex='0';
    document.querySelector('.content2').style.zIndex='0';
    document.querySelector('.content3').style.zIndex='3';
});

var indexValue = 1;
showImg3(indexValue);
function side_slide3(e){showImg3(indexValue=e);}
function btm_slide3(e){showImg3(indexValue=e);}

function showImg3(e){
    const img = document.querySelectorAll('.images3 img');
    const sliders = document.querySelectorAll('.btm-sliders3 span');
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