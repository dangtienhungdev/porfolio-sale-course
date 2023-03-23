import * as AiIcons from 'react-icons/ai';

import { Button, IconDelete, IconEdit, Table, Thead } from '../../components';
import React, { useEffect, useState } from 'react';
import { deleteProject, getAllProjects } from '../../api/projects';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import parse from 'html-react-parser';

const ManageProjects = () => {
  /* useState */
  const [projects, setProjects] = useState([]);

  /* useEffect */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllProjects();
        if (data) {
          setProjects(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  /* handle */
  const handleClickDelete = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          await deleteProject(id);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex-1">
      <div className="mb-5">
        <Button
          type="button"
          kind="primary"
          className={'inline-flex gap-x-2 items-center !bg-blue-400'}
          to={'/admin/projects/add'}
        >
          <span>
            <AiIcons.AiFillFolderAdd />
          </span>
          Thêm dự án
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table>
          <Thead>
            <tr>
              <th scope="col" className="px-6 py-3 capitalize">
                #
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                Dự án
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                github
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                Website
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                Mô tả dự án
              </th>
              <th scope="col" className="px-6 py-3 capitalize">
                Edit
              </th>
            </tr>
          </Thead>
          <tbody>
            {projects &&
              projects.length > 0 &&
              projects.map((project, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={project.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-x-2">
                      <div className="w-20 h-16">
                        <img
                          src={project.images[0]}
                          alt=""
                          className="h-full w-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="">
                        <h3 className="capitalize font-semibold text-black">
                          {project.projectName}
                        </h3>
                        <p>
                          Date: {new Date(project.startDate).toLocaleDateString('vi-VI')} -{' '}
                          {new Date(project.endDate).toLocaleDateString('vi-VI')}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{project.linkProject}</td>
                  <td className="px-6 py-4">{project.linkWebsite}</td>
                  <td className="">
                    <div className="h-10 w-full overflow-y-auto">{parse(project.content)}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-x-2">
                      <Link
                        to={`/admin/project/edit/${project.id}`}
                        className="p-2 rounded hover:bg-gray-100 cursor-pointer flex items-center justify-center"
                      >
                        <IconEdit />
                      </Link>
                      <div
                        className="p-2 rounded hover:bg-gray-100 cursor-pointer flex items-center justify-center"
                        onClick={() => handleClickDelete(project.id)}
                      >
                        <IconDelete />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProjects;
