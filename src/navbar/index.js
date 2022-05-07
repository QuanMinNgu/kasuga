import React from 'react'
import './index.css';
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='navbar-container'>
        <div className='grid wide h_100'>
            <div className='navbar'>
                <div className='navbar-col'>
                    <Link classsName='navbar-link' to='/'>
                        <span>Trang Chủ</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar