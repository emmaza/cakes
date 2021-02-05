import React from 'react'
import './Cover.css';
import ImageGallery from 'react-image-gallery';
import a from '../images/carousel/a.JPG';
import b from '../images/carousel/b.JPG';
import c from '../images/carousel/c.JPG';
import d from '../images/carousel/d.JPG';
import e from '../images/carousel/e.JPG';
import f from '../images/carousel/f.JPG';
import thum_a from '../images/carousel/f-0.JPG';
import thum_b from '../images/carousel/f-1.JPG';
import thum_c from '../images/carousel/f-2.JPG';
import thum_d from '../images/carousel/f-3.JPG';
import thum_e from '../images/carousel/f-4.JPG';
import thum_f from '../images/carousel/thum_f.jpg';


function Cover() {
    const images = [{ original: a, thumbnail: thum_a }, { original: b, thumbnail: thum_b, sizes: 50 }, { original: c, thumbnail: thum_c }, { original: d, thumbnail: thum_d }, { original: e, thumbnail: thum_e }, { original: f, thumbnail: thum_f }]


    return (
        <div>
            <ImageGallery showThumbnails="false" sizes="100px 100px" items={images} />
        </div>
        /*  <div className="cover">
             <img src={coverimg} alt="cover" />
         </div> */
    )
}

export default Cover
