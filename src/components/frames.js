import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { weaponList } from './dataService';
import Weapon from './Weapon';
import './../App.css';

const frameTarget = {
    drop(props, monitor) {
        let weapon = monitor.getItem();
        if(props.name === weapon.weaponId) {
            console.log('------');
            catchWeapon(weapon.weaponId);
        }
    }
};

let children = null;

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

function catchWeapon (weaponId) {
    let i = 0;
    for(i; i<weaponList.length; i++) {
        if(weaponList[i].name === weaponId) {
            that.child = (<Weapon key={weaponList[i].id} name={weaponList[i].name} />);
            return;
        }
    }
    return null;
}

let that;

class Frame extends Component {
    constructor(props) {
        super(props);
        this.child = null;
    }

    render() {
        that = this;
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
                <div className="frame">
                    <center><h5>Drop Here {this.props.index}</h5></center>
                    { this.child }
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