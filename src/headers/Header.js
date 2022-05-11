import React, { useEffect } from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Header = () => {

    
  return (
    <div className='head-container'>
        <div className='grid wide h_100'>
            <div className='row h_100'>
                <div className='col c-12 m-12 l-3 h_100'>
                    <div className='head-brand'>
                        <Link to='/' className='head-brand-link'>
                            <span style={{color:"#FD6363"}}>KASUGASHOP</span>.COM
                        </Link>
                    </div>
                </div>
                <div className='col c-0 m-0 l-6 h_100'>
                    <div className='head-search'>
                        <div className='head-search-container'>
                            <input type='text' placeholder='Tìm Kiếm'/>
                            <div className='head-search-icon'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col c-0 m-0 l-3'>
                    <div className='head-auth'>
                        <Link className='head-auth-link' to='/register'>
                            <span>Đăng Ký</span>
                        </Link>
                        <Link className='head-auth-link' to='/login'>
                            <span>Đăng Nhập</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header