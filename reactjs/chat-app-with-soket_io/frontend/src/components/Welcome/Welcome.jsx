import robot from '../../assets/robot.gif';
import { styled } from 'styled-components';

const Welcome = ({ currentUser }) => {
	return (
		<Container>
			<img src={robot} alt="robot" />
			<h1>
				Welcome, <span>{currentUser.username}</span>!
			</h1>
			<h3>Please select a chat to Start Messaging.</h3>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 32px;
	color: #fff;
	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
	h1 {
		font-size: 24px;
		font-weight: 600;
		span {
			color: #4e00ff;
		}
	}
`;

export default Welcome;
