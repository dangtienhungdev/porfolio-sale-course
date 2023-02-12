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
		const links = document.querySelectorAll('ul.text-center li');
		for (let i = 0; i < links.length; i++) {
			links[i].addEventListener('click', (e) => {
				console.log('🚀 ~ file: Aside.js:36 ~ useEffect ~ links[i]', links[i]);
				e.preventDefault();
				let j = 0;
				while (j < links.length) {
					links[j++].className = 'active';
				}
				links[i].className = 'active';
			});
		}
	}, []);
	useEffect(() => {
		const OpenModal = document.querySelector('.btn-modal');
		const ModalOverlay = document.querySelector('.modal-overlay');
		const CloseModal = document.querySelector('.btn-close');
		OpenModal.addEventListener('click', () => {
			OpenModal.classList.toggle('active');
		});
		CloseModal.addEventListener('click', () => {
			OpenModal.classList.toggle('active');
		});
		ModalOverlay.addEventListener('click', () => {
			OpenModal.classList.remove('active');
		});
	}, []);
	return /* html */ `
	<div class='w-full max-w-[300px] hidden lg:block'>
		<div class='w-full px-4 bg-lightMode min-h-screen'>
			<div class='overflow-y-auto h-screen -mr-4 pr-4'>
				<section class='flex flex-col items-center justify-around h-[284px] mt-4'>
					<img
						src="/public/assets/images/my.jpg"
						alt=""
						class='h-40 w-40 object-cover rounded-full'/>
					<div class='text-center capitalize'>
						<h2 class='text-black capitalize text-2xl'>Đặng tiến hưng</h2>
						<h4 class='text-blue-400 italic text-sm mt-2'>Front end developer</h4>
					</div>
				</section>
				<nav class='mt-4'>
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
		</div>
	</div>
	<div class="btn-modal !z-[1000] fixed bg-white top-4 right-4 rounded-sm hover:bg-gray-800 hover:opacity-50 xl:hidden">
		<div class='p-2 bg-gray-200'>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</div>
	</div>
	<div class="modal-overlay hidden bg-black z-50 inset-0 fixed opacity-40 transition-all duration-500 animate-aside-load"></div>
	<div class="modal-active hidden fixed top-0 right-0 bottom-0 z-50 bg-white w-full max-w-xs p-[4%] transition-all duration-700 animate-aside-load">
		<div class='btn-close absolute top-2 right-2 rounded-sm'>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</div>
		<section class='flex flex-col items-center justify-around h-[284px] mt-4'>
			<img
				src="/public/assets/images/my.jpg"
				alt=""
				class='h-40 w-40 object-cover rounded-full'/>
			<div class='text-center capitalize'>
				<h2 class='text-black capitalize text-2xl'>Đặng tiến hưng</h2>
				<h4 class='text-blue-400 italic text-sm mt-2'>Front end developer</h4>
			</div>
		</section>
		<nav class='mt-4'>
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
	`;
};

export default Aside;
