import './style.scss';

import {
	AboutPage,
	Contact,
	EducationPage,
	Experiance,
	HomePage,
	NotFound,
	SkillPage,
} from './pages';
import { render, router } from './config/config';

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));
router.on('/education', () => render(EducationPage, app));
router.on('/skills', () => render(SkillPage, app));
router.on('/contact', () => render(Contact, app));
router.on('/experience', () => render(Experiance, app));

router.notFound(() => render(NotFound, app));
router.resolve();
