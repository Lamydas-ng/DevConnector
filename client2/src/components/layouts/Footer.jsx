import React from 'react'

const Footer = (props) => {
  return (
    <>
        <div>&copy;{ new Date().getFullYear() } https://www.knowledgehut.com {props.appName}</div>
    </>
  );
};

export default Footer