import slider from "./modules/slider.js";
import scrolling from "./modules/scrolling.js";


window.addEventListener("DOMContentLoaded", () => {
	scrolling('.pageup');
	slider('.slider__item', 'horizontal', '.slider__arrow_prev', '.slider__arrow_next');
});