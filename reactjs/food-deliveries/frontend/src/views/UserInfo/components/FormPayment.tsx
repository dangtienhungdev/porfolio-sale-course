import {
	Button,
	Col,
	DatePicker,
	DatePickerProps,
	Form,
	Input,
	Radio,
	RadioChangeEvent,
	Row,
	message,
} from 'antd';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useEffect, useState } from 'react';

import { RootState } from '../../../redux/store';
import { createPayment } from '../../../API/payment';
import { updateUser } from '../../../redux/actions/userAction';

interface PropTypes {
	handleAddPayment: () => void;
}

const FormPayment = ({ handleAddPayment }: PropTypes) => {
	const [form] = Form.useForm();
	const dispatch = useAppDispatch();
	const [checked, setChecked] = useState('active');
	const [date, setDate] = useState<any>('');
	const cardBanking = /^\d{9,18}$/;
	const { currentUser }: any = useAppSelector((state: RootState) => state.auth.login);
	const userId = currentUser.user._id;
	const accessToken = currentUser.accessToken;
	/* handleChecked */
	const onChangeChecked = (e: RadioChangeEvent) => {
		setChecked(e.target.value);
	};
	useEffect(() => {
		form.setFieldsValue({ userId });
		return () => {
			form.resetFields();
		};
	}, [form, userId]);
	const onChange: DatePickerProps['onChange'] = (_, dateString) => {
		setDate(dateString);
	};
	const onFinish = async (values: any) => {
		try {
			const payment = {
				...values,
				is_active: checked === 'active' ? true : false,
				cardExpiry: date,
			};
			const data = await createPayment(accessToken, payment);
			if (data) {
				const newCurrent = { ...currentUser.user, paymentMethodId: data.data.payment._id };
				await updateUser(newCurrent, dispatch);
				message.success('Thêm phương thức thanh toán thành công');
				form.resetFields();
				handleAddPayment();
			}
		} catch (error) {
			message.error('Thêm phương thức thanh toán thất bại');
		}
	};
	if (!currentUser) return null;
	return (
		<Form layout="vertical" autoComplete="off" form={form} onFinish={onFinish}>
			<Row gutter={[32, 16]}>
				<Col span={12} style={{ display: 'none' }}>
					<Form.Item name={'userId'} label="Tên người dùng" rules={[{ required: true }]}>
						<Input placeholder={'Họ và tên'} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name={'cardNumber'}
						label="Card number"
						rules={[
							{ required: true, message: 'Không được bỏ trống' },
							{ pattern: cardBanking, message: 'Số thẻ không hợp lệ' },
							// { pattern: cardNumberRegex, message: 'Số thẻ không hợp lệ' },
						]}
					>
						<Input placeholder={'card number'} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name={'cardName'}
						label="Card name"
						rules={[{ required: true, message: 'Không được bỏ trống' }]}
					>
						<Input placeholder={'card name'} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						name={'cardExpiry'}
						label="Card expiry"
						rules={[{ required: true, message: 'Không được bỏ trống' }]}
					>
						<DatePicker onChange={onChange} style={{ width: '100%' }} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="Active">
						<Radio.Group value={checked} name="is_active" onChange={onChangeChecked}>
							<Radio value={'active'}>Active</Radio>
							<Radio value={'inactive'}>InActive</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item>
						<Button style={{ width: '100%' }} type="primary" htmlType="submit">
							Thêm phương thức thanh toán
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	);
};

export default FormPayment;
