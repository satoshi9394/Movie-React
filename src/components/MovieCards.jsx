import React from 'react'
import configServices from '../utils/config';

import { Link } from 'react-router-dom'


const MovieCards = (props) => {
    let img = `${configServices.ImgBaseUrl}w1280${props.movie.poster_path}`
    let link = `/movie/${props.name}`
    return(
        <div className='col s3'>
            <div className="card">
                <Link to={link}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator"src={img}/>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCards;