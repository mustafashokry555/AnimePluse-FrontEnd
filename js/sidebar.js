$(document).ready(function() {

// let navButton = document.querySelector(".nav-button");

// navButton.addEventListener("click", (e) => { 
//   e.preventDefault();
  
//   // toggle nav state
//   document.body.classList.toggle("nav-visible");
// });


$('.toggle-icon .fa-navicon').on('click',function(){

  $('.sidebar').toggleClass('is-visible');

  if ($('.sidebar').hasClass('is-visible')) {

    $('.sidebar').animate({
      right:0
    },400)

    $('.box-control').css({
      display:'block'
    })
    
  }else{
    $('.sidebar').animate({
      right:'-250px'
    },400)

    $('.box-control').css({
      display:'none'
    })
  }

})


  $('.box-control').on('click',function(){

    if ($('.sidebar').hasClass('is-visible')) {
      $('.sidebar').animate({
        right:'-250px'
      },400)

      $(this).css({
        display:'none'
      })
    }

  })


});