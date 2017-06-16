import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { weaponList } from './dataService';
import Weapon from './Weapon';
import { Howl } from 'howler';
import './../App.css';

const frameTarget = {
    drop(props, monitor, component) {
        let weapon = monitor.getItem();
        if(props.name === weapon.weaponId) {
            console.log('po');
            component.catchWeapon(weapon.weaponId);
            return {success: true}
        } else {
            component.repelWeapon(weapon.weaponId);
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
        this.id = null;
    }

    componentDidMount () {
        this.catchAudio = new Howl({
            src: ['http://first.laughguru.com/assets/audio/Positive-Bingo.wav']
        });
        this.repelAudio =  new Howl({
            src: ['http://first.laughguru.com/assets/audio/Negative-Buzzer.wav']
        });
    }

    catchWeapon (weaponId) {
        let i = 0;         
        this.catchAudio.stop(this.id);
        this.repelAudio.stop(this.id);
        this.id = this.catchAudio.play();
        for(i; i<weaponList.length; i++) {
            if(weaponList[i].name === weaponId) {
                this.child = (<Weapon key={weaponList[i].id} name={weaponList[i].name} dropStyle={{marginTop: '0px', backgroundColor: 'transparent', border: 'none'}} draggable={false}/>);
                this.isDropped = true;
                return;
            }
        }
        return null;
    }

    repelWeapon (weaponId) {
        this.repelAudio.stop(this.id);
        this.catchAudio.stop(this.id);
        this.id = this.repelAudio.play();
    }

    render() {
        const { connectDropTarget, isOver } = this.props;
        let frameStyle = {
            position: 'absolute',
            left: this.props.x1 + '%',
            top: this.props.y1 + '%',
            width: this.props.width + '%',
            height: this.props.height + '%'
        }
        return connectDropTarget(
            <div style={frameStyle}>
                <div className="frame-container">
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
                        backgroundColor: 'green'
                    }} ></div>
                }
            </div>
        );
    }
}

export default DropTarget(weaponList[0].name, frameTarget, collect)(Frame);