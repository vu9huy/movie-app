
import React from 'react';
import './DisplaySearch.scss';
import GetSearch from './GetSearch';
import { useParams, Link } from 'react-router-dom';

import listApi, { catalog } from '../../../api/listApi';
import apiConfig from '../../../api/apiConfig';

function DisplaySearch() {
    const { keyword } = useParams();

    return (
        <div className='display-search flex-column'>
            <div className='header-semi-page background'></div>
            <div className='result-keyword'>Results for "<span>{keyword}</span>"</div>
            <GetSearch
                keyword={keyword}
                catalog={catalog.movie}
            />
            <GetSearch
                keyword={keyword}
                catalog={catalog.tv}
            />
        </div>
    )
}

export default DisplaySearch