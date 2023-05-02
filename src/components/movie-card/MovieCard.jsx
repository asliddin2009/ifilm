import React from 'react';
import { FaPlay } from 'react-icons/fa';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {
    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    const film = () => {
        if(item.first_air_date) {
            return item.first_air_date.split('-').splice(0, 1)
        } else if(item.release_date){
            return item.release_date.split('-').splice(0, 1)
        } else {
            return ""
        }
    }
    // console.log(item);;

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <FaPlay />
                </Button>
            </div>
            <h3 style={{fontSize: "15px"}}>{item.title || item.name} ({film()})</h3>
        </Link>
    );
}

export default MovieCard