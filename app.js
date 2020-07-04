let start ="";
let end=" ";
let time=document.querySelector("#timeTaken")


function getRandomDiv(){

    const div = document.createElement('div');
    start=new Date().getTime();
    const clientW1 = Math.random() * document.body.clientWidth + "px";
    const clientH1 = Math.random() * document.body.clientHeight + "px";
div.style.right=Math.floor(Math.random()*400)+"px";
div.style.width=Math.floor(Math.random()*400)+"px";
div.style.height=Math.random()*500+"px";
div.style.position="absolute";
document.body.appendChild(div);

if(Math.random()>0.4){

    div.style.borderRadius="50%"
}else{
    div.style.borderRadius="0";
}
div.style.backgroundColor= getRandomColor();

div.addEventListener("click",()=>{
   
    div.style.display="none";
    end=new Date().getTime();
    time.textContent=(end-start)/1000;
    setTimeout(()=>{
        getRandomDiv();
        
    },500)
})


}


getRandomDiv();








function getRandomColor(){


    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){


        let index = Math.floor(Math.random()*16);
        color +=letters[index]
    }
    return color;
}
