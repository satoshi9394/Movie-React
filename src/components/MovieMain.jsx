import React from 'react';
import configServices from '../utils/config';



const MovieHome = (props) => {
    let img = `${configServices.ImgBaseUrl}w1280${props.movie.backdrop_path}`
    //let background=`background-image: url(${img})`
    return(
        <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src={img}/>
            <p className="card-title">hola</p>
          </div>
        </div>
      </div>
    );
}

export default MovieHome;