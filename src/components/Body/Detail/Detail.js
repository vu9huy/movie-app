import React from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'
import MovieContent from './MovieContent/MovieContent';
import MovieSimilar from './MovieSimilar/MovieSimilar';
import MovieTrailer from './MovieTrailer/MovieTrailer';


const Detail = ({ catalog }) => {
    const { id } = useParams();
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    return (
        <div className='detail'>
            <MovieContent
                id={id}
                catalog={catalog}
            />
            <MovieTrailer
                id={id}
                catalog={catalog} />
            <MovieSimilar
                id={id}
                catalog={catalog}
            />
        </div>

    )
}

export default Detail;