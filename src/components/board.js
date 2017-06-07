import React, { Component } from 'react';
import Frame from './frames';
import './../App.css';

class Board extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    renderFrames() {
        return this.props.weaponList.map((frame, i) => {
            return (
                <Frame key={frame.id} name={frame.name} value={frame.value} index={i + 1} />
            );
        });
    }

    render() {
        return(
            <div className="weapon-catcher" style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
                { this.renderFrames() }
            </div>
        );
    };
}

export default Board;