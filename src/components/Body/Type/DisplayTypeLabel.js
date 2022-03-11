import React from 'react';
import './DisplayTypeLabel.scss'
import TypeLabel from './TypeLabel';

function DisplayTypeLabel({ catalog }) {
    return (
        <div className='display-typelabel'>
            <div className='header-semi-page background'></div>
            <TypeLabel
                catalog={catalog}
            />
        </div>
    )
}

export default DisplayTypeLabel