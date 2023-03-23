import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from '../../../../config/config';

import { db } from '../../../../firebase/firebase-config';

const UserLayout = (params) => {
	const { uid } = params;
	const [userInfomation, setUserInfomation] = useState([]);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		if (typeof uid === undefined) return;
	// 		const colRef = doc(db, 'users', uid);
	// 		const docData = await getDoc(colRef);
	// 		setUserInfomation(docData.data());
	// 	}
	// 	fetchData();
	// }, []);
	// console.log(
	// 	'🚀 ~ file: UserLayout.js:9 ~ UserLayout ~ userInfomation',
	// 	userInfomation
	// );
	return /* html */ `
		<div class='flex-1 p-4 bg-lightMode rounded-lg shadow-lg overflow-hidden'>
			<div>
				<h2 class='text-2xl font-semibold mb-4'>Thông tin cơ bản</h2>
				<div class="grid md:grid-cols-2 grid-cols-1 gap-x-4">
					<div class='mb-4'>
						<label for="" class='mb-1'>Email</label>
						<input type="text" value='${
							userInfomation.email || 'Bạn chưa cập nhật'
						}' class="border-gray-300 p-2 rounded bg-white w-full" disabled/>
					</div>
					<div class='mb-4'>
						<label for="" class='mb-1'>Số điện thoại</label>
						<input type="text" value='${
							userInfomation.phone || 'Bạn chưa cập nhật'
						}' class="border-gray-300 p-2 rounded bg-white w-full" disabled/>
					</div>
				</div>
				<div class="grid md:grid-cols-2 grid-cols-1 gap-x-4">
					<div class='mb-4'>
						<label for="" class='mb-1'>Github</label>
						<input type="text" value='${
							userInfomation.github || 'Bạn chưa cập nhật'
						}' class="border-gray-300 p-2 rounded bg-white w-full" disabled/>
					</div>
					<div class='mb-4'>
						<label for="" class='mb-1'>Địa chỉ</label>
						<input type="text" value='${
							userInfomation.address || 'Bạn chưa cập nhật'
						}' class="border-gray-300 p-2 rounded bg-white w-full" disabled/>
					</div>
					<div class='mb-4'>
						<label for="" class='mb-1'>Ảnh đại diện</label>
						<div>
              <img id='img-item' src='${
								userInfomation.image ||
								'https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg'
							}' alt="" class='rounded'/>
              </div>
					</div>
				</div>
			</div>
      <div>
        <h2 class='text-2xl font-semibold mb-4'>Mạng xã hội</h2>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-x-4">
          <div class='mb-4'>
						<label for="" class='mb-1'>Facebook</label>
						<input type="text" value='${
							userInfomation.facebook || 'Bạn chưa cập nhật'
						}' class="border-gray-300 p-2 rounded bg-white w-full" disabled/>
					</div>
          <div class='mb-4'>
            <label for="" class='mb-1'>LinkedIn</label>
            <input type="text" value='${
							userInfomation.linkedIn || 'Bạn chưa cập nhật'
						}' class="border-gray-300 p-2 rounded bg-white w-full" disabled/>
          </div>
        </div>
        </div>
      </div>
		</div>
	`;
};

export default UserLayout;
