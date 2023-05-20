import React, { useState } from 'react';

import { BsEmojiLaughing } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';
import { FiSend } from 'react-icons/fi';
import { styled } from 'styled-components';

const ChatInput = ({ handleSendMessage }) => {
	const [msg, setMsg] = useState('');
	const [showEmojiPicker, setShowEmojiPicker] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		handleSendMessage(msg);
		setMsg('');
	};
	const handleChangeIput = (e) => {
		setMsg(e.target.value);
		setShowEmojiPicker(false);
	};
	const handleEmojiClick = (emoji) => {
		let message = msg;
		message += emoji.emoji;
		setMsg(message);
	};
	return (
		<Container>
			<div className="button-container">
				<div className="emoji">
					{showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
					<BsEmojiLaughing onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
				</div>
			</div>
			<form className="input-container" onSubmit={onSubmit} autoComplete="off">
				<input
					type="text"
					value={msg}
					placeholder="Type a message"
					onChange={(e) => handleChangeIput(e)}
				/>
				<button type="submit">
					<FiSend />
				</button>
			</form>
		</Container>
	);
};

const Container = styled.div`
	padding: 16px;
	display: grid;
	grid-template-columns: 5% 95%;
	align-items: center;
	justify-content: center;
	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		.emoji {
			position: relative;
			font-size: 24px;
			color: #fff;
			cursor: pointer;
			aside.EmojiPickerReact.epr-main {
				position: absolute;
				bottom: calc(100% + 20px);
			}
		}
	}
	.input-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		input {
			width: 100%;
			padding: 8px;
			border-radius: 12px;
			border: none;
			outline: none;
			background-color: #1e1e30;
			color: #fff;
			font-size: 16px;
			&::placeholder {
				color: #fff;
			}
		}
		button {
			font-size: 24px;
			color: #fff;
			cursor: pointer;
			background-color: transparent;
			border: none;
			outline: none;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export default ChatInput;
