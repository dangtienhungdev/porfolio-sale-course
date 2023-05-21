import React from 'react';
import { styled } from 'styled-components';

const Messages = ({ messages }) => {
	return (
		<Container>
			{messages.map((message) => (
				<div key={message.message}>
					<div className={`message ${message.fromSelf === true ? 'sender' : 'recieved'}`}>
						<div className="content">
							<p>{message.message}</p>
						</div>
					</div>
				</div>
			))}
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
	overflow: auto;
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 16px;
	&::-webkit-scrollbar {
		width: 0.2rem;
		&-thumb {
			background-color: #ffffff39;
			width: 0.1rem;
			border-radius: 1rem;
		}
	}
	.message {
		display: flex;
		align-items: center;
		gap: 8px;
		.content {
			padding: 8px 16px;
			border-radius: 8px;
			background-color: #1e1e30;
			max-width: 70%;
			overflow-wrap: break-word;
			p {
				color: #fff;
			}
		}
	}
	.sender {
		justify-content: flex-end;
		.content {
			background-color: #4f04ff21;
		}
	}
	.recieved {
		justify-content: flex-start;
		.content {
			background-color: #9900ff20;
		}
	}
`;

export default Messages;
