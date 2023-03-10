import { Outlet, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import IconSignOut from 'components/icons/IconSignOut';
import { SidebarMenu } from 'modules';

const LayoutAdmin = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const auth = getAuth();
  const [idUser, setIdUser] = useState('');
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      setIdUser(uid);
    } else {
      navigate('/');
    }
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'users', idUser);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        } else {
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idUser, navigate]);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="flex">
      <SidebarMenu userInfo={userInfo} />
      <div className="flex flex-col flex-1">
        <div className="h-[56px] wfull flex justify-end items-center bg-gray-100">
          <div
            className="h-[56px] w-[56px] bg-primary text-white flex justify-center items-center bg-opacity-50 cursor-pointer text-2xl"
            onClick={handleSignOut}
          >
            <IconSignOut />
          </div>
        </div>
        <div className="h-[calc(100vh_-_56px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
