import { instance } from './config';

export const createProject = (project) => {
  return instance.post('/projects', project);
};

export const getAllProjects = () => {
  return instance.get('/projects');
};

export const deleteProject = (id) => {
  return instance.delete(`/projects/${id}`);
};
