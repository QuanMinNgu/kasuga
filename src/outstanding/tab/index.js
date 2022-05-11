import React from 'react'
import '~/outstanding/style/index.css';
import TabCard from './tabCard';
import TabNavbar from './tabNavbar';
const Tab = () => {
  return (
    <div className='tab-container'>
      <TabNavbar infor={"PHIM LẺ"} type="phim-le"/>
      <TabCard type="phim-le"/>
      <TabNavbar infor={"PHIM BỘ"} type="phim-bo"/>
      <TabCard type="phim-bo"/>
      <TabNavbar infor={"PHIM CHIẾU RẠP"} type="phim-chieu-rap"/>
      <TabCard type="phim-chieu-rap"/>
      <TabNavbar infor={"PHIM ANIME"} type="phim-anime"/>
      <TabCard type="phim-anime"/>
    </div>
  )
}

export default Tab