import FormCategory from './FormCategory';
import { ICategories } from '../../../../interfaces/categories.type';
import { LayoutModal } from '../../../../modules';

interface PropTypes {
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
	categoryEdit?: ICategories;
	setCategories: React.Dispatch<React.SetStateAction<ICategories[]>>;
}

const ModalCategory = ({ openModal, setOpenModal, categoryEdit, setCategories }: PropTypes) => {
	const handleCancelModal = () => {
		setOpenModal({ isOpenModalAdd: false, isOpenModalEdit: false, isOpenModalView: false });
	};
	return (
		<LayoutModal
			title={openModal.isOpenModalAdd ? 'Thêm danh mục món ăn' : 'Sửa danh mục món ăn'}
			open={openModal}
			onCancel={handleCancelModal}
		>
			<FormCategory
				onCancel={handleCancelModal}
				categoryEdit={categoryEdit}
				setCategories={setCategories}
			/>
		</LayoutModal>
	);
};

export default ModalCategory;
