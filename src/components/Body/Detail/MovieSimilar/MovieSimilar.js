import React, { useState, useEffect, Fragment } from 'react';
import './MovieSimilar.scss';
import listApi from '../../../../api/listApi';
import apiConfig from '../../../../api/apiConfig';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";



const MovieSimilar = ({ id, catalog }) => {

    const [movieSimilars, setMovieSimilars] = useState('');

    useEffect(() => {

        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                }
                const response = await listApi.getSimilar(catalog, id, params);

                setMovieSimilars(response.results);
                // console.log(response.results);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [id])


    return (
        movieSimilars &&
        <Fragment>
            <div className='movie-similars-title'>Similar</div>
            <div className='movie-similars type-label flex-column'>
                <Swiper
                    grabCursor={true}
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    className="display-list-container mySwiper"
                >
                    {movieSimilars.map((movieSimilar) => {
                        return (
                            <SwiperSlide key={movieSimilar.id} className='display-list-item movie-card'>
                                {!!movieSimilar.poster_path && <div
                                    key={movieSimilar.id} className=' movie-card'
                                >
                                    <Link to={'/' + movieSimilar.id}>
                                        <div className='movie-image'>
                                            <div className='movie-button button-type1'>
                                                <i className='bx bx-play'></i>
                                            </div>
                                            <img src={apiConfig.w500Image(movieSimilar.poster_path)} />
                                        </div>
                                        <p className='title'>{!!movieSimilar.original_name ? movieSimilar.original_name : movieSimilar.original_title}</p>
                                    </Link>
                                </div>}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Fragment>
    )
}

export default MovieSimilar;