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
import { Dashboard, LoginPage, SignupPage } from './pages/admin';
import { render, router } from './config/config';

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));
router.on('/education', () => render(EducationPage, app));
router.on('/skills', () => render(SkillPage, app));
router.on('/contact', () => render(Contact, app));
router.on('/experience', () => render(Experiance, app));
/* admin */
router.on('/admin/login', () => render(LoginPage, app));
router.on('/admin/dashboard', () => render(Dashboard, app));
router.on('/admin/sign-up', () => render(SignupPage, app));

router.notFound(() => render(NotFound, app));
router.resolve();
