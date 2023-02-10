import './style.scss';

import { useEffect } from '../../config/config';

const links = [
	{
		name: 'Home',
		to: '/',
	},
	{
		name: 'About',
		to: '/about',
	},
	{
		name: 'Education',
		to: '/education',
	},
	{
		name: 'skills',
		to: '/skills',
	},
	{
		name: 'EXPERIENCE',
		to: '/experience',
	},
	{
		name: 'Contact',
		to: '/contact',
	},
];

const Aside = () => {
	useEffect(() => {
		const links = document.querySelectorAll('.ct-header-link');
		links.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				if (click) {
					link.classList.toggle('bg-blue-400');
					link.classList.toggle('text-white');
				} else {
					link.classList.remove('bg-blue-400');
					link.classList.remove('text-white');
				}
			});
		});
	}, []);
	return /* html */ `<div class='w-full max-w-[300px] px-4 bg-lightMode min-h-screen hidden lg:block'>
    <div class='overflow-y-auto h-screen -mr-4 pr-4'>
      <section class='flex flex-col items-center justify-around h-[284px] mt-12'>
          <img
            src="/public/assets/images/my.jpg"
            alt=""
            class='h-40 w-40 object-cover rounded-full'/>
          <div class='text-center capitalize'>
            <h2 class='text-black capitalize text-2xl'>Đặng tiến hưng</h2>
            <h4 class='text-blue-400 italic text-sm mt-2'>Front end developer</h4>
          </div>
        </section>
        <nav class='mt-4 mb-10'>
          <ul class='text-center'>
            ${
							links &&
							links.length > 0 &&
							links
								.map(
									(link) => /* html */ `
                <li><a href="${link.to}" class='ct-header-link'>${link.name}</a></li>
            `
								)
								.join('')
						}
          </ul>
        </nav>
    </div>
  </div>`;
};

export default Aside;
