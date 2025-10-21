let body = document.querySelector("body");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn){
  btn.addEventListener('click', function (e){
    if (e.target.id ==='green'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id ==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id ==='orange'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id ==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id ==='violet'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id ==='red'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id ==='purple'){
      body.style.backgroundColor=e.target.id;
    }
    if (e.target.id ==='indigo'){
      body.style.backgroundColor=e.target.id;
    }
  })
});