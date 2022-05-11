import React from 'react'
import { Link } from 'react-router-dom'
import '~/outstanding/style/index.css';

const TabCardDEtail = () => {
  return (
    <div className='col c-3 m-3 l-3'>
        <div className='tab_card-detail-container'>
        <Link style={{textDecoration:"none"}} to={`/xem-phim/asdas`}>
          <div className='image-container'>
              <img src="https://thuthuatnhanh.com/wp-content/uploads/2020/03/nhung-anh-pokemon-dep-cute-lam-hinh-nen.jpg" />
          </div>
          <div className='tab_card-detail'>
              <div className='tab_card-title'>
                <span>Miền Tây Hoang Dã Miền Tây Hoang Dã Miền Tây Hoang Dã</span>
              </div>
              <div className='tab_card-title-english'>
                <span>Miền Tây Hoang Dã Miền Tây Hoang Dã Miền Tây Hoang Dã</span>
              </div>
          </div>
        </Link>
    </div>
    </div>
  )
}

export default TabCardDEtail