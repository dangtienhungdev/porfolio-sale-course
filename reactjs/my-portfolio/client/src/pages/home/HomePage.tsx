import AboutUs from '../../components/AboutUs/AboutUs';
import Contact from '../../components/Contact/Contact';
import Experience from '../../components/Experience/Experience';
import Infomation from '../../components/Info/Infomation';
import { MySkill } from '../../components';

const HomePage = () => {
	return (
		<div>
			<Infomation />
			<AboutUs />
			<MySkill />
			<Experience />
			<Contact />
		</div>
	);
};

export default HomePage;
