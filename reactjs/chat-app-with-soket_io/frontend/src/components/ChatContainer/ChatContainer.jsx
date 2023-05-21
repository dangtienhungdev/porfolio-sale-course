import React, { useEffect, useRef, useState } from 'react';
import { createMessage, getAllMessages } from '../../utils/message';

import ChatInput from '../ChatInput/ChatInput';
import Logout from '../Logout/Logout';
import Messages from '../Message/Messages';
import { styled } from 'styled-components';
import { toast } from 'react-toastify';

const ChartContainer = ({ currenChat, currentUser, socket }) => {
	const [arrivalMassage, setArrivalMassage] = useState(null);
	const [messages, setMessages] = useState([]);
	const srcollRef = useRef();
	const handleSendMessage = async (msg) => {
		try {
			await createMessage({
				from: currentUser._id,
				to: currenChat._id,
				message: msg,
			});
			socket.current.emit('send-message', {
				from: currentUser._id,
				to: currenChat._id,
				message: msg,
			});
			const msgs = [...messages];
			msgs.push({ fromSelf: true, message: msg });
			setMessages(msgs);
		} catch (error) {
			toast.error('Send message failed');
		}
	};
	useEffect(() => {
		if (socket.current) {
			socket.current.on('msg-receive', (msg) => {
				setArrivalMassage({
					fromSelf: false,
					message: msg.message,
				});
			});
		}
	}, [socket]);
	useEffect(() => {
		srcollRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	useEffect(() => {
		arrivalMassage && setMessages((prev) => [...prev, arrivalMassage]);
	}, [arrivalMassage]);
	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const response = await getAllMessages({
					from: currentUser._id,
					to: currenChat._id,
				});
				if (response.status === 200) {
					setMessages(response.data.messages);
				}
			} catch (error) {
				toast.error('Get messages failed');
			}
		};
		fetchMessages();
	}, [currentUser._id, currenChat._id]);
	return (
		<Container>
			<div className="chat-header">
				<div className="user-details">
					<div className="avatar">
						<img src={currenChat.avatarImage} alt="avatar" />
					</div>
					<div className="username">
						<h3>{currenChat.username}</h3>
					</div>
				</div>
				<Logout />
			</div>
			<Messages messages={messages} />
			<ChatInput handleSendMessage={handleSendMessage} />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	overflow: auto;
	.chat-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		background-color: #1e1e30;
		.user-details {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 16px;
			.avatar {
				width: 40px;
				height: 40px;
				border-radius: 100%;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 100rem;
				}
			}
			.username {
				h3 {
					color: #fff;
					font-weight: 600;
					font-size: 24px;
				}
			}
		}
	}
`;

export default ChartContainer;
