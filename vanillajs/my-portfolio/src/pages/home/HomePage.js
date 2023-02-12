import { Aside, HomeLayout } from '../../layouts';

const HomePage = () => {
	return /* html */ `
  <div class='flex justify-between bg-lightMode'>
    ${Aside()}
    ${HomeLayout()}
  </div>`;
};

export default HomePage;
