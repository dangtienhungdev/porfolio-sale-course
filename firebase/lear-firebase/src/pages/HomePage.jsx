import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';

import { db } from '../firebase/config-firebse';

const HomePage = () => {
	const [posts, setPosts] = useState([]);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
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
	const handleAddPost = (e) => {
		e.preventDefault();
		console.log('submit');
		const colRef = collection(db, 'posts'); // collection -> dùng để kết nối với db
		addDoc(colRef, {
			// addDoc -> thêm 1 dữ liệu vào bản ghi
			title,
			author,
		})
			.then(() => console.log('success'))
			.catch(() => console.log('error'));
	};
	return (
		<>
			<div className="grid grid-cols-4 gap-4 m-4">
				{posts &&
					posts.length > 0 &&
					posts.map((post) => (
						<div key={post.id} className="p-4 bg-gray-300">
							<h2>{post.title}</h2>
							<h3>{post.author}</h3>
						</div>
					))}
			</div>
			<div className="mx-auto w-full max-w-lg">
				<form className="w-full" onSubmit={handleAddPost}>
					<input
						type="text"
						className="p-2 border border-gray-500 w-full outline-none"
						placeholder="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type="text"
						className="p-2 border border-gray-500 w-full outline-none"
						placeholder="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
					<button className="mt-4 w-full p-2 bg-green-400">submit</button>
				</form>
			</div>
		</>
	);
};

export default HomePage;
