import React from 'react';
import { getBookQuery } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const BlogDetail = ({ bookId }) => {
	const { loading, error, data } = useQuery(getBookQuery, {
		variables: { id: bookId },
		skip: bookId === null,
	});
	console.log('🚀 ~ file: BlogDetail.jsx:9 ~ BlogDetail ~ data:', data);
	if (loading) {
		return (
			<div role="status" className="max-w-sm animate-pulse">
				<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
				<span className="sr-only">Loading...</span>
			</div>
		);
	}
	if (error) return <p>Error</p>;
	const book = bookId !== null ? data.book : null;
	return (
		<div>
			<div>
				{book === null && (
					<h2 className="text-2xl font-medium">Please selected</h2>
				)}
			</div>
			{book !== null && (
				<div className="bg-blue-100">
					<div className="mb-6">
						<h2 className="text-2xl font-medium">{book.name}</h2>
						<h3 className="text-xl">{book.gerne}</h3>
					</div>
					<div className="mb-6">
						<h2 className="text-2xl font-medium">{book.author.name}</h2>
						<p>Age: {book.author.age}</p>
					</div>
					<div>
						<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
							All books by this author:
						</h2>
						<ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
							{book.author.book.map((item) => (
								<li key={item.id}>{item.name}</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default BlogDetail;
