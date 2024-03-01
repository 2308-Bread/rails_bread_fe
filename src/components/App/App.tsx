import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import BreadList from '../BreadList/BreadList';
import BreadDetail from '../BreadDetail/BreadDetail';
import Error from "../Error/Error";
// import CreateAcctForm from '../CreateAcctForm/CreateAcctForm';
import LoginForm from '../LoginForm/LoginForm';
import Breadbox from '../Breadbox/Breadbox';

import './App.css';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/breads/:id" element={<BreadList />} />
          <Route path="/breads/:id/:breadId" element={<BreadDetail isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<LoginForm setLoggedIn={setIsLoggedIn} />} />
          <Route path="/breadbox" element={isLoggedIn ? <Breadbox /> : <Navigate replace to="/login" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;