import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import '~/detail/style/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Categary from '~/outstanding/categary';
import DeeperDetail from './deeperDetail';
import Comment from './comment';
const Detail = () => {

    const {pathname} = useLocation();
    const trailer = useRef();

    const {slug} = useParams();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

    


  return (
    <div className='detail-container'>
        <HelmetProvider>
            <Helmet>
                <title>Xem Phim Tề Thiên Đại Thánh</title>
            </Helmet>
        </HelmetProvider>
        <div className='grid wide'>
            <div className='row'>
                <div className='col c-9 m-9 l-9'>
                    <DeeperDetail trailer={trailer}/>
                    <div className='detail-navbar'>
                        <div className='detail-navbar-container'>
                            <span>NỘI DUNG PHIM</span>
                        </div>
                    </div>
                    <div className='detail-movie-content'>
                        <span>Shikimori-san Không Chỉ Dễ Thương Thôi Đâu - Kawaii dake ja Nai Shikimori-san cậu nam sinh trung học Izumi là một người xui xẻo bẩm sinh, nhưng anh lại may mắn khi có được cô bạn gái cùng lớp xinh đẹp và dễ thương là Shikimori. Mỗi khi cậu bạn trai Izumi gặp rắc rối, thì cô lại trở thành một người bạn gái ngầu lòi giải cứu Izumi. Câu chuyện cũng kể về cuộc sống thường ngày và đầy dễ thương giữa cặp đôi và những người bạn thân.</span>
                        <div className='detail-movie-content-img'>
                            <img src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/anh-gai-xinh-deo-kinh-cuoi-duyen.jpg" />
                        </div>
                    </div>
                    <div ref={trailer} className='detail-navbar'>
                        <div className='detail-navbar-container'>
                            <span>TRAILER</span>
                        </div>
                    </div>
                    <div className='detail-movie-trailer'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mCHUw7ACS8o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='detail-navbar'>
                        <div className='detail-navbar-container'>
                            <span>BÌNH LUẬN PHIM</span>
                        </div>
                    </div>
                    <div className='detail-movie-comment'>
                        <div className='detail-movie-comment-head'>
                            <div className='detail-movie-comment-head-number'>
                                <span>0 bình luận</span>
                            </div>
                            <div className='detail-movie-comment-order'>
                                <span style={{marginRight:"0.5rem"}}>Sắp Xếp Theo:</span>
                                <select>
                                    <option>Mới Nhất</option>
                                    <option>Cũ Nhất</option>
                                </select>
                            </div>
                        </div>
                        <div className='detail-movie-comment-form'>
                            <textarea placeholder='Viết bình luận...'/>
                        </div>
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                </div>
                <div className='col c-3 m-3 l-3'>
                    <Categary />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail