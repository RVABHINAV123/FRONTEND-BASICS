import "./style.css";
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    //alert("Hello user!");
  });
});
console.log(2+2);
let username;
document.getElementById("firstbutt").onclick=function(){
 username=document.getElementById("data").value;
 alert(`fuck off ${username} ! `);
 console.log(username);
 document.getElementById("wow").textContent=  `hello ${username} ! `;
}
let radius;
let circumference;
const PI=3.14159;
document.getElementById("result").onclick=function(){
  radius=document.getElementById("value").value;
  radius=Number(radius);
  if(isNaN(radius) || radius<=0){
    document.getElementById("output").textContent=`Please enter a valid radius`;
    return;
  }
  circumference=2*PI*radius;

  document.getElementById("output").textContent=`Circumference: ${circumference}`;
}


document.getElementById("increment").onclick=function(){
  document.getElementById("numberz").textContent++;

}
document.getElementById("decrement").onclick=function(){
  document.getElementById("numberz").textContent--;

}
document.getElementById("reset").onclick=function(){
  document.getElementById("numberz").textContent=0;
}
document.getElementById("roll").onclick=function(){
  let randomNumber=Math.floor(Math.random()*6)+1;
  document.getElementById("resultz").textContent=randomNumber;
}