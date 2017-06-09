import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { weaponList } from './dataService';
import Weapon from './Weapon';
import './../App.css';

const frameTarget = {
    drop(props, monitor, component) {
        let weapon = monitor.getItem();
        if(props.name === weapon.weaponId) {
            component.catchWeapon(weapon.weaponId);
            return {success: true}
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Frame extends Component {
    constructor(props) {
        super(props);
        this.child = null;
        this.isDropped = false;
    }

    catchWeapon (weaponId) {
        let i = 0;
        for(i; i<weaponList.length; i++) {
            if(weaponList[i].name === weaponId) {
                this.child = (<Weapon key={weaponList[i].id} name={weaponList[i].name} dropStyle={{width: '50%', paddingBottom: '50%'}}/>);
                this.isDropped = true;
                return;
            }
        }
        return null;
    }

    render() {
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div className="frame">
                <div className="frame-container">
                    <center><h5>Drop Here {this.props.index}</h5></center>
                    {this.child}
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
                        backgroundColor: 'pink'
                    }} ></div>
                }
            </div>
        );
    }
}

export default DropTarget(weaponList[0].name, frameTarget, collect)(Frame);