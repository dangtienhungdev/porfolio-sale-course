import 'react-quill/dist/quill.snow.css';
import 'swiper/css';
import 'swiper/css';

import * as BsIcons from 'react-icons/bs';
import * as yup from 'yup';

import { Button, FormGroup, FormRow, ImageUpload, Input, Label } from '../../components';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ReactQuill from 'react-quill';
import { createProject } from '../../api/projects';
import slugify from 'slugify';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    projectName: yup.string().required('this field is required').trim().ensure(),
    linkProject: yup.string().required('this field is required').trim().ensure(),
    linkWebsite: yup.string().required('this field is required').trim().ensure(),
    startDate: yup.date(),
    endDate: yup.date().required('Date of Birth is required'),
    description: yup.string(),
    // image: yup.mixed().required('Image is required'),
  })
  .required();

const AddProjects = () => {
  /* react-hook-form */
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  /* useState */
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  /* handle */
  const handleSubmitForm = async (values) => {
    try {
      const data = {
        ...values,
        images,
        content,
        slug: slugify(values.projectName, {
          trim: true,
          replacement: '-',
          locale: 'vi',
          lower: true,
        }),
      };
      await createProject(data);
      toast.success('Thêm dự án thành công');
      navigate('/admin/projects');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="bg-white flex-1 p-5 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-blue-500 text-2xl">Thêm</h2>
        <Link to={'/admin/projects'} className="text-sm flex gap-x-1 items-center">
          Quay lại
          <span>
            <BsIcons.BsArrowRight />
          </span>
        </Link>
      </div>
      <div className="my-5">
        <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
          <FormRow className="gap-x-4">
            <FormGroup>
              <Label id={'projectName'}>Tên dự án</Label>
              <Input
                id={'projectName'}
                control={control}
                placeholder={'Tên dự án'}
                name={'projectName'}
                error={errors?.projectName?.message}
              />
            </FormGroup>
            <FormGroup>
              <Label id={'linkProject'}>Tên dự án</Label>
              <Input
                id={'linkProject'}
                control={control}
                placeholder={'Link dự án'}
                name={'linkProject'}
                error={errors?.linkProject?.message}
              />
            </FormGroup>
          </FormRow>
          <FormRow className="gap-x-4">
            <FormGroup>
              <Label>Link website</Label>
              <Input
                id={'linkWebsite'}
                control={control}
                placeholder={'Link website dự án'}
                name={'linkWebsite'}
                error={errors?.linkProject?.message}
              />
            </FormGroup>
            <FormGroup>
              <Label>Hình ảnh</Label>
              <ImageUpload name="image" setImages={setImages} error={errors?.image?.message} />
            </FormGroup>
          </FormRow>
          {images.length > 0 && (
            <div className="mb-12 overflow-hidden !max-w-screen-md">
              <Label>Xem trước</Label>
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {images.length > 0 &&
                  images.map((image, index) => (
                    <SwiperSlide
                      className="!h-[200px] !w-[200px] object-cover swiper-slide"
                      key={index}
                    >
                      <img src={image} alt="" className="h-full w-full object-cover" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          )}
          <FormRow className="gap-x-4">
            <FormGroup>
              <Label id={'startDate'}>ngày bắt đầu</Label>
              <Input
                type={'date'}
                id={'startDate'}
                control={control}
                name={'startDate'}
                error={errors?.startDate?.message}
              />
            </FormGroup>
            <FormGroup>
              <Label id={'endDate'}>ngày kết thúc</Label>
              <Input
                type={'date'}
                id={'endDate'}
                control={control}
                name={'endDate'}
                error={errors?.endDate?.message}
              />
            </FormGroup>
          </FormRow>
          <div className="grid grid-cols-1 mb-[48px]">
            <FormGroup>
              <Label id={'description'}>Mô tả</Label>
              <ReactQuill theme="snow" value={content} onChange={setContent} name="description" />
            </FormGroup>
          </div>
          <div className="text-center">
            <Button type="submit" kind="primary">
              Thêm dự án
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjects;
