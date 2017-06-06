import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { weaponList } from './dataService';
import './../App.css';

const frameTarget = {
    drop(props) {
        console.log(props);
        // getWeapon(props);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Frame extends Component {
    render() {
        const { connectDropTarget, isOver } = this.props;
        console.log(isOver);
        return connectDropTarget(
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
                <div className="frame">
                    <center><h5>Drop Here {this.props.index}</h5></center>
                    {this.props.children}
                </div>
                {isOver &&
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }} >Here</div>
                }
            </div>
        );
    }
}

export default DropTarget(weaponList[0].name, frameTarget, collect)(Frame);