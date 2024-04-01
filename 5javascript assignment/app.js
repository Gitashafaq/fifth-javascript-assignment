let scrollBtn = document.querySelector("#backTop"); 
 
window.addEventListener("scroll" ,function(){
 if(window.pageYOffset >= 200){
   scrollBtn.style.opacity = 1;
 }else{
   scrollBtn.style.opacity =0;
 }
});
scrollBtn.addEventListener("click",function(){
 window.scrollTo(0,0);
});


// window open


let btnOpen = document.querySelector("#open");
let win1;
btnOpen.addEventListener("click",function(){
win1 =  window.open("","_blank","width=300px,height =300px,left =300px,top=200px");
});

setTimeout(function(){
 win1.close();
},5000);


// Reset

let div = document.querySelector("#div1");
let counter =0;
setInterval(function(){
if(counter == 100){
 counter =0;
}else{
 div.style.width = counter+"%";
 counter++;
 div.innerText = counter+"%";
}

},1000)
