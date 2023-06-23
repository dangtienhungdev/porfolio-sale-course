import React, { useState } from 'react';
import { getAuthorsQuery, getBooksQuery } from '../../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';

import { addBookMutation } from '../../graphql/mutations';

const BookForm = () => {
	const { loading, error, data } = useQuery(getAuthorsQuery);
	const [newBook, setNewBook] = useState({
		name: '',
		genre: '',
		authorId: '',
	});
	const handleChange = (e) => {
		setNewBook({ ...newBook, [e.target.name]: e.target.value });
	};
	const [addBook, dataMutation] = useMutation(addBookMutation);
	const handleSubmitAddBook = (e) => {
		e.preventDefault();
		addBook({
			variables: {
				name: newBook.name,
				genre: newBook.genre,
				authorId: newBook.authorId,
			},
			refetchQueries: [{ query: getBooksQuery }],
		});
		setNewBook({
			name: '',
			genre: '',
			authorId: '',
		});
	};
	if (error) {
		return <p>Error</p>;
	}
	return (
		<>
			<form autoComplete="off" onSubmit={handleSubmitAddBook}>
				<div className="mb-6">
					<label
						htmlFor="Book name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Book name
					</label>
					<input
						type="text"
						id="book"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Book name"
						required
						name="name"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Book genre
					</label>
					<input
						type="text"
						id="password"
						placeholder="Book genre"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
						name="genre"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="countries"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Author
					</label>
					{loading && <p>Loading....</p>}
					{!loading && data && (
						<select
							name="authorId"
							onChange={(e) => handleChange(e)}
							id="countries"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							{data.authors.map((author) => (
								<option key={author.id} value={`${author.id}`}>
									{author.name}
								</option>
							))}
						</select>
					)}
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default BookForm;
