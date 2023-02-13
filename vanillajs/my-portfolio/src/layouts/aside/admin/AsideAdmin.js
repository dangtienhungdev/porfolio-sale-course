const links = [
	{
		id: 1,
		title: 'Dashboard',
		to: '/admin/dashboard',
	},
	{
		id: 2,
		title: 'Quản lý dự án',
		to: '/admin/projects',
	},
	{
		id: 3,
		title: 'Thông tin người dùng',
		to: '/admin/user',
	},
];

const AsideAdmin = () => {
	return /* html */ `
    <div class='w-full max-w-xs p-4 bg-lightMode shadow-lg rounded-lg'>
      <ul>
        ${links
					.map(
						(link) => `
          <li><a href="${link.to}" class='p-2 hover:bg-blue-400 transition-all duration-200 inline-block w-full rounded-lg hover:text-white mb-4'>${link.title}</a></li>
        `
					)
					.join('')}
      </ul>
    </div>
  `;
};

export default AsideAdmin;
