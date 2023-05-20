import { BiLogIn } from 'react-icons/bi';
import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
	const navigate = useNavigate();
	const handleClick = async () => {
		localStorage.clear();
		navigate('/login');
	};
	return (
		<Button onClick={() => handleClick()}>
			<BiLogIn />
		</Button>
	);
};

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	border-radius: 0.5rem;
	background-color: #9a8;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	svg {
		font-size: 24px;
		color: #ebe7ff;
	}
`;

export default Logout;
