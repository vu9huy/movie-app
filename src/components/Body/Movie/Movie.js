
import React from 'react';
import './Movie.scss';

import DisplayList from '../../../page/DisplayList/DisplayList';

import { catalog, type } from '../../../api/listApi';
import DisplayMain from '../../../page/DisplayMain/DisplayMain';

import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

function Movie() {


    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <div className='movie'>
            <div className='header-search background'>
            </div>

            <DisplayList
                catalog={catalog.movie}
                type={type.popular}
            />
            <DisplayList
                catalog={catalog.movie}
                type={type.topRated}
            />
            <DisplayList
                catalog={catalog.movie}
                type={type.upcoming}
            />
        </div>
    )
}

export default Movie;