import React from 'react';

const BlogDetail = () => {
	return (
		<div className="bg-blue-100">
			<div className="mb-6">
				<h2 className="text-2xl font-medium">Lorem ipsum dolor sit amet.</h2>
				<h3 className="text-xl">Lorem ipsum dolor sit.</h3>
			</div>
			<div className="mb-6">
				<h2 className="text-2xl font-medium">Dang Tien Hung</h2>
				<p>Age: 12</p>
			</div>
			<div>
				<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
					All books by this author:
				</h2>
				<ul className="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
					<li>At least 10 characters (and up to 100 characters)</li>
					<li>At least one lowercase character</li>
					<li>Inclusion of at least one special character, e.g., ! @ # ?</li>
				</ul>
			</div>
		</div>
	);
};

export default BlogDetail;
