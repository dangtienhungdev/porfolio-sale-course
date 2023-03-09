import * as yup from 'yup';

import { Button, FormGroup } from 'components';
import { Link, useNavigate } from 'react-router-dom';

import Input from 'components/input/Input';
import React from 'react';
import { auth } from '../../firebase/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useAuth } from 'contexts/auth-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup.string().email('Invalid email address').required('This field is required!'),
    password: yup
      .string()
      .required('This field is required!')
      .min(8, 'Password must be 8 character'),
  })
  .required();

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const handleSubmitForm = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success('Sign in successfully!');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      style={{ backgroundImage: 'url("/assets/bg-writting-cv.png")' }}
      className="bg-image-wrtting-cv bg-no-repeat bg-center bg-cover min-h-screen w-screen bg-opacity-50 flex items-center justify-center p-4 md:p-10 gap-x-10"
    >
      <div className="w-full h-full grid xl:grid-cols-2 grid-cols-1 gap-16 md:p-4 rounded-md">
        <div className="bg-white text-black bg-opacity-20 rounded-md w-full md:p-6 p-4 flex justify-center items-center flex-col">
          <h1 className="text-3xl mb-10">Login</h1>
          <form
            className="login-form w-full"
            autoComplete="off"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <FormGroup>
              <Input
                name={'email'}
                control={control}
                placeholder="Enter yout email."
                error={errors?.email?.message}
              />
            </FormGroup>
            <FormGroup>
              <Input
                name={'password'}
                control={control}
                type="password"
                placeholder="Enter yout password."
                error={errors?.password?.message}
              />
            </FormGroup>
            <Button type="submit" kind="primary">
              Login
            </Button>
          </form>
          <p className="capitalize text-black cursor-pointer hover:text-blue-900 mt-10">
            forgot password?
          </p>
          <p className="capitalize text-black mt-2">
            dont't have account?{' '}
            <Link to="/admin/sign-up" className="capitalize cursor-pointer text-blue-900 mt-10">
              Sign up
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
            <h1 className="capitalize text-4xl">MyCv Creator</h1>
          </div>
          <p className="mt-10 md:w-1/2 w-3/2 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore id consequatur,
            minus quae necessitatibus veritatis pariatur. Incidunt optio velit aliquid voluptas quae
            quos quo! Fuga dolorem porro necessitatibus quis!
          </p>
          <Link
            to="/admin/sign-up"
            className="mt-10 inline-block py-2 px-8 rounded bg-blue-500 text-white capitalize text-base"
          >
            register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
