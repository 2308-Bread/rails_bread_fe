import React, { useState, useEffect } from 'react';
import loadingAnimation from './../Assets/Animation-1707339909532.gif';


interface LoadingComponentProps {
  navigate: (path: string) => void;
  route: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ navigate, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleNavigation = () => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      navigate(route);
    }, 5000);

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







