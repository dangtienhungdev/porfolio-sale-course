import { Description, HeadingMeta, HeadingTitle } from '../../modules';

import LayoutContainer from '../../layouts/client/LayoutContainer';
import LayoutWrapper from '../../layouts/client/LayoutWrapper';
import { Projects } from './components';

const Experience = () => {
	return (
		<LayoutContainer>
			<LayoutWrapper name="experience">
				<HeadingMeta heading="EXPERIENCE" />
				<HeadingTitle heading="WORK EXPERIENCE" />
				<Description>
					<p className="text-base transition-all duration-1000">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eum
						qui exercitationem velit dolorum tenetur deserunt aperiam similique
						nostrum quos! Nostrum ipsa quidem eos non voluptates. Optio rerum
						possimus animi?
					</p>
				</Description>
				<div className="mt-20">
					<Projects />
				</div>
			</LayoutWrapper>
		</LayoutContainer>
	);
};

export default Experience;
