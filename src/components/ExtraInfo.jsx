import React from 'react';


//utils
import {calcTime} from '../utils/formatTime'
import {convertMoney} from '../utils/formatCost'




const ExtraInfo = (props) => {
    let type
    switch(props.type){
        case 'time':
            type = calcTime(props.movie.runtime);
            break;
        case 'budget':
            type = convertMoney(props.movie.budget);
            break;
        case 'revenue':
            type = convertMoney(props.movie.revenue);
            break;
    }
  

    return(
        <div className="col s12">
        <div className="card horizontal teal darken-4 cyan-text text-accent-2 ">
          <div className="card-image">
            <i className="medium material-icons">{props.icon}</i>
          </div>
            <div className="card-stacked">
                <div className="card-content">
                    <h6>{props.title} {type}</h6>
                </div>
            </div>
        </div>
      </div>
    );
}

export default ExtraInfo;