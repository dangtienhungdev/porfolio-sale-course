import React, { useEffect, useState } from 'react';

import loader from '../../assets/loader.gif';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { updateUser } from '../../utils/user';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 48px;
	background-color: #131324;
	height: 100vh;
	.title-container {
		h1 {
			text-align: center;
			color: #fff;
			font-size: 32px;
			font-weight: 600;
		}
	}
	.avatars {
		display: flex;
		gap: 24px;
		.avatar {
			transition: 0.5s ease-in-out all;
			padding: 6.4px;
			border-radius: 100%;
			border: 6.4px solid transparent;
			img {
				height: 96px;
				width: 96px;
				border-radius: 100%;
				cursor: pointer;
				object-fit: cover;
			}
		}
		.selected {
			border: 6.4px solid #fff;
		}
	}
	.submit-btn {
		background-color: #997af0;
		padding: 8px;
		border: none;
		outline: none;
		color: #fff;
		font-size: 16px;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		text-transform: uppercase;
		transition: all 0.2s ease-in-out;
		&:hover {
			background-color: #4e0eff;
		}
	}
`;

const SetAvatar = () => {
	const navigate = useNavigate();
	const [avatars, setAvatars] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedAvatar, setSelectedAvatar] = useState(undefined);
	const linkApi = 'https://api.multiavatar.com';
	useEffect(() => {
		const fetchAvatars = async () => {
			const data = [];
			for (let i = 0; i <= 4; i++) {
				const image = `${linkApi}/${Math.random() * 1000}.png`;
				data.push(image);
			}
			setAvatars(data);
			setIsLoading(false);
		};
		fetchAvatars();
	}, []);
	const setProfilePicture = async () => {
		if (selectedAvatar === undefined) {
			toast.error('Please select an avatar');
		} else {
			const user = JSON.parse(localStorage.getItem('user-chat-app'));
			user.avatarImage = `${linkApi}/${selectedAvatar}.png`;
			user.isAvatarImageSet = true;
			try {
				const response = await updateUser(user);
				if (response.status === 200) {
					localStorage.setItem('user-chat-app', JSON.stringify(user));
					toast.success('Avatar set successfully');
					navigate('/');
				}
			} catch (error) {
				toast.error('Something went wrong');
			}
		}
	};
	if (isLoading) {
		return (
			<div>
				<img src={loader} alt="loader" />
			</div>
		);
	}
	return (
		<Container>
			<div className="title-container">
				<h1>Set Avatar</h1>
			</div>
			<div className="avatars">
				{avatars.map((avatar, index) => (
					<div className={`avatar ${selectedAvatar === index ? 'selected' : ''}`} key={avatar}>
						<img src={`${avatar}`} alt="avatar" onClick={() => setSelectedAvatar(index)} />
					</div>
				))}
			</div>
			<button className="submit-btn" onClick={() => setProfilePicture(selectedAvatar)}>
				Set as profile picture
			</button>
		</Container>
	);
};

export default SetAvatar;
