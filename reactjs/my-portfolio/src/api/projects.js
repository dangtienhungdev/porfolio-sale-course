import { instance } from './config';

export const createProject = (project) => {
  return instance.post('/projects', project);
};
