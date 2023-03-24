import slider from "./modules/slider";
import scrolling from "./modules/scrolling";


window.addEventListener("DOMContentLoaded", () => {
	slider('.slider__item_active', 'horizontal', '.slider__arrow_prev', '.slider__arrow-next');
	scrolling('.pageup');
});