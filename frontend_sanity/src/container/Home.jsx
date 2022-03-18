import React, { useState, useRef, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, link, Route, Routes } from 'react-router-dom';

import { SideBar, UserProfile } from '../components';
import Pins from './Pins';
import { client } from '../client';
import logo from '../assets/logo.png';

const style = {
  wrapper:`flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out`,
  sidebar:`hidden md:flex h-screen flex-initial`,
  menuContainer:`flex md:hidden flex-row`,
}

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  
  return (
    <div className={style.wrapper}>
      <div className={style.sidebar}>
        <SideBar />
      </div>
      <div className={style.menuContainer}>
        <HiMenu  fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(false)}/>
        <Link to="/">
          <img src={logo} alt='logo' className='w-28' />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={logo} alt='logo' className='w-28' />
        </Link>
      </div>
    </div>
  )
}

export default Home