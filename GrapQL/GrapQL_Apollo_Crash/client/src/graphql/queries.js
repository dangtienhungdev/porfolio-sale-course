import { gql } from '@apollo/client';

const getBooksQuery = gql`
	query getBooksQuery {
		books {
			id
			name
			genre
		}
	}
`;

export { getBooksQuery };
