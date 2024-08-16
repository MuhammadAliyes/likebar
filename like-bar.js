

(function ($) {
	"use strict";
	var wind = $(window);
	var parallaxSlider;
	var parallaxSliderOptions = {
		speed: 1000,
		autoplay: true,
		parallax: true,
		loop: true,
		on: {
			init: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					$(swiper.slides[i]).find('.bg-img').attr({
						'data-swiper-parallax': 0.75 * swiper.width
					});
				}
			},
			resize: function () {
				this.update();
			}
		},
		pagination: {
			el: '.slider-prlx .parallax-slider .swiper-pagination',
			dynamicBullets: true,
			clickable: true
		},
		navigation: {
			nextEl: '.slider-prlx .parallax-slider .next-ctrl',
			prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
		}
};


$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - navHeight + 30)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

$('body').scrollspy({
  target: '#mainNav',
  offset: navHeight
});
  
jQuery(window).on('load', function () {
  jQuery('.preloader').delay(500).fadeOut('slow');
}); 
});

// JavaScript for Smooth Scrolling with Offset
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 71; // Adjust this value to match the height of your fixed navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });
  });
});



// menu navbar js
document.addEventListener('DOMContentLoaded', () => {
  const menuItemsData = {
      main: [
          { name: 'Pan-Seared Pacific Salmon', price: '$28' },
          { name: 'Table Burger', price: '$15' },
          { name: 'Roasted Butternut Squash Risotto', price: '$22' },
          { name: 'Braised Short Ribs', price: '$30' },
      ],
      salads: [
          { name: 'Caesar Salad', price: '$12' },
          { name: 'Greek Salad', price: '$10' },
          { name: 'Caprese Salad', price: '$14' },
          { name: 'Quinoa Salad', price: '$16' },
      ],
      soups: [
          { name: 'Tomato Soup', price: '$8' },
          { name: 'Minestrone', price: '$9' },
          { name: 'Chicken Noodle Soup', price: '$11' },
          { name: 'Lentil Soup', price: '$10' },
      ],
      pastas: [
          { name: 'Spaghetti Carbonara', price: '$18' },
          { name: 'Fettuccine Alfredo', price: '$20' },
          { name: 'Penne Arrabiata', price: '$17' },
          { name: 'Lasagna', price: '$22' },
      ],
      grillbarbecue: [
          { name: 'Grilled Chicken', price: '$25' },
          { name: 'Barbecue Ribs', price: '$30' },
          { name: 'Steak', price: '$35' },
          { name: 'Grilled Vegetables', price: '$18' },
      ],
      desserts: [
          { name: 'Chocolate Cake', price: '$10' },
          { name: 'Cheesecake', price: '$9' },
          { name: 'Apple Pie', price: '$8' },
          { name: 'Tiramisu', price: '$12' },
      ],
  };

  const categoryLinks = document.querySelectorAll('.menu-categories li');
  const menuList = document.querySelector('.menu-items');

  categoryLinks.forEach(link => {
      link.addEventListener('click', () => {
          const category = link.textContent.toLowerCase().replace(/\s+/g, '').replace(/\//g, '');
          const items = menuItemsData[category];

          menuList.innerHTML = '';

          items.forEach(item => {
              const li = document.createElement('li');
              li.innerHTML = `<span class="item-name">${item.name}</span><span class="item-price">${item.price}</span>`;
              menuList.appendChild(li);
          });
      });
  });
});
