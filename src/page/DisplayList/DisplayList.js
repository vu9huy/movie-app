
import React from 'react';
import './DisplayList.scss';

import listApi from '../../api/listApi';
import apiConfig from '../../api/apiConfig';

import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import '../../assets/fonts/boxicons-2.1.1/css/boxicons.min.css';

import { Link } from 'react-router-dom';

const DisplayList = ({ catalog, type }) => {
    const [list, setList] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    function handleLoadMoreMovie() {
        setPageNum(pageNum + 1)
    }

    useEffect(() => {
        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                    page: `${pageNum}`,
                }
                const response = await listApi.getList(catalog, type, params);
                const arr = response.results;

                setList([...list, ...arr]);

                // console.log(list);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [pageNum])

    return (
        <div className='display-list'>
            <div className='display-list-top flex-row'>
                <div className='catalog title'>{catalog === 'movie' ? 'Movies' : 'TV Series'}</div>
                <div className='type title'>{type.replaceAll('_', ' ')}</div>
                <Link className='view-more-catalog' to={`${catalog}s`}><button className='display-list-view-more  button-type2'>View more</button></Link>
                <Link className='view-more-type' to={`${catalog}s/${type}`}><button className='display-list-view-more  button-type2'>View more</button></Link>
            </div>
            <Swiper
                grabCursor={true}
                slidesPerView={'auto'}
                spaceBetween={10}
                className="display-list-container mySwiper"

            >
                {list.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={index} className='display-list-item movie-card'

                        >
                            <Link to={'/' + catalog + '/' + item.id}>
                                <div className='movie-image'>
                                    <div className='movie-button button-type1'>
                                        <i className='bx bx-play'></i>
                                    </div>
                                    <img src={apiConfig.w500Image(item.poster_path)} />
                                </div>
                                <p className='title'>{!!item.original_name ? item.original_name : item.original_title}</p>
                            </Link>

                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <button className='click-load-more' onClick={() => handleLoadMoreMovie()}>More</button>
        </div>
    )
}

export default DisplayList;