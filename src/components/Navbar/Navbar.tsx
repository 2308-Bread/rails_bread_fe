import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

interface NavbarProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Navbar = ({ isLoggedIn, setIsLoggedIn }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  const showBackButton = location.pathname.includes("/breads/") || location.pathname.includes("/countries/") || location.pathname === '/login' || location.pathname === '/create-account';

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="navbar bg-[#82aa9f] shadow-[-0_-0.5rem_1.5rem_rgba(0,0,0,0.15)] md:shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.15)] fixed w-full h-14 z-[1000] flex justify-evenly items-center p--8 left-0 bottom-0">
      <h1>
        <Link to="/" className="app-title text-black no-underline text-lg hover:underline hover:text-[white] md:text-xl lg:text-3xl justify-evenly">Belongea's Boulangerie</Link>
      </h1>

      <div className="nav-links flex items-center justify-evenly w-[30%]">
        {showBackButton && (
          <Link to="#" onClick={handleBack} className="back-link text-black no-underline text-lg hover:underline hover:text-[white] md:text-xl lg:text-3xl p-4">Back</Link>
        )}

        {!isLoggedIn && !isLoginPage ? (
          <Link to="/login" className="login-link text-black no-underline text-lg hover:underline hover:text-[white] md:text-xl lg:text-3xl">Login</Link>
        ) : null}

        {isLoggedIn ? (
          <React.Fragment>
            <Link to="/breadbox" className="breadbox-link text-black no-underline text-lg p-2 hover:underline hover:text-[white] md:text-xl lg:text-3xl">BreadBox</Link>
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};


export default Navbar;