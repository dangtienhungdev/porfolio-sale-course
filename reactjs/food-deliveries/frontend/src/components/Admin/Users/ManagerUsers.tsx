import { deleteUser, getAllUser, searchUser, updateUser } from '../../../API/auth';
import { useEffect, useState } from 'react';

import ColumnsTypeUsers from './data/Columns';
import { IUserInfoManager } from '../../../interfaces/users.type';
import LayoutModule from '../../../modules/LayoutModule';
import ModalUser from './components/ModalUser';
import { RootState } from '../../../redux/store';
import { message } from 'antd';
import { useAppSelector } from '../../../redux/hooks';

const ManagerUsers = () => {
	/* useState, redux */
	const { currentUser }: any = useAppSelector((state: RootState) => state.auth.login);
	const [search, setSearch] = useState<string>('');
	const [users, setUsers] = useState<IUserInfoManager[]>([]);
	const [openModal, setOpenModal] = useState({
		isOpenModalAdd: false,
		isOpenModalEdit: false,
		isOpenModalView: false,
	});
	/* delete User */
	const confirm = async (id: string) => {
		try {
			if (!currentUser) return null;
			const response: any = await deleteUser(currentUser?.accessToken, id);
			if (response.status === 200) {
				message.success('Xóa người dùng thành công');
				setUsers(users.filter((user) => user._id !== id));
			}
		} catch (error) {
			message.error('Không thể xóa người dùng này');
		}
	};
	const handleChange = async (value: { value: any; userInfo: IUserInfoManager }) => {
		try {
			if (!currentUser) return null;
			const { value: status } = value.value;
			const { userInfo } = value;
			const newData = { ...userInfo, is_active: status === 'active' ? true : false };
			const response: any = await updateUser(currentUser?.accessToken, newData);
			if (response.status === 200) {
				message.success('Thay đổi trạng thái người dùng thành công');
				setUsers(
					users.map((user) => {
						if (user._id === newData._id) {
							return { ...user, is_active: newData.is_active };
						}
						return user;
					})
				);
			}
		} catch (error) {
			message.error('Không thể thay đổi trạng thái người dùng này');
		}
	};
	const columns = ColumnsTypeUsers({ confirm, handleChange });
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = search ? await searchUser(search) : await getAllUser();
				if (response) {
					setUsers(
						search
							? response.users.docs.map((user: IUserInfoManager) => ({ ...user, key: user._id }))
							: response.users.map((user: IUserInfoManager) => ({ ...user, key: user._id }))
					);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchUsers();
	}, [search]);
	if (!currentUser) return null;
	return (
		<>
			<LayoutModule
				heading="người dùng"
				columns={columns}
				dataSource={users}
				setSearch={setSearch}
				setOpenModal={setOpenModal}
				scroll={{ x: 1500 }}
				pageSize={10}
			/>
			<ModalUser openModal={openModal} setOpenModal={setOpenModal} />
		</>
	);
};

export default ManagerUsers;
