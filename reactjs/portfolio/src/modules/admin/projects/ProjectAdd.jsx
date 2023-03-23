import 'react-quill/dist/quill.snow.css';

import * as yup from 'yup';

import { Button, FormGroup, FormRow, Input, Label } from 'components';
import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    projectName: yup.string().required('Tên dự án không được bỏ trống'),
    description: yup.string().required('Mô tả dự án bạn không được bỏ trống!'),
    projectLink: yup.string().required('Link dự án không được bỏ trống'),
    productStart: yup
      .date()
      .required()
      .default(() => new Date()),
    productEnd: yup
      .date()
      .required()
      .min(yup.ref('productStart'), 'Ngày kết thúc phải lớn hơn ngày bắt đầu'),
  })
  .required('không được bỏ trống');

const ProjectAdd = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const [content, setContent] = useState('');
  const handleSubmitForm = (values) => {
    console.log('🚀 ~ file: ProjectAdd.jsx:25 ~ handleSubmitForm ~ values:', values);
  };
  console.log(errors);
  return (
    <div className="p-4 rounded-none">
      <h2 className="text-2xl font-semibold capitalize mb-5">Thêm dự án</h2>
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
          <FormRow>
            <FormGroup>
              <Label>Tên dự án</Label>
              <Input
                control={control}
                name={'projectName'}
                placeholder="Tên dự án"
                className={'bg-gray-50'}
                error={errors?.projectName?.message}
              />
            </FormGroup>
            <FormGroup>
              <Label>Link dự án</Label>
              <Input
                control={control}
                name={'projectLink'}
                placeholder="Link dự án"
                className={'bg-gray-50'}
                error={errors?.projectLink?.message}
              />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Ngày bắt đầu</Label>
              <Input
                control={control}
                type="date"
                name="productStart"
                className={'bg-gray-50'}
                error={errors?.productStart?.message}
              />
            </FormGroup>
            <FormGroup>
              <Label>Ngày kết thúc</Label>
              <Input
                control={control}
                type="date"
                name="productEnd"
                className={'bg-gray-50'}
                error={errors?.productEnd?.message}
              />
            </FormGroup>
          </FormRow>
          <FormGroup>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
          </FormGroup>
          <div className="text-center">
            <Button type="submit" kind="primary" className="max-w-xs mx-auto" name="description">
              Thêm sản phẩm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectAdd;
