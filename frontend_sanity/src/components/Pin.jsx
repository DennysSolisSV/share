import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { MdDownloadForOfline } from 'react-icons/md';
import { AiTwooneDelete } from 'react-icons/ai';
import { BsFillArrowUpRi} from 'react-icons/bs';

import { client, urlFor } from '../client';

const Pin = ({ pin: {postedBy, image, _id, destination }}) => {
  const [ postHovered, setPostHovered ] = useState(false);
  const [ savingPost, setSavingPost ] = useState(false);

  const navigate = useNavigate();
  return (
    <div className='m-2'>
      <div 
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => Navigate(`/pin-detail/${_id}`)}
        className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all'
      >
      </div>


      <img className='rounded-lg w-full' alt='user-post' src={urlFor(image).width(250).url()} />
    </div>
    
  )
}

export default Pin