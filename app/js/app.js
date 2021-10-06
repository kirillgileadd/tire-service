// // Import vendor jQuery plugin example
import Swiper from 'swiper/bundle'
import videojs from 'video.js'
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
document.addEventListener('DOMContentLoaded', () => {
	// videojs(document.querySelector('#video-1'))
	// videojs(document.querySelector('#video-2'))
	// videojs(document.querySelector('#video-3'))
	// videojs(document.querySelector('#video-4'))

})
