import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from './pages/index-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
