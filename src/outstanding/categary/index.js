import React from 'react'
import '~/outstanding/style/index.css';
import CategaryCard from './categaryCard';
import CategaryHead from './header';
const Categary = () => {
  return (
    <div className='categary-container'>
        <CategaryHead />
        <div className='categary-detail'>
            <CategaryCard />
            <CategaryCard />
            <CategaryCard />
            <CategaryCard />
            <CategaryCard />
            <CategaryCard />
            <CategaryCard />
        </div>
    </div>
  )
}

export default Categary