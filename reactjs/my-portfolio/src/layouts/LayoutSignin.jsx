import * as yup from 'yup';

import { Button, Input, Label } from '../components';

import FormGroup from '../components/common/FormGroup';
import React from 'react';
import { auth } from '../firebase/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

const LayoutSignin = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: 'onSubmit' });
  const navigate = useNavigate();
  const handleSubmitForm = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success('SignIn Successfully!');
      navigate('/admin/projects');
    } catch (error) {
      toast.error('SignIn Failed!');
    }
  };
  return (
    <div className="bg-color8 min-h-screen w-full flex justify-center items-center">
      <div className="grid grid-cols-1 w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden">
        <div className="bg-white p-[59px]">
          <h1 className="text-5xl mb-11 capitalize text-center font-bold">get started</h1>
          <form autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
            <FormGroup>
              <Label id="email">Email</Label>
              <Input
                type={'email'}
                placeholder={'enter your email'}
                name={'email'}
                id={'email'}
                control={control}
                error={errors?.email?.message}
              />
            </FormGroup>
            <FormGroup>
              <Label id="password">password</Label>
              <Input
                type={'password'}
                placeholder={'enter your password'}
                name={'password'}
                id={'password'}
                control={control}
                error={errors?.password?.message}
              />
            </FormGroup>
            <Button type="submit" kind="primary" className={'w-full'}>
              Đăng nhập
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LayoutSignin;
