import { useEffect } from '../../../config/config';

const SkillLayout = () => {
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
	}, []);
	return /* html */ `
  <div class='flex-1 bg-white'>
    <div class="h-screen xl:overflow-y-scroll">
      <div class='flex overflow-x-auto justify-end'>
        <section class='px-[4%] py-20 min-h-screen'>
          <h4 class="uppercase text-sm text-gray-400 onscrool-text transition-all duration-1000 -translate-x-[150%]">MY SPECIALTY</h4>
          <h2 class='uppercase text-3xl font-medium mt-8 leading-10 onscrool-text transition-all duration-1000 -translate-x-[150%]'>MY SKILLS</h2>
          <p class='mt-10 onscrool-text transition-all duration-1000 -translate-x-[150%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptate rerum aperiam officiis delectus, animi optio qui dolorum hic eligendi nulla adipisci! Nulla possimus cumque quisquam porro facilis inventore sunt.</p>
        </section>
      </div>
    </div>
  </div>`;
};

export default SkillLayout;
