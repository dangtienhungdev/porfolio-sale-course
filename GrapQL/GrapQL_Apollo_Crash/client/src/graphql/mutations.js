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
