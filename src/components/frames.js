import React from 'react';
import './../App.css';

const Frame = (props) => {
    return (
        <div className="frame">
            <center><h5>Drop Here {props.index}</h5></center>
            {props.children}
        </div>
    );
}

export default Frame;