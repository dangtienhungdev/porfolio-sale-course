import { HeadingMeta, HeadingTitle } from '../../modules';

import LayoutContainer from '../../layouts/client/LayoutContainer';
import LayoutWrapper from '../../layouts/client/LayoutWrapper';

const Contact = () => {
	return (
		<LayoutContainer>
			<LayoutWrapper name="contact">
				<HeadingMeta heading="GET IN TOUCH" />
				<HeadingTitle heading="CONTACT" />
			</LayoutWrapper>
		</LayoutContainer>
	);
};

export default Contact;
