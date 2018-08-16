import React from 'react';

const Header=(props)=>{
  return(
    <div className="header__container">
      <div className="header">
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
    </div>
  )
}
export default Header;