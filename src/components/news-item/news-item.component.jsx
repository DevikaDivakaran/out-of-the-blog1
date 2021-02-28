
import React from 'react';
import './news-item.styles.scss'
import {Link} from 'react-router-dom' //used for routing to the pages

const NewsItem = ({title}) =>(
    <div 
    className='news-item'>
                <div className='content'>
                <h1 className='title'>{title}</h1>
                <span>
                <Link className="option" to="/article">See more... </Link>  
                </span>
            </div>
        </div>
)
export default NewsItem;
