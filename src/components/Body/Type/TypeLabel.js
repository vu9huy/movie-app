import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
import './TypeLabel.scss'

import axios from 'axios';
import listApi from '../../../api/listApi';
import apiConfig from '../../../api/apiConfig';

import { Swiper, SwiperSlide } from "swiper/react";
import '../../../assets/fonts/boxicons-2.1.1/css/boxicons.min.css';

const TypeLabel = ({ catalog }) => {
    const { typeLabel } = useParams();
    const location = useLocation();

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
                const response = await listApi.getList(catalog, typeLabel, params);
                const arr = response.results;

                setList([...list, ...arr]);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [pageNum])

    return (
        <div className='type-label'>
            <div className='display-list-top flex-row'>
                <div className='catalog'>
                    {typeLabel.replaceAll('_', ' ')}
                    {catalog === 'movie' ? ' Movies' : ' TV Series'}
                </div>
            </div>
            <div className='display-list-container'>
                {list.map((item, index) => {
                    return (
                        !!item.poster_path && <div
                            key={index} className='display-list-item movie-card'
                        >
                            <Link to={'/' + item.id}>
                                <div className='movie-image'>
                                    <div className='movie-button button-type1'>
                                        <i className='bx bx-play'></i>
                                    </div>
                                    <img src={apiConfig.w500Image(item.poster_path)} />
                                </div>
                                <p className='title'>{!!item.original_name ? item.original_name : item.original_title}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <button className='click-load-more button-type2' onClick={() => handleLoadMoreMovie()}>More</button>
        </div>
    )

}

export default TypeLabel;