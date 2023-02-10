import './style.scss';

import { AboutPage, HomePage, NotFound } from './pages';
import { render, router } from './config/config';

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));

router.notFound(() => render(NotFound, app));
router.resolve();
