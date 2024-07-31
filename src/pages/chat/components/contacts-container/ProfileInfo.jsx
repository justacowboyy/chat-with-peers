import React from 'react';
import { useAppStore } from "@/store";
import { UserIcon, PowerIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

function ProfileInfo() {
    const { userInfo, logout } = useAppStore();
    const navigate = useNavigate();
    console.log(userInfo?.id);

    // Ensure userInfo is defined before rendering
    if (!userInfo) {
      return null;
    }

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className='absolute bottom-0 w-full h-16 flex items-center justify-center space-x-2'>
            <UserIcon className="w-6 h-6 text-neutral-400" />
            <h6 className=" tracking-widest text-neutral-400 text-opacity-90 font-light text-sm">
                {userInfo.firstName} {userInfo.lastName}
            </h6>
            <PowerIcon 
                className="w-6 h-6 text-neutral-400 cursor-pointer" 
                onClick={handleLogout}
            />
        </div>
    );
}

export default ProfileInfo;
