import React, { useEffect } from 'react'
import {  useLocation, useParams } from 'react-router-dom';
import '~/movieType/type/index.css';
import Order from '~/order';
import Categary from '~/outstanding/categary';
import TabCardDEtail from '~/outstanding/tab/tabCard/card';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Pagination from '~/pagination';
const TypeMovie = ({cache}) => {

    const {slug} = useParams();

    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

  return (
    <div className='type_movie-container'>
        <HelmetProvider>
            <Helmet>
                <title>{slug === 'phim-le' ? 'Phim Lẻ': slug === 'phim-bo' 
                ? 'Phim Bộ' : slug === 'anime' ? 'Anime' : 'Phim Chiếu Rạp'}</title>
            </Helmet>
        </HelmetProvider>
        <div className='grid wide'>
            <div className='row'>
                <div className='col c-9 m-9 l-9'>
                    <Order />
                    <div className='type_movie-card-container'>
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
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <TabCardDEtail />
                            <Pagination />
                        </div>
                    </div>
                </div>
                <div className='col c-3 m-3 l-3'>
                    <Categary cache={cache}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TypeMovie