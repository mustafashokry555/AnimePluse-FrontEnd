
$(document).ready(function() {


    ///////////// sidebar////////////////////
    function toggleSidebar() {
        $(".button").toggleClass("active");
        $("main").toggleClass("move-to-left");
        $(".sidebar-item").toggleClass("active");
      }
    
      $(".button").on("click tap", function() {
        toggleSidebar();
      });
    
      $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          toggleSidebar();
        }
      });
      ///////////// sidebar////////////////////


      
    // dropdown container
    const dropdown = document.querySelector('.dropdown');

    // input
    const input = document.querySelector('input');

    // dropdown list elements
    const listOfOptions = document.querySelectorAll('.option');
    const body = document.body;

    // Functions

    // basic toggle (open/close) function
    // "classList.toggle(className)" toggles 'opened' class
    const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('opened');
    };
    // option selection from dropdown list
    // used "event.currentTarget" to specify the selected option
    // after option is chosen, its "textContent" value being copied to input's value
    const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
    };

    // we want the dropdown list to close when clicked outside of it
    // ex: no option was selected
    // we do a simple check below
    // if dropdown list is in opened state
    // then remove the ".opened" class
    const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
    }
    };
    // Event Listeners
    // if we click anywhere on "body" and dropdown list opened
    // the dropdown will be closed
    body.addEventListener('click', closeDropdownFromOutside);
    // options selection
    listOfOptions.forEach((option) => {
    option.addEventListener('click', selectOption);
    });
    // dropdown toggle
    dropdown.addEventListener('click', toggleDropdown);
    
    
    $("#owl-example").owlCarousel();

    var owl = $("#owl-demo");
  
    owl.owlCarousel({
        items : 6, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
        autoPlay:true,
        autoHeight:false,
        // transitionStyle:false
    });
  
    // Custom Navigation Events
    $(".next").click(function(){
      owl.trigger('owl.next');
    })
    $(".prev").click(function(){
      owl.trigger('owl.prev');
    })
    $(".play").click(function(){
      owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
      owl.trigger('owl.stop');
    })
    
    
    var owl2 = $("#owl-others");
  
    owl2.owlCarousel({
        items : 6, //10 items above 1000px browser width
        itemsDesktop : [1000,5], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,3], // betweem 900px and 601px
        itemsTablet: [600,2], //2 items between 600 and 0
        itemsMobile : true, // itemsMobile disabled - inherit from itemsTablet option
        autoPlay:true,
        autoHeight:false,
        // transitionStyle:false
    });
  
    // Custom Navigation Events
    $(".next").click(function(){
      owl2.trigger('owl.next');
    })
    $(".prev").click(function(){
      owl2.trigger('owl.prev');
    })
    $(".play").click(function(){
      owl2.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
      owl2.trigger('owl.stop');
    })

});