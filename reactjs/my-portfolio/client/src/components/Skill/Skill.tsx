import { Description, HeadingMeta, HeadingTitle } from '../../modules';

import CollapseComponent from './components/Collapse';
import LayoutContainer from '../../layouts/client/LayoutContainer';
import LayoutWrapper from '../../layouts/client/LayoutWrapper';

const MySkill = () => {
	return (
		<LayoutContainer>
			<LayoutWrapper name="skills">
				<HeadingMeta heading="MY SPECIALTY" />
				<HeadingTitle heading="MY SKILLS" />
				<Description>
					<p className="text-base transition-all duration-1000">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
						porro, temporibus tempore saepe dolore autem, asperiores hic quaerat
						numquam explicabo officia deserunt. Nulla quibusdam optio eligendi
						at excepturi? Fugiat, accusamus?
					</p>
				</Description>
				<CollapseComponent />
			</LayoutWrapper>
		</LayoutContainer>
	);
};

export default MySkill;
