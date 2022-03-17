import React, { useState, useRef, useEffect } from 'react'
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { link, Route, Routes } from 'react-router-dom';

import { SideBar, UserProfile } from '../components';
import Pins from './Pins';
import { client } from '../client';
import logo from '../assets/logo.png';

const style = {
  wrapper:`flex bg-gray-50 md:flex-row flex-col h-screen`,
}

const Home = () => {
  return (
    <div className={style.wrapper}>dfgdgdfg</div>
  )
}

export default Home