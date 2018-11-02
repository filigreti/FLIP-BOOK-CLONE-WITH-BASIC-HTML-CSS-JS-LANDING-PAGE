


window.addEventListener("DOMContentLoaded", function(event) {
    const nav = document.getElementById('body-header');
    const topOfNav = nav.offsetTop;
    const main = document.getElementById('head');
  
  
   function fixNav (){
   if(window.scrollY >= topOfNav) {
      main.style.paddingTop = '0'
       main.style.borderBottom = '0'
   } else
   main.style.borderBottom = '0.5px solid rgb(236, 229, 229)'
   }
  
  
  window.addEventListener('scroll',fixNav);   
        
})