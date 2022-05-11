import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
const DeeperDetail = ({trailer}) => {

    const navigate = useNavigate();

    const handleTrigger = () => {
        trailer.current.scrollIntoView();
    }

    const handleNavigate = () => {
        navigate('/watch/slug');
    }

  return (
    <div className='detail'>
        <div className='detail-movie'>
            <div className='detail-movie-image'>
                <img src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg" />
                <div className='detail-movie-button'>
                    <button onClick={handleTrigger}><i style={{marginRight:"0.5rem"}} className="fa-brands fa-youtube"></i>Trailer</button>
                    <button onClick={handleNavigate}><i style={{marginRight:"0.5rem"}} className="fa-solid fa-play"></i>Xem Phim</button>
                </div>
            </div>
            <div className='detail-movie-container'>
                <div className='detail-movie-viet'>
                    <span>
                        Nửa Là Đường Mật Nửa Là Đau Thương Nửa Là Đường Mật Nửa Là Đau Thương 
                    </span>
                </div>
                <div className='detail-movie-english'>
                    <span>From Now, Showtime! (2022) | HD | Full VietSub</span>
                </div>
                <div className='detail-movie-detail-container'>
                    <div className='detail-movie-status'>
                        <span>Trạng Thái: <span>Tập 6 Vietsub</span></span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Quốc Gia: Việt Nam</span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Thời Lượng: Việt Nam</span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Năm Sản Xuất: 2022</span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Thể Loại: 2022</span>
                    </div>
                    <div className='detail-movie-contry'>
                        <span>Lượt Xem: 2022</span>
                    </div>
                    <div className='detail-movie-rating'>
                        <div className='detail-movie-rating-container'>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className='detail-movie-rating-container-fullstar'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeeperDetail