import React from 'react';
import './DisplayMain.scss';

import listApi from '../../api/listApi';
import apiConfig from '../../api/apiConfig';

import { useEffect, useState } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

function DisplayMain() {
    const [list, setList] = useState([]);

    SwiperCore.use([Autoplay]);

    useEffect(() => {
        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                    page: '1'
                }
                const response = await listApi.getTrending(params);
                const arr = response.results;

                setList(arr.slice(0, 4));

                // console.log(list);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [])


    return (<div className='display-main'>
        <Swiper
            modules={[Autoplay]}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            speed={800}
            autoplay={{ delay: 3000 }}
        >
            {
                list.map((item, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        {({ isActive }) => (
                            <div
                                style={{
                                    backgroundImage: `url(${apiConfig.originImage(item.backdrop_path)})`
                                }}
                                className={`display-main-item background ${isActive ? 'active' : ''}`}
                            >
                                <div className='display-main-item-detail flex-row'>
                                    <div className='display-main-item-text'>
                                        <p className='name'>{!!item.original_name ? item.original_name : item.original_title}</p>
                                        <p className='overview'>{item.overview}</p>
                                        <div className='button-group'>
                                            <Link to={`${!!item.original_title ? 'movie' : 'tv'}/${item.id}`}><button className='watch-now button-type1 button'>Watch now</button></Link>
                                            <button className='watch-trailer button-type2 button'>Watch trailer</button>
                                        </div>
                                    </div>
                                    <div className='poster'>
                                        <img src={apiConfig.originImage(item.poster_path)} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div >
    )
}


export default DisplayMain

