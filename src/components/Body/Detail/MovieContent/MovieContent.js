import React, { useState, useEffect } from 'react';
import './MovieContent.scss';
import listApi from '../../../../api/listApi';
import apiConfig from '../../../../api/apiConfig';
import MovieCast from './MovieCast/MovieCast';


const MovieContent = ({ id, catalog }) => {

    const [movieDetail, setMovieDetail] = useState('');

    useEffect(() => {

        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                }
                const response = await listApi.getDetail(catalog, id, params);

                setMovieDetail(response);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [id])
    return (
        movieDetail && <div className='movie-content-container'>
            <div className='movie-detail-banner background'
                style={{
                    backgroundImage: `url(${apiConfig.originImage(movieDetail.backdrop_path)})`
                }}
            >
            </div>
            <div className='movie-content flex-row'>
                <div className='movie-content-potser'>
                    <img src={apiConfig.originImage(movieDetail.poster_path)} />
                </div>
                <div className='movie-content-detail flex-column'>
                    <p className='movie-content-detail-title'>{movieDetail.original_title || movieDetail.name}</p>
                    <div className='movie-content-detail-genres flex-row'>
                        {movieDetail.genres.map((genre) => {
                            return (<div key={genre.id} className='movie-content-detail-genre'>
                                {genre.name}
                            </div>)
                        })}
                    </div>
                    <p className='movie-content-detail-overview'>
                        {movieDetail.overview}
                    </p>
                    <MovieCast
                        id={id}
                        catalog={catalog}
                    />
                </div>
            </div>

        </div>
    )
}

export default MovieContent;