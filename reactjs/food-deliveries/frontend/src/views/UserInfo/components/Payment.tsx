import FormPayment from './FormPayment';
import { IUseToggleModal } from '../../../hooks/useToggleModal';
import { LayoutModal } from '../../../modules';

interface PropTypes {
	openModal: IUseToggleModal;
	handleToggleModal: (key: keyof IUseToggleModal) => void;
}

const Payment = ({ openModal, handleToggleModal }: PropTypes) => {
	const handleAddPayment = () => {
		handleToggleModal('isOpenModalAdd');
	};
	return (
		<LayoutModal title="Phương thức thanh toán" open={openModal} onCancel={handleAddPayment}>
			<FormPayment handleAddPayment={handleAddPayment} />
		</LayoutModal>
	);
};

export default Payment;
