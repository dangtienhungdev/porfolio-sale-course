import yup from 'yup';

export const socialValidate = yup.object().shape({
  name: yup.string().required('Name is required'),
  link: yup.string().required('Link is required'),
  user: yup.string().required('User is required'),
});
