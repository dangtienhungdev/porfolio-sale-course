import './App.css';

import Card from './components/Card';

enum permistion {
	ADMIN = 'ADMIN',
	EDITOR = 'EDITOR',
	MODERATOR = 'MODERATOR',
}

const reviews: {
	name: string;
	image: string;
	stars: number;
	premiumUser: boolean;
	date?: string;
	permistion: permistion;
}[] = [
	{
		name: 'dang tien hung',
		image: '',
		stars: 5,
		premiumUser: true,
		date: '05/09/2022',
		permistion: permistion.ADMIN,
	},
	{
		name: 'CharkaUI',
		image: '',
		stars: 4,
		premiumUser: false,
		date: '03/08/2022',
		permistion: permistion.EDITOR,
	},
	{
		name: 'React Query',
		image: '',
		stars: 3,
		premiumUser: false,
		date: '04/08/2022',
		permistion: permistion.MODERATOR,
	},
];

// union type: |
// khai báo object
const user: {
	firstname: string;
	lastname: string;
	age: number;
	isSchool?: boolean;
	school: (string | number)[];
} = {
	firstname: 'dang tien hung',
	lastname: 'dang tien hung',
	age: 12,
	isSchool: false,
	school: ['cao dang fpt', 'fpt university', 30],
};

const App = () => {
	return (
		<div>
			<Card
				title="dang tien hung"
				image="https://source.unsplash.com/random"
				link="link"
				description="description"
			/>
			<div className="review">
				<div className="review-image">
					<img src="https://source.unsplash.com/random" alt="" />
				</div>
				<div className="review-info">
					{reviewInfo(reviews.length, reviews[0].name)}
				</div>
				<div>{user.firstname}</div>
			</div>
		</div>
	);
};

const reviewInfo = (total: number, name: string) => {
	return (
		<>
			Review total <strong>{total}</strong> | Last reviewed by{' '}
			<strong>{name}</strong> ⭐️
		</>
	);
};

export default App;
