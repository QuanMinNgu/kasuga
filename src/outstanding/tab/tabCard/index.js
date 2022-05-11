import React from 'react'
import { Link } from 'react-router-dom';
import '~/outstanding/style/index.css';
import TabCardDEtail from './card';

const TabCard = ({type}) => {
  return (
    <div className='tab_card-container'>
        <div className='row'>
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
            <TabCardDEtail />
        </div>
        <div className='watch-all'>
            <Link className='watch-all-link' to={`/${type}`}>
               <span>Xem Tất Cả</span>
            </Link>
        </div>
    </div>
  )
}

export default TabCard