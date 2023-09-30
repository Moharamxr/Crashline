import React from 'react'
import logo from '../../../assets/Logo.png';
import './splashScreen.css';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/login')
  }, 2000);

  
  return (
    <div className="container">
        <div className="row centred">
            <img className='splashScreen w-50' src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default SplashScreen