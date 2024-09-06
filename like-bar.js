

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

$('.js-scroll').on("click", function () {
  $('.navbar').collapse('hide');
});



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
document.querySelectorAll('nav ul .js-scroll').forEach(anchor => {
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
    hamburguers: [
          { name: 'Hamburguer', price: '$28' },
          { name: 'Hamburguer em bolo do caco', price: '$15' },
          { name: 'Hamburguer de Kebab', price: '$22' },
          { name: 'Hamburguer dulpa 2 camadas de carne', price: '$30' },
      ],
      tostas: [
          { name: 'Tosta de queijo', price: '$12' },
          { name: 'Tosta de fiambre', price: '$10' },
          { name: 'Tosta mista', price: '$14' },
          { name: 'Tosta tripla', price: '$16' },
      ],
      francesinha: [
          { name: 'francesinha like', price: '$8' },
      ],
      cachorrosquentes: [
          { name: 'Cachorro Normal', price: '$18' },
          { name: 'Cachorro Prensado', price: '$20' },
          { name: 'Cachorro Da Casa', price: '$17' },
      ],
      baguetes: [
          { name: 'Baguete De Atum', price: '$25' },
          { name: 'Baguete De Bacon', price: '$30' },
          { name: 'Baguete De Lombo', price: '$35' },
          { name: 'Baguete De Lombo e Bacon', price: '$18' },
      ],
      kebabs: [
          { name: 'Kebab No Prato Com Alface', price: '$10' },
          { name: 'Kebab No Prato Com Batata Frita', price: '$9' },
          { name: 'Kebab Na Baguete', price: '$8' },
          { name: 'Kebab No Pão Pita', price: '$12' },
      ],
  };

  const categoryLinks = document.querySelectorAll('.menu-categories li, .menu2 li');
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

const carousel = document.querySelector('.carousel');

let isDragStart = false;

const dragstart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollleft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollleft - positionDiff;
};

const dragstop = () => {
  isDragStart = false;
}

carousel.addEventListener("mousedown", dragstart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragstop);

/*const slider = document.querySelector('.carousel');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.cursor = 'grab';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scrolling speed
    slider.scrollLeft = scrollLeft - walk;
});
*/

document.getElementById(`menu-button`).addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('active');
  console.log("Menu button clicked");
});
