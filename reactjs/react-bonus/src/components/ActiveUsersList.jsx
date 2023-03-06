const ActiveUsersList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const loadUsers = async () => {
			const response = await fetch('/some-api');
			const data = await response.json();
			setUsers(data);
		};

		loadUsers();
	}, []);

	const weekAgo = new Date();
	weekAgo.setDate(weekAgo.getDate() - 7);

	return (
		<ul>
			{users
				.filter((user) => !user.isBanned && user.lastActivityAt >= weekAgo)
				.map((user) => (
					<li key={user.id}>
						<img src={user.avatarUrl} />
						<p>{user.fullName}</p>
						<small>{user.role}</small>
					</li>
				))}
		</ul>
	);
};
