import React from 'react';

//utils

import configServices from '../utils/config';



const MovieHome = (props) => {
    let img = `${configServices.ImgBaseUrl}w500${props.movie.poster_path}`
    
    let genereUno = props.movie.genres[0].name
    let genereTwo = props.movie.genres[1].name
    let genereTree = props.movie.genres[2].name

  
    return(
        <div className="col s12">
        <div className="card horizontal teal darken-3">
          <div className="card-image">
            <img src={img}/>
          </div>
            <div className="card-stacked">
                <div className="card-content">
                  <h3>{props.movie.title}</h3>
                  <h5>About:</h5>
                  <p>{props.movie.overview}</p>
                  <h5>Generes</h5>
                  <p>*{genereUno} *{genereTwo} *{genereTree}</p>
                  <meter
                    min="0"
                    max="100"
                    optimum="100"
                    low="40"
                    high="70"
                    value={props.movie.vote_average * 10}
                  /> <p> {props.movie.vote_average} </p>
                  <h5>Directors</h5>
                  <p>{props.directors[0].name}</p>
                </div>
            </div>
        </div>
      </div>
    );
}

export default MovieHome;