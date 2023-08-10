import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/forms/signin-form/Login';
import RegisterPage from './components/forms/registration-form/Register';
import Landing from './components/sidebar/Sidebar';
import Followers from './components/followers';
import Following from './components/following';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='/following' element={<Following />}></Route>
        <Route path='/followers' element={<Followers />}></Route>
      </Routes>
    </Router>
  );
}

export default App;