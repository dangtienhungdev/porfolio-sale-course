import { createSlice } from '@reduxjs/toolkit';

interface ProjectState {
	projectId: string;
}

const initialState: ProjectState = {
	projectId: '',
};

const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {},
});

export default projectSlice;
