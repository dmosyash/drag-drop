import React from 'react';
import Weapon from './Weapon';
import Board from './board';
import { weaponList } from './dataService';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './../App.css';

const Home = () => {
    let weapons = weaponList.map(w => {
        return (<Weapon key={w.id} name={w.name} />);    
    });

    return (
        <div className="home">
            <center><h3>Choose Your Weapon</h3></center>
            <div className="weapon-container">
                {weapons}
            </div>
            <br/>
            <Board weaponList={weaponList} />
        </div>
    );
}

export default DragDropContext(HTML5Backend)(Home);