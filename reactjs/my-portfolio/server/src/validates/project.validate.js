import yup from 'yup';

export const projectValidate = yup.object().shape({
  name: yup.string().required('Name is required'),
  shortDescription: yup.string(),
  description: yup.string(),
  images: yup.array(),
  category: yup.string().required('Category is required'),
  user: yup.string().required('User is required'),
  linkDemo: yup.string(),
  linkCode: yup.string().required('Link code is required'),
});
