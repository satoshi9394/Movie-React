import React from 'react';
import configServices from '../utils/config';



const MovieHome = (props) => {
    let img = `${configServices.ImgBaseUrl}w1280${props.movie.backdrop_path}`
    
    return(
        <div className="col s12">
        <div className="card horizontal">
          <div className="card-image">
            <img src={img}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MovieHome;