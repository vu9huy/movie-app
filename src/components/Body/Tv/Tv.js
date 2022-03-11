
import React from 'react';
import './Tv.scss';

import DisplayList from '../../../page/DisplayList/DisplayList';
import { catalog, type } from '../../../api/listApi';

import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

function Tv() {

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='tv'>
            <div className='header-search background'>
            </div>
            <DisplayList
                catalog={catalog.tv}
                type={type.popular}
            />
            <DisplayList
                catalog={catalog.tv}
                type={type.topRated}
            />
            <DisplayList
                catalog={catalog.tv}
                type={type.onTheAir}
            />
        </div>
    )
}

export default Tv;