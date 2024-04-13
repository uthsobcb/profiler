import React from 'react';
import ProfileData from '../../api/ProfileData.json';
const Bio = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <div className='rounded-xl h-auto w-3/5 p-7 m-7' style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)' }}>
                <h3 className='text-lg font-semibold mb-4'>🎯 Goal: {ProfileData.goal}</h3>
                <h3 className='text-lg font-semibold mb-4'>🎓 Education: {ProfileData.education.degree} from {ProfileData.education.university} </h3>
                <h3 className='text-lg font-semibold'>🙋 {ProfileData.FunFact}</h3>
            </div>
        </div>
    );
}

export default Bio;
