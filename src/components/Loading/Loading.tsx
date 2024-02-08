// export {};

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loadingAnimation from './Animation-1707339909532.gif';

const LoadingScreen = ({ nextRoute }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(nextRoute);
    }, 5000);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate, nextRoute]);

  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
      {/* Add your loading animation or message here */}
    </div>
  );
}

export default LoadingScreen;
