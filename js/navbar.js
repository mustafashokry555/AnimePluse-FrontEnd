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






    // Scroll To Up Button And Navbar
    let navScroll = $('.navbar');

    $(window).scroll(function () {

        if ($(window).scrollTop() >= 400) {

            navScroll.css({
                position: 'fixed',
                width: '100%',
                height: '70.4px',
                top: 0,
                boxShadow: 'rgba(42, 41, 41, 0.9) 0px 0px 24px',
                transition: '1s',
            }, 300);

        } else {
            
            if ($(window).height(0)) {
                navScroll.css({
                    height: 0,
                    padding: 0,
                    zindex: '10',
                    top: '40px',
                    transition: '1s'

                }, 300);
            }
        }

        
    });

});