import FormUser from './FormUser';
import { LayoutModal } from '../../../../modules';

interface IProps {
	openModal: {
		isOpenModalAdd: boolean;
		isOpenModalEdit: boolean;
		isOpenModalView: boolean;
	};
	setOpenModal: React.Dispatch<
		React.SetStateAction<{
			isOpenModalAdd: boolean;
			isOpenModalEdit: boolean;
			isOpenModalView: boolean;
		}>
	>;
}

const ModalUser = ({ openModal, setOpenModal }: IProps) => {
	const onCancel = () => {
		setOpenModal({ isOpenModalAdd: false, isOpenModalEdit: false, isOpenModalView: false });
	};
	return (
		<LayoutModal
			open={openModal}
			onCancel={onCancel}
			title={openModal.isOpenModalAdd ? 'Thêm mới người dùng' : 'Xem nggười dùng'}
		>
			<FormUser onCancel={onCancel} />
		</LayoutModal>
	);
};

export default ModalUser;
