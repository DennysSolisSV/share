import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const style = {
  wrapper: `flex justify-start items-center flex-col h-screen`,
  container: `relative w-full h-full`,
  video:`w-full h-full object-cover`,
  blackOverLay:`absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay`,
  logoContainer:`p-5`,
  googleLogin: `shadow-2xl`,
  button: `bg-mainColor`,
} 
const Login = () => {
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
              clientId=''
              render={(renderProps) => (
                <button 
                  type='button'
                  className={style.button}
                >
                  <FcGoogle className=
                </button>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login