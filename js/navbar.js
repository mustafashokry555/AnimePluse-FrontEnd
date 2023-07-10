$(document).ready(function() {
      $('.mean-toggle').click(function()
      {
      $('.mean-toggle').toggleClass('active')
      $('nav').toggleClass('active')
      })


      $('.border-right').hover(function() {
      $(this).find('span').eq(0).animate({

            width: '100%'

      }, 300);

      }, function() {

      $(this).find('span').eq(0).animate({

            width: 0

      }, 300)

      });
});