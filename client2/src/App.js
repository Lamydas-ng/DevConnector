//import React, { Component } from "react";
import React, { useEffect } from "react";

import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import {  useNavigate } from 'react-router-dom';
import { Routers } from './components/routers/Routers';


//redux import statements

import { Provider } from "react-redux";
import store from './redux/store';
import { loadUser } from "./redux/actions/authAction";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      
      store.dispatch(loadUser())
    }else{
      navigate("/")
    }
    // return () => {
    //   effect
    // };
  }, []);// we are not accessing any props.
  const appName = "KHConnector";
  return (
    <>
    <Provider store={store}>
    
      <Header appName={appName}></Header>
      <Routers></Routers>
      <Footer appName={appName}></Footer>
    
    </Provider>
    </>
  );
}

export default App;
