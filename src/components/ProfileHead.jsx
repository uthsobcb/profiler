import React from 'react';
import PFP from '../assets/pfp.png';
import ProfileData from '../../api/ProfileData.json';


const ProfileHead = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col items-center p-6">
                <img src={ProfileData.img} className="rounded-full mb-4" alt="Profile" />
                <h1 className="text-white text-3xl font-bold">Name: {ProfileData.name}</h1>
                <h2 className="text-[#D9D9D9] text-xl font-semibold mt-4">Working @{ProfileData.company} as {ProfileData.designation}</h2>
            </div>
        </div>
    );
}

export default ProfileHead;
