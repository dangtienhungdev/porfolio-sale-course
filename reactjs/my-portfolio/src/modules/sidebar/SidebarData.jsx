import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    id: 1,
    title: 'Dự án',
    icon: <GrIcons.GrProjects />,
    iconDropDown: <IoIcons.IoMdArrowDropdown />,
    subNav: [
      {
        id: 1,
        title: 'Tất cả dự án',
        to: '/admin/projects',
        icon: <AiIcons.AiOutlineProject />,
      },
      {
        id: 2,
        title: 'Thêm dự án',
        to: '/admin/projects/add',
        icon: <AiIcons.AiFillFolderAdd />,
      },
    ],
  },
  {
    id: 2,
    title: 'Thông tin người dùng',
    to: '/admin/users',
    icon: <BiIcons.BiUserCircle />,
  },
];
