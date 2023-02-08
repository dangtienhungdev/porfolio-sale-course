import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase/config-firebse';

const HomePage = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const colRef = collection(db, 'posts'); // collection -> dùng để kết nối với db
		getDocs(colRef).then((snapshot) => {
			// getDocs -> lấy ra toàn bộ dữ liệu trong firebase
			const posts = [];
			snapshot.docs.forEach((doc) => {
				posts.push({
					id: doc.id,
					...doc.data(),
				});
			});
			setPosts(posts);
		});
	}, []);
	return (
		<div>
			{posts &&
				posts.length > 0 &&
				posts.map((post) => (
					<div key={post.id}>
						<h2>{post.title}</h2>
					</div>
				))}
		</div>
	);
};

export default HomePage;
