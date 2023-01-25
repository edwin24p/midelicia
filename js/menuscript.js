let toggleButton = document.querySelector(".header__hamburger")
let links = document.querySelector(".header__links")
let close = document.querySelector(".header__close")
let overlay = document.querySelector('.header__overlay')
let body = document.querySelector("body")
let individualLink = document.querySelectorAll('.header__link')
let categories = document.querySelector('.menu__categories')
let sticky = categories.offsetTop;




toggleButton.addEventListener('click', function(e){
    overlay.classList.add('active');
    links.classList.add('active');
    close.classList.add('active');
    body.classList.add('no-scroll');
    
});

close.addEventListener('click', function(e){
    overlay.classList.remove('active');
    links.classList.remove('active');
    close.classList.remove('active');
    body.classList.remove('no-scroll');
});

overlay.addEventListener('click', function(e){
    overlay.classList.remove('active');
    links.classList.remove('active');
    close.classList.remove('active');
    body.classList.remove('no-scroll');
})

individualLink.forEach(link=>{
    link.addEventListener('click', function(e){
        if(window.innerWidth<=992){
        overlay.classList.remove('active');
        links.classList.remove('active');
        close.classList.remove('active');
        body.classList.remove('no-scroll');
        }
        
    })
})


function myFunction() {
    if (window.pageYOffset > sticky) {
      categories.classList.add("sticky");
     
    } else {
      categories.classList.remove("sticky");
      
      
    }
  }

  window.onscroll = function() {myFunction()};









