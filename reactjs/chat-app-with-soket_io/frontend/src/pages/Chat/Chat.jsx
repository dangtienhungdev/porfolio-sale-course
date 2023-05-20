import { ChatContainer, Contact, Welcome } from '../../components';
import { useEffect, useState } from 'react';

import { getAllUsersById } from '../../utils/user';
import loader from '../../assets/loader.gif';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
	const navigate = useNavigate();
	const [contacts, setContacts] = useState([]);
	const [currentUser, setCurrentUser] = useState(undefined);
	const [currenChat, setCurrenChat] = useState(undefined);
	const handleChatChange = (chat) => {
		setCurrenChat(chat);
	};
	useEffect(() => {
		const user = localStorage.getItem('user-chat-app');
		if (user) {
			setCurrentUser(JSON.parse(user));
		} else {
			navigate('/login');
		}
	}, [navigate]);
	useEffect(() => {
		const fetchUser = async () => {
			if (!currentUser) return;
			try {
				if (currentUser && currentUser.isAvatarImageSet) {
					const { data } = await getAllUsersById(currentUser._id);
					if (data) {
						setContacts(data.users);
					}
				} else {
					navigate('/set-avatar');
				}
			} catch (error) {
				toast.error('Get user failed');
			}
		};
		fetchUser();
	}, [currentUser, navigate]);
	if (!currentUser)
		return (
			<Container>
				<img src={loader} alt="loader" />
			</Container>
		);
	return (
		<Container>
			<div className="container">
				<Contact contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
				{currenChat ? (
					<ChatContainer currenChat={currenChat} />
				) : (
					<Welcome currentUser={currentUser} />
				)}
			</div>
		</Container>
	);
};

const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #131324;
	gap: 16px;
	.container {
		height: 90vh;
		width: 90vw;
		background-color: #00000076;
		display: grid;
		grid-template-columns: 25% 75%;
		@media screen and (min-width: 768px) and (max-width: 1024px) {
			grid-template-columns: 35% 65%;
		}
	}
`;

export default Chat;
