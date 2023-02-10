import { AboutLayout, Aside } from '../../layouts';

const AboutPage = () => {
	return /* html */ `
  <div class='flex justify-between bg-lightMode'>
    ${Aside()}
    ${AboutLayout()}
  </div>`;
};

export default AboutPage;
