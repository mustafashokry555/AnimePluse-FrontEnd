$(document).ready(function() {

$(".popular-slider").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    rtl:true,
    navText: [
        `<div class="carousel-nav left-nav">
          <i class="fas fa-chevron-left"></i>
        </div>`,
        `<div class="carousel-nav right-nav">
          <i class="fas fa-chevron-right"></i>
        </div>`
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
        1025: {
            items: 3
        }
    }
});

$(".new-slider").owlCarousel({
    loop: false,
    margin: 10,
    rtl:true,
    nav: true,
    dots: false,
    navText: [
        `<div class="carousel-nav left-nav">
          <i class="fas fa-chevron-left"></i>
        </div>`,
        `<div class="carousel-nav right-nav">
          <i class="fas fa-chevron-right"></i>
        </div>`
    ],
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false
        },
        1025: {
            items: 5
        }
    }
});

$(".top-slider").owlCarousel({
    loop: false,
    margin: 10,
    rtl:true,
    nav: true,
    dots: false,
    navText: [
        `<div class="carousel-nav left-nav">
          <i class="fas fa-chevron-left"></i>
        </div>`,
        `<div class="carousel-nav right-nav">
          <i class="fas fa-chevron-right"></i>
        </div>`
    ],
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: false
        },
        1025: {
            items: 5
        }
    }
});

const countries = [
    { name: "USA", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "India", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Argentina", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Armenia", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Argentina", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Armenia", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Argentina", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Armenia", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
    { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 }
];

const searchInput = document.querySelector(".search-input");
const suggestionsPanel = document.querySelector(".suggestions");
const themeToggleButtons = document.querySelectorAll(".theme-toggle-button");
const body = document.querySelector("body");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuCloseButton = document.querySelector(".close-nav-button");
const mobileMenuOpenButton = document.querySelector(".menu-toggle-button");

mobileMenuOpenButton.addEventListener("click", (e) => {
    mobileMenu.classList.add("active");
})

mobileMenuCloseButton.addEventListener("click", (e) => {
    mobileMenu.classList.remove("active");
})

themeToggleButtons.forEach(themeToggleButton => {
    themeToggleButton.addEventListener("click", (e) => {
        e.preventDefault();
        body.classList.toggle("light");
    });
})

searchInput.addEventListener("keyup", function () {
    const input = searchInput.value;
    suggestionsPanel.innerHTML = "";
    const suggestions = countries.filter(function (country) {
        return country.name.toLowerCase().startsWith(input);
    });

    if (suggestions.length > 0) {
        if (suggestions.length >= 4) {
            suggestionsPanel.setAttribute(
                "style",
                `bottom: ${-200}px; display: block;`
            );
        } else {
            suggestionsPanel.setAttribute(
                "style",
                `bottom: ${suggestions.length * -60}px; display: block;`
            );
        }
    }

    if (!input) {
        suggestionsPanel.setAttribute("style", `display: none;`);
    }

    suggestions.forEach(function (suggested) {
        const div = document.createElement("div");
        div.innerHTML = `
        <img src="${suggested.imageURL}" class="img-fluid" alt="${suggested.name}"/>
        <div>
          <h4>${suggested.name}</h4>
          <h6>${suggested.year}</h6>
        </div>
      `
        suggestionsPanel.appendChild(div);
    });
    if (input === "") {
        suggestionsPanel.innerHTML = "";
    }

    
});

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
