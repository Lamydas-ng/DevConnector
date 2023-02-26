import React from 'react'
//import { Route, Routes } from 'react-router-dom'
import {  Route,Routes } from 'react-router-dom'
import Register2 from '../auth/Register2';
import Login from '../auth/Login';
import  Alert from '../layouts/Alert';

import Landing from '../layouts/Landing';

export const Routers = () => {
  return (
    <>
    <Alert></Alert>
    <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
        <Route path="/dashboard" element={<dashboard2></dashboard2>}></Route>
        
    
    </Routes>
    </>
  );
}
