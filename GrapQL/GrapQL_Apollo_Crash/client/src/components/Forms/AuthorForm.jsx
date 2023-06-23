import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { addAuthorMutation } from '../../graphql/mutations';
import { getAuthorsQuery } from '../../graphql/queries';

const AuthorForm = () => {
	const [newAuthor, setNewAuthor] = useState({
		name: '',
		age: 0,
	});
	const handleChange = (e) => {
		setNewAuthor({ ...newAuthor, [e.target.name]: e.target.value });
	};
	const [addAuthor, dataMutation] = useMutation(addAuthorMutation);
	const handleSubmitAddBook = (e) => {
		e.preventDefault();
		addAuthor({
			variables: {
				name: newAuthor.name,
				age: parseInt(newAuthor.age),
			},
			refetchQueries: [{ query: getAuthorsQuery }],
		});
		setNewAuthor({
			name: '',
			age: 0,
		});
	};
	return (
		<>
			<form autoComplete="off" onSubmit={handleSubmitAddBook}>
				<div className="mb-6">
					<label
						htmlFor="author_name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Author name
					</label>
					<input
						type="text"
						id="author_name"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Author name"
						required
						name="name"
						value={newAuthor.name}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="age"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>
						Auth age
					</label>
					<input
						type="number"
						id="age"
						placeholder="age"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
						name="age"
						value={newAuthor.age}
						onChange={(e) => handleChange(e)}
					/>
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

export default AuthorForm;
