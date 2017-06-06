import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { weaponList } from './dataService';

import './../App.css';

const weaponSource = {
    beginDrag(props) {
        return {
            weaponId: props.name
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Weapon extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div className="weapon" style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 15,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                <center><h5>Weapon {this.props.name}</h5></center>
            </div>
        )
    }
}

Weapon.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};
export default DragSource(weaponList[0].name, weaponSource, collect)(Weapon);