import React from 'react';
import Weapon from './Weapon';
import Board from './board';
import './../App.css';

const Home = () => {
    let weaponList = [
        {
            id: 1,
            name: 'aa',
            value: '11'
        }, {
            id: 2,
            name: 'bb',
            value: '22'
        }, {
            id: 3,
            name: 'cc',
            value: '33'
        }, {
            id: 4,
            name: 'dd',
            value: '44'
        }
    ];

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

export default Home;