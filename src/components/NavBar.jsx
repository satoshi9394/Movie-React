import React from 'react'
import { Link } from 'react-router-dom'



function NavBar() {
    return(
        
        <nav>
            <div className="row  blue-grey darken-2">
                <div className="col s4">
                    <i className="large material-icons">movie</i>
                </div>
                <div className="col s1 offset-s6">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="col s1">
                    holi
                </div>

            </div>
        </nav>
    );
}


export default NavBar