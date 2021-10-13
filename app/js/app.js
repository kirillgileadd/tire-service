// // Import vendor jQuery plugin example
import Swiper from 'swiper/bundle'
import videojs from 'video.js'
import noUiSlider from 'nouislider'
import IMask from 'imask';
import mixitup from 'mixitup';
// import '~/app/libs/mmenu/dist/mmenu.js'
const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 5,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
});

let video1 = document.querySelector('#video-1')
video1.volume = 0.1
videojs(video1)
videojs(document.querySelector('#video-2'))
videojs(document.querySelector('#video-3'))
videojs(document.querySelector('#video-4'))

document.addEventListener('DOMContentLoaded', () => {

	/// INPUT 

	var elements = document.querySelectorAll('#phone');
	var maskOptions = {
		mask: '+7(000)000-00-00',
		lazy: false
	}

	if (elements) {
		for (let i = 0; i < elements.length; i++) {
			let mask = new IMask(elements[i], maskOptions)
		}
	}

	// MAP 

	document.addEventListener('click', function (e) {
		var map = document.querySelector('#map-wrap iframe')
		if (e.target.id === 'map-wrap') {
			map.style.pointerEvents = 'all'
		} else {
			map.style.pointerEvents = 'none'
		}
	})
	// Price 

	const R1315 = [120, 125, 105, 30, 50, 200, 100, 350, 300 - 600, 500 - 700, 600 - 1400, 400, 1.2, 500 / 800, 500 / 800,]
	const R16 = [220, 225, 205, 50, 70, 300, 200, 450, 300 - 800, 600 - 800, 700 - 1400, 400, 1.2, 500 / 800, 500 / 800,]
	const R17 = [320, 325, 305, 60, 80, 400, 100, 350, 300 - 600, 500 - 700, 600 - 1400, 400, 1.2, 500 / 800, 500 / 800,]
	const R18 = [420, 325, 405, 70, 90, 500, 100, 350, 300 - 600, 500 - 700, 600 - 1400, 400, 1.2, 500 / 800, 500 / 800,]
	const R19 = [520, 425, 505, 80, 100, 600, 100, 350, 300 - 600, 500 - 700, 600 - 1400, 400, 1.2, 500 / 800, 500 / 800,]
	const R20 = [620, 525, 605, 90, 110, 700, 100, 350, 300 - 600, 500 - 700, 600 - 1400, 400, 1.2, 500 / 800, 500 / 800,]
	const R2122 = [620, 625, 705, 100, 120, 800, 100, 350, 300 - 600, 500 - 700, 600 - 1400, 400, 1.2, 500 / 800, 500 / 800,]

	const sliderItems = document.querySelectorAll('.slider__item')
	if (sliderItems) {
		sliderItems.forEach((sliderItem) => {
			sliderItem.addEventListener('click', () => {
				removeAllClasses()
				sliderItem.classList.add('active')
			})
		})
	}

	function removeAllClasses() {
		sliderItems.forEach((sliderItem) => {
			sliderItem.classList.remove('active')
		})
	}

	var mixer = mixitup('.price__inner', {
		load: {
			filter: '.category-a'
		}
	});


})
