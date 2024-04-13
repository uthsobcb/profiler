import React from 'react';
import Data from '../../api/ProfileData.json';
import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import FbIcon from '../assets/fb.svg';
import LinkIcon from '../assets/link.svg';


const Social = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <ul className='flex flex-column w-48 my-5 gap-3'>
                    <li> <a href={Data.urls.github}> <img src={GithubIcon} alt="" /> </a> </li>
                    <li> <a href={Data.urls.linkedin}> <img src={LinkedInIcon} alt="" /> </a> </li>
                    <li> <a href={Data.urls.fb}> <img src={FbIcon} alt="" /> </a> </li>
                    <li> <a href={Data.urls.other}> <img src={LinkIcon} alt="" /> </a> </li>
                </ul>
            </div>
        </div>
    );
}

export default Social;
