import AuthorForm from './AuthorForm';
import BookForm from './BookForm';
import React from 'react';

const Forms = () => {
	return (
		<div className="grid grid-cols-2 gap-5 mb-6">
			<div className="bg-blue-100 p-5">
				<AuthorForm />
			</div>
			<div className="bg-blue-100 p-5">
				<BookForm />
			</div>
		</div>
	);
};

export default Forms;
