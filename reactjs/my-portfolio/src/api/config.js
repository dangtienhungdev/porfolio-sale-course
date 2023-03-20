import axios from 'axios';

export const apiKeyFirebase = 'AIzaSyAtwW503uh31793L8HmzvB5Lz-SwMGy1OA';
export const apiKeyUploadder =
  'https://api.imgbb.com/1/upload?key=87c6dbc457af9764143a48715ccc1fc7';
export const apiKeyUploadderDelete = '87c6dbc457af9764143a48715ccc1fc7';

export const instance = axios.create({
  baseURL: 'https://vjg691-8080.csb.app',
});
