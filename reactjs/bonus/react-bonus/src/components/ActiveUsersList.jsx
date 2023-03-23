import { useStateUser } from '../hooks/useStateUser';

const ActiveUsersList = () => {
	const { users } = useStateUser();

	return (
		<ul>
			{getActiveUser(users).map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	);
};

const getActiveUser = (users) => {
	if (!Array.isArray(users)) return;
	const weekAgo = new Date();
	weekAgo.setDate(weekAgo.getDate() - 7);
	const filterUsers = users.filter(
		(user) => !user.isBanned && user.lastActivityAt >= weekAgo
	);
	return filterUsers;
};

export default ActiveUsersList;
