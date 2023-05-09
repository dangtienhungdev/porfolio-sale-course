import { useState } from 'react';

export interface IUseToggleModal {
	isOpenModalAdd: boolean;
	isOpenModalEdit: boolean;
	isOpenModalView: boolean;
}

export const useToggleModal = (
	initialValue = { isOpenModalAdd: false, isOpenModalEdit: false, isOpenModalView: false }
) => {
	const [openModal, setOpenModal] = useState(initialValue);
	const handleToggleModal = (modalName: keyof IUseToggleModal) => {
		setOpenModal({ ...openModal, [modalName]: !openModal[modalName] });
	};
	return { openModal, handleToggleModal };
};
