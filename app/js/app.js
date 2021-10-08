// // Import vendor jQuery plugin example
import Swiper from 'swiper/bundle'
import videojs from 'video.js'
import noUiSlider from 'nouislider'
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
videojs(document.querySelector('#video-1', {
	controlBar: {
		fullscreenToggle: false
	},
}))
videojs(document.querySelector('#video-2'))
videojs(document.querySelector('#video-3'))
videojs(document.querySelector('#video-4'))

document.addEventListener('DOMContentLoaded', () => {


	document.addEventListener('click', function (e) {
		var map = document.querySelector('#map-wrap iframe')
		if (e.target.id === 'map-wrap') {
			map.style.pointerEvents = 'all'
		} else {
			map.style.pointerEvents = 'none'
		}
	})
	// Price 

	var slider = document.getElementById('slider');


	noUiSlider.create(slider, {
		range: {
			'min': 0,
			'10%': 10,
			'23%': 23,
			'30%': 30,
			// Nope, 40 is no fun.
			'50%': 50,
			'60%': 60,
			'70%': 70,
			// I never liked 80.
			'90%': 90,
			'max': 100
		},
		snap: true,
		start: [0]
	});
})
