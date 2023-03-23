import * as yup from 'yup';

import { Button, FormGroup, IconToggle } from 'components';
import { auth, db } from '../../firebase/firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { roleUser, userStatus } from 'api/config';

import Input from 'components/input/Input';
import { Link } from 'react-router-dom';
import React from 'react';
import slugify from 'slugify';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import useToggleValue from 'hooks/useToogleValue';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup.string().email('Invalid email address').required('This field is required!'),
    password: yup
      .string()
      .required('This field is required!')
      .min(8, 'Password must be 8 character'),
    confirmPassword: yup
      .string()
      .required('This field is required!')
      .min(8, 'Password must be 8 character')
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })
  .required();

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
  const handleSubmitForm = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      /* update display name */
      await updateProfile(auth.currentUser, {
        displayName: values.email.split('@')[0],
        photoURL:
          'https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg',
      });
      /* add user -> database */
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        username: values.email.split('@')[0],
        email: values.email,
        password: values.password,
        slug: slugify(values.email.split('@')[0], { lower: true }),
        avatar:
          'https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-avatar-vector-icon-white-background-png-image_1884971.jpg',
        role: roleUser.ADMIN,
        status: userStatus.ACTIVE,
        createdAt: serverTimestamp(),
      });
      toast.success('Create user successfully!');
      reset({});
    } catch (error) {
      toast.error(error.message);
    }
  };
  const { toggleValue: showPassword, handleValue: togglePassword } = useToggleValue();
  const { toggleValue: showPasswordConfirm, handleValue: togglePasswordConfirm } = useToggleValue();
  return (
    <div
      style={{ backgroundImage: 'url("/assets/bg-writting-cv.png")' }}
      className="bg-no-repeat bg-center bg-cover min-h-screen w-screen bg-opacity-50 flex items-center justify-center p-4 md:p-10 gap-x-10"
    >
      <div className="w-full h-full grid xl:grid-cols-2 grid-cols-1 gap-16 md:p-4 rounded-md">
        <div className="bg-white text-black bg-opacity-20 rounded-md w-full md:p-6 p-4 flex justify-center items-center flex-col">
          <h1 className="text-3xl mb-10">Register</h1>
          <form
            className="login-form w-full"
            autoComplete="off"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <FormGroup>
              <Input
                control={control}
                name={'email'}
                placeholder="Please enter your email"
                error={errors?.email?.message}
              />
            </FormGroup>
            <FormGroup>
              <Input
                control={control}
                name={'password'}
                type={`${showPassword ? 'text' : 'password'}`}
                placeholder={'Please enter your password'}
                error={errors?.password?.message}
              >
                <IconToggle onClick={togglePassword} open={showPassword} />
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                control={control}
                name={'confirmPassword'}
                type={`${showPasswordConfirm ? 'text' : 'password'}`}
                placeholder="Please enter your confirm password"
                error={errors?.confirmPassword?.message}
              >
                <IconToggle onClick={togglePasswordConfirm} open={showPasswordConfirm} />
              </Input>
            </FormGroup>
            <Button type="submit" kind="primary">
              register
            </Button>
          </form>
          <p className="capitalize text-black cursor-pointer hover:text-blue-900 mt-10">
            forgot password?
          </p>
          <p className="capitalize text-black mt-2">
            I have an account?{' '}
            <Link to="/admin/sign-in" className="capitalize cursor-pointer text-blue-900 mt-10">
              Sign In
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center flex-col h-full w-full">
          <div className="flex gap-x-4">
            <img
              src="/assets/resume-removebg-preview.png"
              alt=""
              className="h-10 w-10 object-cover"
            />
            <h1 className="capitalize text-4xl">My Portfolio Creator</h1>
          </div>
          <p className="mt-10 md:w-1/2 w-3/2 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore id consequatur,
            minus quae necessitatibus veritatis pariatur. Incidunt optio velit aliquid voluptas quae
            quos quo! Fuga dolorem porro necessitatibus quis!
          </p>
          <Link
            to="/admin/sign-in"
            className="mt-10 inline-block py-2 px-8 rounded bg-blue-500 text-white capitalize text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
