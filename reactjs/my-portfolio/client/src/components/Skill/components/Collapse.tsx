import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { items } from './Items';

const CollapseComponent = () => {
	return (
		<div className="mt-20">
			<Collapse
				items={items}
				bordered={false}
				defaultActiveKey={['1', '2']}
				expandIcon={({ isActive }) => (
					<CaretRightOutlined rotate={isActive ? 90 : 0} />
				)}
			/>
		</div>
	);
};

export default CollapseComponent;
