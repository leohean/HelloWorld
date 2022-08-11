let i=0;
const imgs=["rio","newyork","london"];

function carrousel(){
    document.getElementsByClassName("welcome")[0].style.backgroundImage='url(images/'+imgs[i]+'.jpg)';
    i++;
    if(i>2){
        i=0;
    }
}

setInterval("carrousel()",10000);

