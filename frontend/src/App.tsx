import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// import LandingPageHeader from './user/sections/LandingPageHeader';
// import RegisterShop from './user/sections/shop/RegisterShop';
// import ChangePassword from './user/pages/ChangePassword';
import Login from './components/auth/Login';
import NavBar from './components/NavBar';
import LandingPage from './LandingPage';
import Footer from './sections/footer';
import { ForgotPassword, ResetPassword, Signup } from './components/auth';
import ChangePassword from './components/auth/ChangePassword';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <NavBar 
        isLogin = {isLogin}
        setIsLogin = {setIsLogin}
      />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="login" element={<Login setIsLogin = {setIsLogin} />} /> 
            <Route path="login/:urltoken" element={<Login setIsLogin = {setIsLogin} />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password/:urltoken" element={<ResetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path='change-pass' element={<ChangePassword setIsLogin = {setIsLogin}/>} />
            {/* <Route path='register-shop' element={<RegisterShop />} /> */}
      
            {/* <Route path='/admin'>
              <Route path="login" element={<ALogin />} />
            </Route> */}
          </Routes>
      <Footer 
      />
    </div>     
  )
};

export default App;