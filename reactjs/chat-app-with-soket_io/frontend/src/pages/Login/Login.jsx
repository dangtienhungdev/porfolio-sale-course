import * as yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Logo from '../../assets/Logo/heart-logo.png';
import { loginAuth } from '../../utils/auth';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	width: 100vw;
	gap: 16px;
	align-items: center;
	background-color: #131324;
	.brand {
		display: flex;
		align-items: center;
		gap: 16px;
		justify-content: center;
		img {
			width: 64px;
			height: 64px;
			object-fit: cover;
		}
		h1 {
			color: #fff;
			font-size: 32px;
			text-transform: uppercase;
		}
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 32px;
		width: 500px;
		background-color: #00000076;
		padding: 32px;
		border-radius: 20px;
		input {
			background-color: transparent;
			padding: 8px;
			border: 0.1rem solid #4e0eff;
			outline: none;
			color: #fff;
			font-size: 16px;
			border-radius: 8px;
			width: 100%;
			&::placeholder {
				color: #aaa;
			}
		}
		button {
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
		span {
			color: #fff;
			font-size: 14px;
			text-align: right;
			text-transform: capitalize;
			a {
				color: #997af0;
				text-decoration: none;
			}
		}
		.message {
			color: #ff0000;
			font-size: 12px;
		}
	}
`;

const schema = yup.object({
	email: yup.string().email().required('Email is required'),
	password: yup.string().required('Password is required').min(6, 'Password is too short'),
});

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});
	/* useState */
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const navigate = useNavigate();
	const onSubmit = async (values) => {
		try {
			const { data } = await loginAuth(values);
			if (data) {
				localStorage.setItem('accessToken', data.accessToken);
				localStorage.setItem('user-chat-app', JSON.stringify(data.user));
				navigate('/');
				toast.success('Login successfully');
			}
		} catch (error) {
			toast.error('Register failed');
		}
	};
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	return (
		<FormContainer>
			<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
				<div className="brand">
					<img src={Logo} alt="Logo" />
					<h1>Chat App</h1>
				</div>
				<div>
					<input
						type="email"
						{...register('email')}
						id="email"
						placeholder="Email"
						onChange={(e) => handleChange(e)}
					/>
					<span className="message">{errors.email?.message}</span>
				</div>
				<div>
					<input
						type="password"
						{...register('password')}
						id="password"
						placeholder="Password"
						onChange={(e) => handleChange(e)}
					/>
					<span className="message">{errors.password?.message}</span>
				</div>
				<button type="submit">Login</button>
				<span>
					I don't have a account? <Link to={'/register'}>Register</Link>
				</span>
			</form>
		</FormContainer>
	);
};

export default Login;
