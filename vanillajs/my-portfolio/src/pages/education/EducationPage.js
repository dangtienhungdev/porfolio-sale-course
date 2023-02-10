import { Aside, EducationLayout } from '../../layouts';

const EducationPage = () => {
	return /* html */ `
  <div class='flex justify-between bg-lightMode'>
    ${Aside()}
    ${EducationLayout()}
  </div>`;
};

export default EducationPage;
