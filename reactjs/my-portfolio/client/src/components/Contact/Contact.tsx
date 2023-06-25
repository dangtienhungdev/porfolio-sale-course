import { Description, HeadingMeta, HeadingTitle } from '../../modules';

import EmailContact from './components/Email/EmailContact';
import LayoutContainer from '../../layouts/client/LayoutContainer';
import LayoutWrapper from '../../layouts/client/LayoutWrapper';
import Social from './components/Social/Social';

const Contact = () => {
	return (
		<LayoutContainer>
			<LayoutWrapper name="contact">
				<HeadingMeta heading="GET IN TOUCH" />
				<HeadingTitle heading="CONTACT" />
				<Description>
					<p className="text-base transition-all duration-1000">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
						sapiente placeat. In asperiores beatae amet sint eius cupiditate,
						alias corrupti repellat repellendus ipsum maiores, ex perferendis,
						maxime eaque sequi nemo?
					</p>
				</Description>
				<div className="sm:grid-cols-1 md:grid-cols-2 grid mt-20">
					<Social />
					<EmailContact />
				</div>
			</LayoutWrapper>
		</LayoutContainer>
	);
};

export default Contact;
