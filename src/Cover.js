import React from 'react'
import coverimg from './images/cover_small.jpg';
import './Cover.css';

function Cover() {
    return (
        <div className="cover">
            <img src={coverimg} alt="cover" />
        </div>
    )
}

export default Cover
