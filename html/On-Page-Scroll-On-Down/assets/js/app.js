const reveal = () => {
	const reveals = document.querySelectorAll('.reveal');
	for (let i = 0; i < reveals.length; i++) {
		let windowHeight = window.innerHeight;
		console.log('🚀 ~ file: app.js:5 ~ reveal ~ windowHeight', windowHeight);
		let revealTop = reveals[i].getBoundingClientRect().top;
		console.log('🚀 ~ file: app.js:7 ~ reveal ~ revealTop', revealTop);
		let revealPoint = 150;
		if (revealTop < windowHeight - revealPoint) {
			reveals[i].classList.add('active');
		} else {
			reveals[i].classList.remove('active');
		}
	}
};

window.addEventListener('scroll', reveal);
