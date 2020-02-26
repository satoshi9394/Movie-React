import React from 'react';
import configServices from '../utils/config';

//styles
import '../styles/MovieHome.css'



const MovieHome = (props) => {
    let img = `${configServices.ImgBaseUrl}w1280${props.movie.backdrop_path}`
    let background=`background-image: url(${img})`



    return(
        <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={img}/>
            <div className="card-title">

              <h4 id='titleMovie'>{props.movie.original_title}</h4>
              <p id='Infotext'>{props.movie.overview}</p>

              
            </div>
          </div>
        </div>
      </div>
    );
}

export default MovieHome;