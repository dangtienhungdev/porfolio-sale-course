import { useEffect } from '../../../config/config';

const EducationLayout = () => {
	useEffect(() => {
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

		// toggle educate
		const abc = document.querySelectorAll('.ac-header');
		const abcd = document.querySelectorAll('.ac-panel');
		abc.forEach((item, index) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				abcd[index].classList.toggle('hidden');
				item.classList.toggle('!bg-blue-500');
				item.classList.toggle('!text-white');
				if (!abcd[index].classList.contains('hidden')) {
					abcd[index].classList.remove('-translate-y-10');
				}
			});
		});
	}, []);
	return /* html */ `
    <div class='flex-1 bg-white'>
      <div class="h-screen xl:overflow-y-scroll">
        <div class='flex overflow-x-auto justify-end'>
          <section class='px-[4%] py-20 min-h-screen'>
            <h4 class="uppercase text-sm text-gray-400 onscrool-text transition-all duration-1000 -translate-x-[150%]">Education</h4>
            <h2 class='uppercase text-3xl font-medium mt-8 leading-10 onscrool-text transition-all duration-1000 -translate-x-[150%]'>MY EDUCATION</h2>
            <p class='mt-10 onscrool-text transition-all duration-1000 -translate-x-[150%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptate rerum aperiam officiis delectus, animi optio qui dolorum hic eligendi nulla adipisci! Nulla possimus cumque quisquam porro facilis inventore sunt.</p>
            <div class="mt-10 transition-all duration-500">
              <div class="onscrool-text transition-all duration-1000 -translate-x-[150%] bg-white p-1 rounded-sm">
                <h2 class='ac-header text-base font-medium p-3 bg-gray-200 transition-all duration-300 rounded-sm cursor-pointer flex justify-between items-center'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <img src="/public/assets/images/exam-unscreen.gif" alt="" class='h-6 w-6 object-cover'/>
                </h2>
                <div class="ac-panel hidden transition-all duration-1000 mt-1 -translate-y-10">
                  <p class="border p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum amet magnam aliquid eaque excepturi illum, ipsum impedit illo assumenda minima corrupti vitae, quaerat doloribus! Quaerat numquam exercitationem iste temporibus optio?</p>
                </div>
              </div>
              <div class="onscrool-text transition-all duration-700 -translate-x-[150%] bg-white p-1 rounded-sm">
                <h2 class='ac-header text-base font-medium p-3 bg-gray-200 transition-all duration-300 rounded-sm cursor-pointer flex justify-between items-center'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <img src="/public/assets/images/exam-unscreen.gif" alt="" class='h-6 w-6 object-cover'/>
                </h2>
                <div class="ac-panel hidden transition-all duration-1000 mt-1 -translate-y-10">
                  <p class="border p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum amet magnam aliquid eaque excepturi illum, ipsum impedit illo assumenda minima corrupti vitae, quaerat doloribus! Quaerat numquam exercitationem iste temporibus optio?</p>
                </div>
              </div>
              <div class="onscrool-text transition-all duration-500 -translate-x-[150%] bg-white p-1 rounded-sm">
                <h2 class='ac-header text-base font-medium p-3 bg-gray-200 transition-all duration-300 rounded-sm cursor-pointer flex justify-between items-center'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <img src="/public/assets/images/exam-unscreen.gif" alt="" class='h-6 w-6 object-cover'/>
                </h2>
                <div class="ac-panel hidden transition-all duration-1000 mt-1 -translate-y-10">
                  <p class="border p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum amet magnam aliquid eaque excepturi illum, ipsum impedit illo assumenda minima corrupti vitae, quaerat doloribus! Quaerat numquam exercitationem iste temporibus optio?</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>`;
};

export default EducationLayout;
