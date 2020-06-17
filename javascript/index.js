$(window).scroll(function() {
   if ($(this).scrollTop() > 0){
      $('.main-header-wrapper').addClass("small");
   } else {
      $('.main-header-wrapper').removeClass("small");
   }
});


//timeline


//menu active span bar


window.onload = function(){ 
   let toggleBtn = document.querySelector(".toggle-menu");
  
  
   let x= document.getElementById("myDIV");
   toggleBtn.onclick = function(){
      
    
      if (x.style.display === 'none') {
         x.style.display = 'block';
       } else {
         x.style.display = 'none';
       }
      
      
   }

};

