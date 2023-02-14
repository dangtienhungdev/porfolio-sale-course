import { router, useEffect } from '../../../config/config';

const Navigation = () => {
	useEffect(() => {
		const btnAddNew = document.querySelector('.btn-add-new');
		btnAddNew.addEventListener('click', () => {
			console.log('abcabc');
			router.navigate('/admin/project/add-new');
		});
	});
	return /* html */ `
    <div class='shadow-lg p-6 bg-white flex justify-end items-center'>
      <div class="flex gap-x-10">
        <button class="bg-blue-400 outline-none py-1 px-8 text-white capitalize rounded btn-add-new">Thêm dự án</button>
        <div class="relative">
          <div class="h-16 w-16 rounded-full">
            <img
              src="https://i.pinimg.com/236x/2a/94/4e/2a944e3ae3c301e49a20b803956f271f.jpg" alt=""
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>`;
};

export default Navigation;
