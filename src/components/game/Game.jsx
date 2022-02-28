import React from 'react';
import './Game.scss';
import headerImage from '../../assets/images/slots-logo.png'
import ReelsContainer from '../reelsContainer/ReelsContainer';
import GameControls from '../gameControls/GameControls';

const Game = () => {
    return (
        <div className='main-display'>
            <div className='header-image'>
                <img src={headerImage} alt="slot-logo" />
            </div>
            <div className='reels'>
                <ReelsContainer />
            </div>
            <div className='game-controls'>
                <GameControls />
            </div>
        </div>
    )
}

export default Game;