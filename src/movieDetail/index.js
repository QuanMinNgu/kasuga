import React from 'react'
import { Link } from 'react-router-dom';
import '~/movieDetail/style/index.css';
import {HelmetProvider,Helmet} from 'react-helmet-async';
import Comment from '~/detail/comment';
const MovieMoreDetail = () => {
  return (
    <div className='watch-container'>
      <HelmetProvider>
        <Helmet>
          <title>Xem Phim Cuộc Chiến Của Các Vị Thần</title>
        </Helmet>
      </HelmetProvider>
        <div className='grid wide'>
            <div className='watch'>
                <span>
                  <Link style={{textDecoration:"none"}} to='/'>
                      <span className='watch-home'>Trang Chủ</span>
                  </Link>
                  <span style={{margin:"0 1rem"}}> / </span>
                  Cuộc Chiến Của Các Vị Thần</span>
            </div>
            <div className='watch-movie'>
                <iframe src="https://drive.google.com/file/d/1JC1jTTAK882qW10z5e4dw6R9s2JfwAcT/preview" width="100%" height="100%" allowFullScreen allow="autoPlay"></iframe>
            </div>
            <div className='watch-title'>
              <span>HIỆP SĨ ÁNH TRĂNG (2022)</span>
            </div>
            <div className='watch-episode'>
                <span>
                <i style={{marginRight:"0.5rem"}} className="fa-solid fa-tv"></i>Chọn Tập</span>
            </div>
            <div className='watch-epic'>
                <div className='episodic active'>
                  1
                </div>
                <div className='episodic'>
                  1
                </div>
                <div className='episodic'>
                  1
                </div>
                <div className='episodic'>
                  1
                </div>
                <div className='episodic'>
                  1
                </div>
            </div>
            <div className='watch-comment-form'>
                <div className='watch-comment-container'>
                  <div className='watch-comment-comment'>
                      <span>0 bình luận</span>
                  </div>
                  <div className='watch-comment-comment-order'>
                      <span style={{marginRight:"0.5rem"}}>Sắp Xếp Theo:</span>
                      <select>
                          <option>Mới Nhất</option>
                          <option>Cũ Nhất</option>
                      </select>
                  </div>
                </div>
                <div className='watch-detail-comment-form'>
                    <textarea placeholder='Viết bình luận...'/>
                </div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    </div>
  )
}

export default MovieMoreDetail