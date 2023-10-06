import React, { useEffect } from 'react'
import logo from '../../../assets/Logo.png';
import './splashScreen.css';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 2000);
  },[])

  return (
    <div className="container">
        <div className=" centred">
            <img className='splashScreen ' src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default SplashScreen