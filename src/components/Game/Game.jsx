import React from 'react';
import './Game.css';
import headerImage from '../../assets/images/slots-logo.png'
import ReelsContainer from '../ReelsContainer/ReelsContainer';

const Game = () => {
    return(
        <div className='main-display'>
            <div className='header-image'>
                <img src={headerImage} alt="slot-logo" />
            </div>
            <div className='reels'>
                <ReelsContainer />            
            </div>
            <div className='game-controls'>

            </div>
        </div>
    )
}   

export default Game;