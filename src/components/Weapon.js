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
    },

    endDrag (props, monitor, component) {
        if (monitor.didDrop()) {
            let result = monitor.getDropResult();
            if (result.hasOwnProperty('success')) {
                component.updateDraggable();
            }
        }
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
        this.state = {
            draggable: true,
        };
    }

    updateDraggable() {
        this.setState({
            draggable: false
        });
    }

    render() {
        const { connectDragSource, isDragging } = this.props;
        let element = (
            <div className="weapon" style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 15,
                fontWeight: 'bold',
                cursor: this.state.draggable ? 'move' : 'not-allowed',
                backgroundColor: this.state.draggable ? 'yellow' : 'gray'
            }}>
                <center><h5>Weapon {this.props.name}</h5></center>
            </div>
        )
        if(this.state.draggable) {
            return connectDragSource(element);
        }
        return element;
    }
}

Weapon.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};
export default DragSource(weaponList[0].name, weaponSource, collect)(Weapon);