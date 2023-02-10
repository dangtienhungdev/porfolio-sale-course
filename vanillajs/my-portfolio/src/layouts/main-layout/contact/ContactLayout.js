import { useEffect } from '../../../config/config';

const ContactLayout = () => {
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
    <div class="h-screen overflow-y-scroll">
      <div class='flex overflow-x-auto justify-end'>
        <section class='px-[4%] py-20 min-h-screen'>
          <h4 class="uppercase text-sm text-gray-400 onscrool-text transition-all duration-1000 -translate-x-[150%]">GET IN TOUCH</h4>
          <h2 class='uppercase text-3xl font-medium mt-8 leading-10 onscrool-text transition-all duration-1000 -translate-x-[150%]'>CONTACT</h2>
          <p class='mt-10 onscrool-text transition-all duration-1000 -translate-x-[150%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptate rerum aperiam officiis delectus, animi optio qui dolorum hic eligendi nulla adipisci! Nulla possimus cumque quisquam porro facilis inventore sunt.</p>
          <section class='grid grid-cols-2 gap-10 mt-10'>
            <section>
              <div
                class='flex justify-between items-center gap-x-4 bg-white mb-10 shadow-lg'
              >
                <div class='p-4 bg-lightMode'>
                  <img src="/public/assets/images/mail-unscreen.gif" alt="" class='h-8 w-8 object-cover'/>
                </div>
                <p class='flex-1'>
                  <a href="mailto:hungdang02042003@gmail.com">hungdang02042003@gmail.com</a>
                </p>
              </div>

              <div
                class='flex justify-between items-center gap-x-4 bg-white mb-10 shadow-lg'
              >
                <div class='p-4 bg-lightMode'>
                  <img src="/public/assets/images/way-unscreen.gif" alt="" class='h-8 w-8 object-cover'/>
                </div>
                <p class='flex-1 capitalize'>dị sử - mỹ thành - mỹ lộc - nam định</p>
              </div>

              <div
                class='flex justify-between items-center gap-x-4 bg-white mb-10 shadow-lg'
              >
                <div class='p-4 bg-lightMode'>
                  <img src="/public/assets/images/telephone-unscreen.gif" alt="" class='h-8 w-8 object-cover'/>
                </div>
                <p class='flex-1'>
                  <a href="tel:0946937769" class='inline-block h-full w-full'>0946937769</a>
                </p>
              </div>

              <div
                class='flex justify-between items-center gap-x-4 bg-white mb-10 shadow-lg'
              >
                <div class='p-4 bg-lightMode'>
                  <img src="/public/assets/images/facebook-removebg-preview.png" alt="" class='h-8 w-8 object-cover'/>
                </div>
                <p class='flex-1'>https://www.facebook.com/danghung23624</p>
              </div>
            </section>
            <section>
              <form autocomplete="off">
                <div class='mb-10'>
                  <input type="name" name="name" placeholder='Name' class='ct-input'/>
                  <span class="text-red-500 text-sm"></span>
                </div>
                <div class='mb-10'>
                  <input type="email" name="email" id="email" placeholder='Email' class='ct-input'/>
                  <span class="text-red-500 text-sm"></span>
                </div>
                <div class='mb-10'>
                  <input type="text" name="subject" id="subject" placeholder='Subject'class='ct-input'/>
                  <span class="text-red-500 text-sm"></span>
                </div>
                <div class='mb-10'>
                  <textarea name="message" id="message" placeholder='Message' rows='5' class='ct-input'></textarea>
                  <span class="text-red-500 text-sm"></span>
                </div>
                <button class='capitalize py-2 px-8 bg-blue-500 text-white rounded-sm'>send message</button>
              </form>
            </section>
          </section>
          </section>
      </div>
    </div>
  </div>`;
};

export default ContactLayout;
