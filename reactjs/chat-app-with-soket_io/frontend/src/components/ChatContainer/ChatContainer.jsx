import Logout from '../Logout/Logout';
import React from 'react';
import { styled } from 'styled-components';

const ChartContainer = ({ currenChat }) => {
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
			<div className="chat-message"></div>
			<div className="chat-input"></div>
		</Container>
	);
};

const Container = styled.div`
	padding-top: 16px;
	.chat-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.2rem 10px;
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
