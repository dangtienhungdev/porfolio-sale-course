import { getOne, update } from '../../../../apis/config-project';
import { router, useEffect, useState } from '../../../../config/config';

const EditProject = (params) => {
	const {
		data: { id },
	} = params;
	const [project, setProject] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await getOne(id);
				setProject(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	useEffect(() => {
		const form = document.querySelector('.form');
		form.addEventListener('submit', async (e) => {
			try {
				e.preventDefault();
				let title = document.querySelector('#title').value;
				let githubLink = document.querySelector('#github').value;
				let description = document.querySelector('#description').value;
				let createdAt = new Date();
				const data = { id, title, githubLink, description, createdAt };
				console.log(
					'🚀 ~ file: EditProject.js:32 ~ form.addEventListener ~ data',
					data
				);
				await update(data);
				router.navigate('/admin/projects');
				Toastify({
					text: 'Sửa dự án thành công!',
					duration: 3000,
					position: 'top-center',
					backgroundColor: 'rgb(59 130 246)',
				}).showToast();
			} catch (error) {
				console.log(error);
			}
		});
	});
	return /* html */ `
    <div class='flex-1 p-4 bg-lightMode rounded-lg shadow-lg overflow-hidden'>
      <form class="rounded-lg bg-white shadow-md p-4 form" autocomplete='off'>
        <div class='grid gap-4 grid-cols-2'>
          <div class='flex flex-col mb-4'>
            <label for="title" class='capitalize text-base mb-2'>Tên dự án</label>
            <input
              type="text" name="title" id="title" placeholder='Tên dự án' value='${project.title}'
              class='border border-gray-300 focus:border-green-300 outline-none p-2 rounded'
            />
          </div>
          <div class='flex flex-col mb-4'>
            <label for="" class='capitalize text-base mb-2'>Github</label>
            <input
              type="text" name="github" id="github" placeholder='Link Github' value=${project.githubLink}
              class='border border-gray-300 focus:border-green-300 outline-none p-2 rounded'
            />
          </div>
        </div>
        <div class='grid gap-4 grid-cols-1'>
          <div class='flex flex-col mb-4'>
            <label for="" class='capitalize text-base mb-2'>Miêu tả</label>
            <textarea
              name="" cols="30" rows="5"
              id='description'
              placeholder='Mô tả'
              class='border border-gray-300 resize-none focus:border-green-300 outline-none p-2 rounded'
            >${project?.description}</textarea>
          </div>
        </div>
        <div class='flex justify-center items-center'>
          <button class='rounded text-white py-2 w-full max-w-[200px] bg-blue-400 hover:bg-blue-500'>Sửa dự án</button>
        </div>
      </form>
    </div>
  `;
};

export default EditProject;
