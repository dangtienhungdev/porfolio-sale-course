import { gql } from '@apollo/client';

export const addBookMutation = gql`
	mutation addBookMutation($name: String!, $genre: String!, $authorId: ID!) {
		createBook(name: $name, genre: $genre, authorId: $authorId) {
			id
			name
			genre
		}
	}
`;

export const addAuthorMutation = gql`
	mutation addAuthorMutation($name: String!, $age: Int!) {
		createAuthor(name: $name, age: $age) {
			id
			name
			age
		}
	}
`;
