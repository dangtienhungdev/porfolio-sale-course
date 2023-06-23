import { Description, HeadingMeta, HeadingTitle } from '../../modules';

import Infomation from './components/Infomation';
import LayoutContainer from '../../layouts/client/LayoutContainer';
import LayoutWrapper from '../../layouts/client/LayoutWrapper';

const AboutUs = () => {
	return (
		<LayoutContainer>
			<LayoutWrapper name="about">
				<HeadingMeta heading="About us" />
				<HeadingTitle heading="WHO AM I?" />
				<Description>
					<p className="text-base transition-all duration-1000">
						<span className="mr-2 font-semibold capitalize">
							Đặng Tiến Hưng
						</span>
						<span className="mt-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							laboriosam voluptate vel praesentium expedita eum reiciendis illo
							sapiente quos exercitationem adipisci consequuntur dignissimos,
							placeat alias cumque repellat, cupiditate iste sequi?
						</span>
					</p>
				</Description>
				<Infomation />
			</LayoutWrapper>
		</LayoutContainer>
	);
};

export default AboutUs;
