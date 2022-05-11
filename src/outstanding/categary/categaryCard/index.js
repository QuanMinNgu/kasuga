import React from 'react'
import { Link } from 'react-router-dom';
import '~/outstanding/style/index.css';

const CategaryCard = () => {
  return (
    <Link style={{textDecoration:"none"}} to={`/xem-phim/asds`}>
        <div className='categary-card-container'>
            <div className='categary-card-img'>
                <img src='https://i.pinimg.com/564x/2a/33/b0/2a33b0924858a00a0adee147b73a60bc.jpg' />
            </div>
            <div className='categary-card-detail'>
                <div className='categary-card-viet-title'>
                    <span>Harry Potter 1: Harry Potter Và Hòn Đá Phù Thủy</span>
                </div>
                <div className='categary-card-english-title'>
                    <span>Harry Potter and the Sorcerer's Stone</span>
                </div>
                <div className='categary-card-watch'>
                    <span>120 lượt xem</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CategaryCard