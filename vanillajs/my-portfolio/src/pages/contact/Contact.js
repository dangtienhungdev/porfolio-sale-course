import { Aside, ContactLayout } from '../../layouts';

const Contact = () => {
	return /* html */ `
  <div class='flex justify-between bg-lightMode'>
    ${Aside()}
    ${ContactLayout()}
  </div>`;
};

export default Contact;
