import React from 'react';
import './Footer.css';

//https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/
//问题：页面内容少的时候会多出来2.5rem，向下滚动才能看到footer, 而不是直接能看到footer

function Footer() {
    return (
        <div className="footer">
            <p>copyright @ jing 2021</p>
        </div>
    )
}

export default Footer
