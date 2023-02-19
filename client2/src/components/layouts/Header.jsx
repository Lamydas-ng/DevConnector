import React from 'react'
import {Link} from "react-router-dom";
const Header = (props) => {
  return (
    <div> 
    
      <nav className='navbar bg-dark'>
    <h1>
        <a className="btn" href="/"><i className="fas fa-code"></i>{props.appName}</a>
    </h1>
    <ul className='buttons'>
        <li><Link to="/register" class="btn ">Developers</Link></li>
        <li><Link to="/register" class="btn " >Signup</Link></li>
        <li><Link to="/login" class="btn">SignIn</Link></li>
    </ul>
</nav></div>
  );
};

export default Header