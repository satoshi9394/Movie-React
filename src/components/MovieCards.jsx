import React from 'react'
import configServices from '../utils/config';


const MovieCards = (props) => {
    let img = `${configServices.ImgBaseUrl}w1280${props.movie.poster_path}`
    return(
        <div className='col s3'>
            <div className="card">
                <button type="submit" className="waves-effect waves-light">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator"
                    src={img}
                    onClick={props.clickHandler} 
                    id={props.value}
                    name={props.name}/>
                </div>
                </button>
{/*                 <button 
                className="btn waves-effect waves-light"
                type="submit"
                onClick={props.clickHandler} 
                value={props.value}
                name={props.name}>
                    Submit
                </button>  */}
            </div>
        </div>
    );
}

export default MovieCards;