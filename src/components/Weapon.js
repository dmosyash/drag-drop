import React from 'react';
import './../App.css';

const Weapon = (props) => {
    return (
        <div className="weapon">
            <center><h5>Weapon {props.name}</h5></center>
        </div>        
    );
}

export default Weapon;