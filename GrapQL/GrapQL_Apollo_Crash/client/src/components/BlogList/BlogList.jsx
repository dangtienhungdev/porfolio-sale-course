import React, { useState } from 'react';

import BlogDetail from '../BlogDetail/BlogDetail';
import { getBooksQuery } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

const BlogList = () => {
	const [bookSelected, setBookSelected] = useState(null);
	const { loading, error, data } = useQuery(getBooksQuery);
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
	return (
		<div className="flex">
			<div className="w-8/12 bg-blue-50 p-5">
				<div className="grid grid-cols-3 gap-4">
					{data.books &&
						data.books.length > 0 &&
						data.books.map((book) => (
							<div
								key={book.id}
								onClick={() => setBookSelected(book.id)}
								className="block cursor-pointer max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
							>
								<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{book.name}
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{book.genre}
								</p>
							</div>
						))}
				</div>
			</div>
			<div className="w-4/12 p-5 bg-blue-100">
				<BlogDetail bookId={bookSelected} />
			</div>
		</div>
	);
};

export default BlogList;
