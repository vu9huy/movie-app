import React from 'react';
import './GetSearch.scss';

import { Link } from 'react-router-dom';

import listApi from '../../../api/listApi';
import apiConfig from '../../../api/apiConfig';

import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import '../../../assets/fonts/boxicons-2.1.1/css/boxicons.min.css';

function GetSearch({ catalog, keyword }) {
    const [list, setList] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    function handleLoadMoreMovie() {
        setPageNum(pageNum + 1)
    }
    // function handleViewDetail() {

    // }
    useEffect(() => {
        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                    page: `${pageNum}`,
                    query: keyword
                }
                const response = await listApi.getSearch(catalog, params);
                const arr = response.results;

                setList([...arr]);

                // console.log(keyword);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [keyword])

    useEffect(() => {
        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                    page: `${pageNum}`,
                    query: keyword
                }
                const response = await listApi.getSearch(catalog, params);
                const arr = response.results;

                setList([...list, ...arr]);

                // console.log(keyword);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [pageNum])
    return (
        <div className='get-search'>
            <div className='display-list-top flex-row'>
                <div className='catalog'>{catalog === 'movie' ? 'Movies' : 'TV Series'}</div>
                {false && <button className='display-list-view-more button-type2'>View more</button>}

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
            {!!list.length && <button className='click-load-more button-type2' onClick={() => handleLoadMoreMovie()}>More</button>}
            {!list.length && <div className='no-result'> There are no {catalog === 'movie' ? 'movie' : 'tv series'} for "<span>{keyword}</span>" keyword!</div>}
        </div>
    )
}

export default GetSearch;