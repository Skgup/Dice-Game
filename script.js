const body = document.querySelector("body");
const randomNumber1=Math.floor(Math.random()*6)+1;
const RandomDiceImage = "dice" + randomNumber1 + ".png";
const randomeImageSource = "images/" + RandomDiceImage;
const image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomeImageSource);


const randomNumber2=Math.floor(Math.random()*6)+1;
const randomImageSource2 = "images/dice"+ randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩🚩Player 1 wins!🎗️🎗️"
  
   body.style.backgroundImage = "url('images/winer1.jpg')"; 
    body.style.backgroundSize="cover";
    document.querySelector("h1").style.color="rgb(128, 229, 4)";
   
    
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩🚩Player 2 wins!🎗️🎗️"
   body.style.backgroundImage = "url('images/winer2.jpg')"; 
    body.style.backgroundSize="cover";
    document.querySelector("h1").style.color="#cc3f00";
    
}
else{
    document.querySelector("h1").innerHTML="😒😒Draw"
    body.style.backgroundImage = "url('images/Draw.jpg')"; 
    body.style.backgroundSize="cover";

    document.querySelector("h1").style.color="red";
    
   

}
const btn =document.querySelector(".btn");
btn.addEventListener("click",()=>{
    location.reload();
})