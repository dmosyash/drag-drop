import React, { Component } from 'react';
import Frame from './frames';
import Weapon from './Weapon';
import './../App.css';

class Board extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.getWeapon = this.getWeapon.bind(this); 

        this.renderFrames = this.renderFrames.bind(this);
    }

    renderFrames() {
        let self = this;
        return this.props.weaponList.map((frame, i) => {
            let dropedItem = self.state.selectedWeapon;
            let weapon = null;
            if (dropedItem) {
                weapon = (frame.value === dropedItem.value) ? <Weapon key={dropedItem.id} name={dropedItem.name} /> : null;
            }
            return (
                <div key={i} onClick={() => self.getWeapon(frame)}>
                    <Frame key={frame.id} name={frame.name} value={frame.value} index={i + 1}>
                        {weapon}
                    </Frame>
                </div>
            );
        });
    }

    getWeapon = (weapon) => {
        this.setState({
            selectedWeapon: weapon
        });
    }

    render() {
        return (
            <div className="weapon-catcher">
                { this.renderFrames() }
            </div>
        );
    };
}
export default Board;