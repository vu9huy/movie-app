import React, { useState, useEffect, Fragment } from 'react';
import './MovieTrailer.scss';
import listApi from '../../../../api/listApi';
import apiConfig from '../../../../api/apiConfig';

const MovieTrailer = ({ id, catalog }) => {

    const [movieTrailers, setMovieTrailers] = useState('');

    useEffect(() => {

        const fetchList = async () => {
            try {
                const params = {
                    api_key: apiConfig.apiKey,
                }
                const response = await listApi.getTrailer(catalog, id, params);

                setMovieTrailers(response.results);
                // console.log(response.results);

            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
        }
        fetchList();
    }, [id])


    return (
        movieTrailers &&
        <div className='movie-trailers flex-column'>
            {movieTrailers.slice(0, 3).map((trailer) => {
                return (<div key={trailer.id} className='movie-trailer'>
                    <p className='movie-trailer-title'>{trailer.name}</p>
                    <iframe width="1080" height="720"
                        src={`https://www.youtube.com/embed/${trailer.key}`}>
                    </iframe>
                </div>)
            })}
        </div>
    )
}

export default MovieTrailer;