
import React from 'react';
import './Home.scss';

import DisplayList from '../../../page/DisplayList/DisplayList';

import listApi, { catalog, type } from '../../../api/listApi';
import DisplayMain from '../../../page/DisplayMain/DisplayMain';


function Home() {
    return (
        <div className='home'>
            <DisplayMain />
            <DisplayList
                catalog={catalog.movie}
                type={type.popular}
            />
            <DisplayList
                catalog={catalog.tv}
                type={type.popular}
            />
        </div>
    )
}

export default Home;