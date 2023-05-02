import React from 'react';
import { FaPlay } from 'react-icons/fa';

import './movie-card.scss';

import { Link, useLocation } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {
    const location = useLocation()
    if (location.pathname === '/') {
        document.title = "Home"
    }
    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);


    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <FaPlay />
                </Button>
            </div>
            <h3 style={{fontSize: "15px"}}>{item.title}</h3>
        </Link>
    );
}

export default MovieCard