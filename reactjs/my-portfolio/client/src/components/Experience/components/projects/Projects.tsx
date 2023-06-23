import { Tabs, TabsProps } from 'antd';

import ProjectItem from './ProjectItem';

const Projects = () => {
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: `Tab 1`,
			children: <ProjectItem />,
		},
		{
			key: '2',
			label: `Tab 2`,
			children: <ProjectItem />,
		},
		{
			key: '3',
			label: `Tab 3`,
			children: <ProjectItem />,
		},
	];
	const onChange = (key: string) => {
		console.log(key);
	};
	return (
		<section className="">
			<section className="">
				<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
			</section>
		</section>
	);
};

export default Projects;
