import React from 'react'
import configServices from '../utils/config';


const MovieCards = (props) => {
    let img = `${configServices.ImgBaseUrl}w1280${props.movie.poster_path}`
    return(
        <div className='col s4'>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={img}/>
                </div>
            </div>
        </div>
    );
}

export default MovieCards;