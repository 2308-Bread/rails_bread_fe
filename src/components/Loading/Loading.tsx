import React, { useEffect } from 'react';
import loadingAnimation from './../Assets/Animation-1707339909532.gif';
import { useNavigate } from 'react-router-dom';

interface LoadingComponentProps {
  navigate: (path: string) => void;
  route: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ navigate, route }) => {
  const handleNavigation = () => {
    const timeoutId = setTimeout(() => {
      // Navigate to the route after 10 seconds
      navigate(route);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  useEffect(handleNavigation, [navigate, route]);

  return (
    <div className="loading-container">
      <img src={loadingAnimation} alt="Loading" className="loading-animation" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingComponent;







