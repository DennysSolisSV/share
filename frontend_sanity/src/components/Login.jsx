import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

import {client} from '../client';

const style = {
  wrapper: `flex justify-start items-center flex-col h-screen`,
  container: `relative w-full h-full`,
  video:`w-full h-full object-cover`,
  blackOverLay:`absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay`,
  logoContainer:`p-5`,
  googleLogin: `shadow-2xl`,
  button: `bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer`,
} 
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj))
  
    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type:'user',
      userName:name,
      image:imageUrl,
    }

    client.createIfNotExists(doc)
      .then(() => {
        navigate('/', {replace : true})
      })
  }
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <video 
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className={style.video}
        />
        <div className={style.blackOverLay}>
          <div className={style.logoContainer}>
            <img src={logo} width='130px' alt='logo' />
          </div>
          <div className={style.googleLogin}>
            <GoogleLogin 
              clientId={process.env.REACT_APP_GOOGLE_API_ID}
              render={(renderProps) => (
                <button 
                  type='button'
                  className={style.button}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4' /> Sign in with Google.
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy='single_host_origin'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login