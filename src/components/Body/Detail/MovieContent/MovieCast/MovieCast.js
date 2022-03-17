import React, { useState, useEffect, Fragment } from 'react';
import './MovieCast.scss';
import listApi from '../../../../../api/listApi';
import apiConfig from '../../../../../api/apiConfig';

const MovieCast = ({ id, catalog }) => {

    const [movieCasts, setMovieCasts] = useState('');

    useEffect(() => {

        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                }
                const response = await listApi.getCast(catalog, id, params);

                setMovieCasts(response);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [id])


    return (
        movieCasts &&
        <Fragment>
            <p className='movie-content-detail-casts-title'>Casts</p>
            <div className='movie-content-detail-casts flex-row'>
                {movieCasts.cast.slice(0, 6).map((cast) => {
                    return (
                        cast.profile_path && <div key={cast.id} className='movie-content-detail-cast'>
                            <img src={apiConfig.w500Image(cast.profile_path)} />
                            <p className='movie-content-detail-cast-name'>{cast.name}</p>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default MovieCast;