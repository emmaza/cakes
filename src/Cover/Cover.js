import React from 'react'
import './Cover.css';
import ImageGallery from 'react-image-gallery';
import a from '../images/carousel/a.jpg';
import b from '../images/carousel/b.jpg';
import c from '../images/carousel/c.JPG';
import d from '../images/carousel/d.JPG';
import e from '../images/carousel/e.JPG';
import f from '../images/carousel/f.JPG';
/* import thum_a from '../images/carousel/f-0.jpg';
import thum_b from '../images/carousel/f-1.jpg';
import thum_c from '../images/carousel/f-2.JPG';
import thum_d from '../images/carousel/f-3.JPG';
import thum_e from '../images/carousel/f-4.JPG';
import thum_f from '../images/carousel/thum_f.jpg'; */


function Cover() {
    const images = [{ original: a }, { original: b }, { original: c }, { original: d }, { original: e }, { original: f }]


    return (
        <div className="cover_div">
            <ImageGallery showThumbnails={false} additionalClass="cover" items={images} />
        </div>
        /*  <div className="cover">
             <img src={coverimg} alt="cover" />
         </div> */
    )
}

export default Cover
