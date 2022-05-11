import React from 'react'
import '~/outstanding/style/index.css';
import Categary from './categary';
import Tab from './tab';
const OutStanding = () => {
  return (
    <div className='out_standing-container'>
        <div className='row'>
            <div className='col c-9 m-9 l-9'>
                <Tab />
            </div>
            <div className='col c-3 m-3 l-3'>
                <Categary />
            </div>
        </div>
    </div>
  )
}

export default OutStanding