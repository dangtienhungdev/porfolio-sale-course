import React from 'react';

const UserItem = (props) => {
	const { user } = props;
	return (
		<li>
			<img src={user.avatarUrl} />
			<p>{user.fullName}</p>
			<small>{user.role}</small>
		</li>
	);
};

export default UserItem;
