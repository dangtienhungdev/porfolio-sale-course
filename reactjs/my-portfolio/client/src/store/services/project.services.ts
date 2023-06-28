import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
	reducerPath: 'projectApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8000/api/v1',
	}),
	endpoints: (builder) => ({}),
});
