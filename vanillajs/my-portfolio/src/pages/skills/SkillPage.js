import { Aside, SkillLayout } from '../../layouts';

const SkillPage = () => {
	return /* html */ `
  <div class='flex justify-between bg-lightMode'>
    ${Aside()}
    ${SkillLayout()}
  </div>`;
};

export default SkillPage;
