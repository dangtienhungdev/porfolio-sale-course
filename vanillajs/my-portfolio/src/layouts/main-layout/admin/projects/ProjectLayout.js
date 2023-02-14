import 'sweetalert2/src/sweetalert2.scss';

import { deleteOne, getAll } from '../../../../apis/config-project';
import { router, useEffect, useState } from '../../../../config/config';

import Swal from 'sweetalert2';

const ProjectLayout = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await getAll();
				if (data && data.length > 0) {
					setProjects(data);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	useEffect(() => {
		const btnDelete = document.querySelectorAll('.btn-delete');
		if (btnDelete) {
			btnDelete.forEach((btn) => {
				btn.addEventListener('click', function (e) {
					const id = this.dataset.id;
					console.log('🚀 ~ file: ProjectLayout.js:28 ~ id', id);
					e.preventDefault();
					Swal.fire({
						title: 'Bạn có chắc chắn muốn xóa?',
						text: "You won't be able to revert this!",
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'Yes, delete it!',
					}).then((result) => {
						if (result.isConfirmed) {
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
							(async () => {
								try {
									const newProject = projects.filter((item) => item.id != id);
									await deleteOne(id);
									setProjects(newProject);
								} catch (error) {
									console.log(error);
								}
							})();
						}
					});
				});
			});
		}
	});
	return /* html */ `
    <div class='flex-1 p-4 bg-lightMode rounded-lg shadow-lg overflow-hidden'>
      <div class="overflow-x-scroll rounded-lg bg-white shadow-md scroll-smooth">
        <table class='w-full'>
          <thead class='bg-[#f7f7f8]'>
            <tr>
              <th class="whitespace-nowrap py-5 px-7 text-left align-middle font-semibold capitalize">Stt</th>
              <th class="whitespace-nowrap py-5 px-7 text-left align-middle font-semibold capitalize">dự án</th>
              <th class="whitespace-nowrap py-5 px-7 text-left align-middle font-semibold capitalize">Mô tả dự án</th>
              <th class="whitespace-nowrap py-5 px-7 text-left align-middle font-semibold capitalize">Active</th>
            </tr>
            </thead>
            <body>
            ${projects
							.map(
								(project, index) => /* html */ `
              <tr class='even:bg-lightMode'>
                <td class="whitespace-nowrap py-4 px-7">${
									index < 10 ? `0${index + 1}` : index + 1
								}</td>
                <td class="whitespace-nowrap py-4 px-7">${project.title}</td>
                <td class="py-4 px-7 w-full max-w-xs overflow-hidden !h-28">
                  <p class='overflow-y-auto w-full h-full'>${
										project.description
									}</p>
                </td>
                <td class='whitespace-nowrap py-4 px-7 !h-28 flex w-full gap-x-2 items-center'>
                  <div class='h-10 w-10 hover:bg-gray-400 text-white flex items-center justify-center cursor-pointer rounded-sm'>
                    <img class='h-full w-full object-cover' src="/public/assets/images/project-active/scanning-unscreen.gif" alt="">
                  </div>
                  <div class='btn-edit h-10 w-10 hover:bg-gray-400 text-white flex items-center justify-center cursor-pointer rounded-sm'>
                    <a href="/admin/project/edit/${
											project.id
										}" class='inline-block'>
                      <img class='h-full w-full object-cover' src="/public/assets/images/project-active/edit-unscreen.gif" alt="">
                    </a>
                  </div>
                  <div
                    class='btn-delete h-10 w-10 hover:bg-gray-400 text-white flex items-center justify-center cursor-pointer rounded-sm'
                    data-id='${project.id}'
                    >
                    <img class='h-full w-full object-cover' src="/public/assets/images/project-active/bin-unscreen.gif" alt="">
                  </div>
                </td>
              </tr>
              `
							)
							.join('')}
          </body>
        </table>
      </div>
    </div>
  `;
};

export default ProjectLayout;
