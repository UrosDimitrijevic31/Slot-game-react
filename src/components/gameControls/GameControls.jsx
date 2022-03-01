import React from 'react';
import './GameControls.scss';
import BetControl from './betControl/BetControl';
import BetOneMax from './betOneMax/BetOneMax';
import PlayBtn from './playBtn/PlayBtn';

const GameControls = () => {
    return(
        <div className="bottom">
            <div className='left-side'>
                <BetControl />
                <BetOneMax />
            </div>             
            <div className='middle'>
                <PlayBtn />
            </div>

            <div className='right-side'>
                <div className='win-container'>
                    <div className='display-win'>
                        <span className='value'>24.00</span>
                        <hr />
                        <span className='label'>WIN</span>
                    </div>
                </div>
                <div className='balance-container'>
                    <div className='display-balance'>
                        <span className='value'>165256.12</span>    
                        <hr />
                        <span className='label'>BALANCE</span>
                    </div>
                </div>
            </div>
            {/* end right side */}
        </div>
    )    
}

export default GameControls;