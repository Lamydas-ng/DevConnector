//import React, { Component } from "react";
import React from "react";

import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

import { Routers } from './components/routers/Routers';
import { BrowserRouter as Router } from 'react-router-dom';

//redux import statements

import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  const appName = "KHConnector";
  return (
    <>
    <Provider store={store}>
    <Router>
      <Header appName={appName}></Header>
      <Routers></Routers>
      <Footer appName={appName}></Footer>
    </Router>
    </Provider>
    </>
  );
}

export default App;
