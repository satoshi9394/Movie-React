import React from 'react'

import configServices from '../utils/config';

const CardActors = (props) => {

    let img = `${configServices.ImgBaseUrl}w154/${props.actor.profile_path}`

    return(
    <div className="col s4">
        <div className="card-panel cyan darken-3" id='cardActors'>
            <div className="row valign-wrapper">
                <div className="col s4">
                    <img src={img} alt="Not Picture" className="circle responsive-img"/>
                </div>
                <div className="col s8">
                    <h6 className="black-text">
                        Actors: <br/>{props.actor.name}
                    </h6>
                    <p>
                        Character: <br/> {props.actor.character}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CardActors;