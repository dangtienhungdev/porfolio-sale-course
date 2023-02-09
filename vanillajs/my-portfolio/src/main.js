import './style.scss';

import { HomePage, NotFound } from './pages';
import { render, router } from './config/config';

const app = document.querySelector('#app');

router.on('/', () => render(HomePage, app));

router.notFound(() => render(NotFound, app));
router.resolve();
