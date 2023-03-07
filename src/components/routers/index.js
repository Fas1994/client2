import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/Login';
import Register from '../auth/Register';
import {Link } from 'react-router-dom'
import Landing from '../layouts/Landing';
import Login2 from '../auth/Login2';
import Register2 from '../auth/Register2';


const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login2></Login2>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
      </Routes>
    </>
  );
}

export default Routers;

