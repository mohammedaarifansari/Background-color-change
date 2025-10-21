let screen = document.querySelector(".screen");
let btn = document.querySelector("#btn");

btn.addEventListener("click",function (){
  
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let allcolor = `rgb(${red},${green},${blue})`;

  screen.style.backgroundColor = allcolor;

});
