import yup from 'yup';

export const categoryValidate = yup.object().shape({
  name: yup.string().required(),
  slug: yup.string(),
  project: yup.array().of(yup.string()),
});
