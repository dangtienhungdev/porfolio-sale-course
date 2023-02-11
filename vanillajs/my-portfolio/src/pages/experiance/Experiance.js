import { Aside, ExperianceLayout } from '../../layouts';

const Experiance = () => {
	return /* html */ `
  <div class='flex justify-between bg-lightMode'>
    ${Aside()}
    ${ExperianceLayout()}
  </div>`;
};

export default Experiance;
