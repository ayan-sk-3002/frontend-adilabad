import React from 'react'
import '../Header/Header.css'
import arrow_back from '../Assets/Images/arrow_back.png';
import share from '../Assets/Images/share.png'
const Header = ({title}) => {
  return (
    <div className='header'>
        <div className="header-left">
            <img src={arrow_back} alt="" />
        <h3>{title?title:"Category"}</h3>
        </div>
        <div className="header-right">
        <img src={share} alt="" />
        </div>
    </div>
  )
}

export default Header