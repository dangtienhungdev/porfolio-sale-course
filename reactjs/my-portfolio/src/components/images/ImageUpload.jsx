import * as BsIcons from 'react-icons/bs';

import { apiKeyUploadder } from '../../api/config';
import axios from 'axios';

const ImageUpload = (props) => {
  /* props */
  const { name, className = '', error, setImages } = props;
  /* useState */

  const handleUploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('upload_preset', 'portfolio');
      const response = await axios.post(`${apiKeyUploadder}`, formData);
      if (response) {
        const data = response.data.data;
        const urls = [data.display_url];
        setImages((pre) => [...pre, ...urls]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeImage = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      handleUploadImage(e.target.files[i]);
    }
  };
  return (
    <>
      <div className={`flex items-center justify-center w-full ${className}`}>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <BsIcons.BsCloudUpload>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </BsIcons.BsCloudUpload>
          </div>
          <input
            id="dropzone-file"
            type="file"
            name={name}
            className="hidden"
            onChange={(e) => handleChangeImage(e)}
            multiple
          />
        </label>
      </div>
      {error && <span className="text-red-500 text-sm block mt-1">{error}</span>}
    </>
  );
};

export default ImageUpload;
