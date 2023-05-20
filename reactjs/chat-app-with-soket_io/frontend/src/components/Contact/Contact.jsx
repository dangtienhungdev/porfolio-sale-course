import React, { useEffect, useState } from 'react';

import loader from '../../assets/loader.gif';
import logo from '../../assets/Logo/heart-logo.png';
import { styled } from 'styled-components';

const Contact = ({ contacts, currentUser, changeChat }) => {
	const [currenUserName, setCurrenUserName] = useState(undefined);
	const [currentUserImage, setCurrentUserImage] = useState(undefined);
	const [currentUserSelected, setCurrentUserSelected] = useState(undefined);
	useEffect(() => {
		if (!currentUser) return;
		setCurrenUserName(currentUser.username);
		setCurrentUserImage(currentUser.avatarImage);
	}, [currentUser]);
	const handleSelectUser = (index, contact) => {
		setCurrentUserSelected(index);
		changeChat(contact);
	};
	if (!currentUser)
		return (
			<Container>
				<img src={loader} alt="loader" />
			</Container>
		);
	return (
		<Container>
			<div className="brand">
				<img src={logo} alt="Logo" />
				<h3>Chat App</h3>
			</div>
			<div className="contacts">
				{contacts &&
					contacts.length > 0 &&
					contacts.map((contact, index) => (
						<div
							className={`contact ${currentUserSelected === index ? 'selected' : ''}`}
							key={contact._id}
							onClick={() => handleSelectUser(index, contact)}
						>
							<div className="avatar">
								<img src={contact.avatarImage} alt="avatar" />
							</div>
							<div className="username">
								<h3>{contact.username}</h3>
							</div>
						</div>
					))}
			</div>
			<div className="current-user">
				<div className="avatar">
					<img src={currentUser.avatarImage} alt="avatar" />
				</div>
				<div className="username">
					<h3>{currentUser.username}</h3>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: 10% 75% 15%;
	overflow: hidden;
	background-color: #080420;
	.brand {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 16px;
		img {
			width: 50px;
		}
		h3 {
			color: #fff;
			font-size: 24px;
			font-weight: 600;
			text-transform: uppercase;
		}
	}
	.contacts {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: auto;
		padding: 4px;
		gap: 12.8px;
		&::-webkit-scrollbar {
			width: 3.2px;
			&-thumb {
				background-color: #ffffff39;
				border-radius: 100px;
			}
		}
		transition: all 0.5s ease-in-out;
		.contact {
			background-color: #ffffff39;
			padding: 6.4px;
			width: 100%;
			height: 64px;
			border-radius: 12px;
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 16px;
			transition: all 0.5s ease-in-out;
			.avatar {
				img {
					width: 48px;
					height: 48px;
					object-fit: cover;
					border-radius: 100%;
				}
			}
			.username {
				h3 {
					font-size: 18px;
					font-weight: 600;
					color: #fff;
				}
			}
		}
		.selected {
			background-color: #9186f3;
		}
	}
	.current-user {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #0d0d30;
		gap: 32px;
		.avatar {
			img {
				width: 64px;
				height: 64px;
				object-fit: cover;
				border-radius: 100%;
			}
		}
		.username {
			h3 {
				font-size: 24px;
				font-weight: 600;
				color: #fff;
			}
		}
		@media screen and (min-width: 720px) and (max-width: 1024px) {
			gap: 16px;
			.username {
				h3 {
					font-size: 18px;
				}
			}
		}
	}
`;

export default Contact;
