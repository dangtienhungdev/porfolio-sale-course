import { router, useEffect } from '../../../config/config';

const HomeLayout = () => {
	useEffect(() => {
		// let index = 0;
		// const sliders = document.querySelectorAll('.slider-item');
		// const show = (array) => {
		// 	for (let i = 0; i < array.length; i++) {
		// 		array[i].classList.remove('hidden');
		// 	}
		// 	array[index].classList.add('hidden');
		// };
		// setInterval(() => {
		// 	if (index === 0) {
		// 		index = sliders.length - 1;
		// 	} else {
		// 		index--;
		// 	}
		// 	show(sliders);
		// }, 4000);
		const text = document.querySelector('.text-load');
		const textLoad = () => {
			setTimeout(() => {
				text.textContent = 'hung';
			}, 0);
			setTimeout(() => {
				text.textContent = 'front-end';
			}, 4000);
		};
		textLoad();
		setInterval(textLoad, 4000);

		const isElInViewPort = (el) => {
			let rect = el.getBoundingClientRect();
			let viewHeight =
				window.innerHeight || document.documentElement.clientHeight;
			return (
				(rect.top <= 0 && rect.bottom >= 0) ||
				(rect.bottom >= viewHeight && rect.top <= viewHeight) ||
				(rect.top >= 0 && rect.bottom <= viewHeight)
			);
		};
		const elToShow = document.querySelectorAll('.onscrool-text');
		function loop() {
			elToShow.forEach((item) => {
				if (isElInViewPort(item)) {
					item.classList.remove('-translate-x-[150%]');
					item.classList.remove('translate-y-[200px]');
				} else {
					item.classList.add('-translate-x-[150%]');
					item.classList.add('translate-y-[200px]');
				}
			});
		}
		window.onscroll = loop;
		loop();
		/* download cv */
		const downloadCv = document.querySelector('.download-cv');
		downloadCv.addEventListener('click', (e) => {
			e.preventDefault();
			const link = document.createElement('a');
			link.href = '/public/cv/Lab8.pdf';
			link.download = 'Lap8.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.remove(link);
			router.navigate('/');
		});
	}, []);
	return /* html */ `
  <div class='flex-1 bg-white'>
    <div class="h-screen overflow-y-scroll">
      <div class='flex overflow-x-auto justify-end'>
        <section class='w-full relative slider-item duration-1000 transition-all'>
          <div class="slider-main" style='transition: transform 0.25s linear;'>
            <div class="select-none">
              <div class='grid grid-cols-2 gap-x-10'>
                <div></div>
                <img src="/public/assets/images/zalo1-removebg.png"
                  alt=""
                  class='w-full h-screen object-cover'
                />
              </div>
              <section class='absolute inset-0 bg-black opacity-70 text-white'></section>
              <section class='absolute text-white inset-0 z-10 p-[4%] grid grid-cols-2'>
                <div class='flex justify-center flex-col'>
                  <h2 class='text-4xl lg:text-6xl whitespace-nowrap lg:whitespace-normal'>
                    <p class='sm:inline-block lg:block'>Hi!</p>
                    <p class='sm:inline-block lg:block'>I'm
                      <span class='text-load text-blue-500 capitalize relative test'>tien hung</span>
                    </p>
                  </h2>
                  <span class='onscrool-text text-sm mt-4 whitespace-normal transition-all duration-1000 -translate-x-[150%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur illum praesentium porro?</span>
                  <button class="download-cv onscrool-text duration-700 -translate-x-[150%] rounded-sm uppercase mt-12 max-w-[180px] border border-white p-2 flex justify-center items-center gap-x-2 bg-white text-black lg:opacity-30 hover:opacity-100 transition">
                    <span>download cv</span>
                    <img
                      src="./assets/images/download.gif"
                      alt=""
                      class="h-6 w-6 object-cover"
                    />
                  </button>
                  </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>`;
};

export default HomeLayout;
