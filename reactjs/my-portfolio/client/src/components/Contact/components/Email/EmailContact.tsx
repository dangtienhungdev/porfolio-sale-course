import { Form, Input } from 'antd';

const EmailContact = () => {
	return (
		<div>
			<Form layout="vertical">
				<Form.Item name="Name" rules={[{ required: true }]}>
					<Input placeholder="Name" />
				</Form.Item>
				<Form.Item name="Email" rules={[{ required: true }]}>
					<Input placeholder="Email" />
				</Form.Item>
				<Form.Item name="Subject" rules={[{ required: true }]}>
					<Input placeholder="Subject" />
				</Form.Item>
				<Form.Item
					name="message"
					rules={[{ required: true, message: 'Please input message' }]}
				>
					<Input.TextArea placeholder="Message" />
				</Form.Item>
			</Form>
		</div>
	);
};

export default EmailContact;
