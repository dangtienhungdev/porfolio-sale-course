import yup from 'yup';

export const userValidate = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  address: yup.string(),
  phone: yup.string(),
  avatar: yup.string(),
  role: yup.string().oneOf(['admin', 'user'], 'Role is invalid').default('user'),
  project: yup.array().of(yup.string()),
});
