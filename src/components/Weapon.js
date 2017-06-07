import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { weaponList } from './dataService';
import './../App.css';

let that = null;

const weaponSource = {
    beginDrag(props) {
        return {
            weaponId: props.name
        };
    },

    endDrag (props, monitor, component) {
        if (monitor.didDrop()) {
            let result = monitor.getDropResult();
            console.log(result);
            if (result.hasOwnProperty('success')) {
                console.log(component);
                that.draggable = false;
            }
        }
    },

    canDrag() {
        console.log(that.props, that.draggable);
        return that.draggable;
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Weapon extends Component {
    constructor(props) {
        super(props);
        this.draggable = true;
    }

    render() {
        that = this;
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