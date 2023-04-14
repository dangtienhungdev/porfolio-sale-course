import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
	Typography,
} from '@material-tailwind/react';

import { login } from '../../features/authSlice/authSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Login = () => {
	const dispatch = useDispatch();
	const initialState = {
		name: '',
		password: '',
		image: '',
	};
	const [values, setValues] = useState(initialState);
	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className="flex justify-center items-center min-h-screen">
			<Card className="w-96">
				<CardHeader
					variant="gradient"
					color="blue"
					className="mb-4 grid h-28 place-items-center"
				>
					<Typography variant="h3" color="white">
						Sign In
					</Typography>
				</CardHeader>
				<CardBody className="flex flex-col gap-4">
					<Input
						label="Email"
						size="lg"
						name="name"
						text="name"
						onChange={onChange}
						value={values.name}
					/>
					<Input
						label="Password"
						size="lg"
						name="password"
						type="password"
						onChange={onChange}
						value={values.password}
					/>
					<Input
						label="Image URL address"
						size="lg"
						name="image"
						type="text"
						onChange={onChange}
						value={values.image}
					/>
				</CardBody>
				<CardFooter className="pt-0">
					<Button
						variant="gradient"
						fullWidth
						onClick={() => dispatch(login(values))}
					>
						Sign In
					</Button>
					<Typography variant="small" className="mt-6 flex justify-center">
						Don't have an account?
						<Typography
							as="a"
							href="#signup"
							variant="small"
							color="blue"
							className="ml-1 font-bold"
						>
							Sign up
						</Typography>
					</Typography>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
