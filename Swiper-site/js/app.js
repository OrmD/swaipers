

const slids = document.querySelectorAll('.slider').forEach((n,i)=>{
	window[`slider${i+1}`] = new Swiper(n ,{
		freeMode: true,
		centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: -125,
		loop: true,
		loopedSlides: 5,
	})

});

bindSwipers(slider1 , slider2 , slider3 , slider4)

let sliderImages = document.querySelectorAll('.slider__img');


sliderImages.forEach((a)=>{
	a.addEventListener('click',()=>{
		console.log(a);
		a.classList.toggle('_active');
		
	})
})
