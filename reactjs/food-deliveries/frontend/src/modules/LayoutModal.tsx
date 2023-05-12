import { IUseToggleModal } from '../hooks/useToggleModal';
import { Modal } from 'antd';

type LayoutModalProps = {
	title: string;
	open: IUseToggleModal;
	onCancel: () => void;
	children?: React.ReactNode;
};

const LayoutModal = ({ title, open, children, onCancel }: LayoutModalProps) => {
	return (
		<ModalComponent
			title={title}
			open={open.isOpenModalAdd || open.isOpenModalEdit || open.isOpenModalView}
			onCancel={onCancel}
		>
			{children}
		</ModalComponent>
	);
};

const ModalComponent = ({ title, children, onCancel, ...rest }: any) => {
	return (
		<Modal
			title={title}
			footer={null}
			style={{ top: 20 }}
			width={960}
			onCancel={onCancel}
			{...rest}
		>
			{children}
		</Modal>
	);
};

export default LayoutModal;
