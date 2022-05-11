import React from 'react'
import '~/card/index.css';
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div className='card-container'>
        <Link style={{textDecoration:"none"}} to={`/xem-phim/asd`}>
          <div className='image-container'>
              <img src="https://thuthuatnhanh.com/wp-content/uploads/2020/03/nhung-anh-pokemon-dep-cute-lam-hinh-nen.jpg" />
          </div>
          <div className='card-detail'>
              <div className='card-title'>
                <span>Miền Tây Hoang Dã Miền Tây Hoang Dã Miền Tây Hoang Dã</span>
              </div>
              <div className='card-title-english'>
                <span>Miền Tây Hoang Dã Miền Tây Hoang Dã Miền Tây Hoang Dã</span>
              </div>
          </div>
        </Link>
    </div>
  )
}

export default Card